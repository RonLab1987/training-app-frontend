import { inject, injectable } from 'tsyringe'
import { action, observable } from 'mobx'
const graphology = require('graphology')
import { plainToClass, plainToClassFromExist } from 'class-transformer'
import {
  EntityId,
  TargetTrainingNode,
  TargetTrainingNodeGraph
} from '@/domain/type'
import {
  WorkoutDraftEditorServiceFactoryI,
  WorkoutDraftEditorServiceI
} from '@/domain/service-interfaces/workout-draft-editor-service.interface'
import {
  WorkoutDraftEditorVmConstructorI,
  WorkoutDraftEditorVmFactoryI,
  WorkoutDraftEditorVmI
} from '@/view-model/workout-draft-editor-vm.interface'
import { ObservableEndpointI } from '@/domain/repository-interfaces/observable-endpoint.interface'
import { TargetTrainingNodeVm } from '@/view-model/target-training-node-vm'

import { createViewModel, IViewModel } from 'mobx-utils'
import { TargetTrainingNodeVmI } from '@/view-model/target-training-node-vm.interface'

interface TraceDownCallbackI {
  (id: EntityId, node: TargetTrainingNode, parentId?: EntityId): void
}

class _WorkoutDraftEditorVm implements WorkoutDraftEditorVmI {
  private readonly _graphSource$!: ObservableEndpointI<TargetTrainingNodeGraph>
  private _nodesMap: Map<
    EntityId,
    IViewModel<TargetTrainingNodeVmI>
  > = new Map()
  private _rootId: EntityId | undefined
  private _graph: Graphology | undefined

  @observable.ref nodes: IViewModel<TargetTrainingNodeVmI>[] = []

  constructor(
    private readonly _id: EntityId,
    private readonly _service: WorkoutDraftEditorServiceI
  ) {
    this._graphSource$ = this._service.getDraftGraph$()
    this._graphSource$.subscribe((graphSource: TargetTrainingNodeGraph) => {
      this._computeSelf(graphSource)
    })
  }

  suspend(): void {
    this._graphSource$.suspend()
  }

  resume(): void {
    this._graphSource$.resume()
  }

  private _computeSelf(graphSource: TargetTrainingNodeGraph) {
    this._syncGraph(graphSource)
    this._syncNodesMap()
    this._syncNodes()
  }

  @action
  private _syncGraph(graphSource: TargetTrainingNodeGraph) {
    const graph: Graphology = new graphology.DirectedGraph({
      allowSelfLoops: false
    })
    graphSource.nodes.forEach((node) => {
      graph.addNode(node.id, node)
    })
    graphSource.edges.forEach((edge) => {
      graph.addDirectedEdge(edge.parent, edge.child)
    })
    this._rootId = graphSource.rootId
    this._graph = graph
  }

  private _syncNodesMap() {
    // delete not actual exist nodes
    const actualIdList: EntityId[] = this._graph!.nodes()
    this._nodesMap!.forEach((node, id, map) => {
      if (actualIdList.includes(id)) {
        return
      }
      map.delete(id)
    })
    // update exist or add new node to map
    this._traceDown((id, source, parentId) => {
      if (this._nodesMap.has(id)) {
        this._updateEditableTargetTrainingNodeVm(
          this._nodesMap.get(id)!,
          source
        )
        return
      }
      this._nodesMap.set(
        id,
        this._createEditableTargetTrainingNodeVm(
          source,
          parentId ? this._nodesMap.get(parentId) : undefined
        )
      )
    })
  }

  private _createEditableTargetTrainingNodeVm(
    source: TargetTrainingNode,
    parent?: IViewModel<TargetTrainingNodeVmI>
  ): IViewModel<TargetTrainingNodeVmI> {
    const instance: TargetTrainingNodeVmI = plainToClass<
      TargetTrainingNodeVmI,
      TargetTrainingNode
    >(TargetTrainingNodeVm, source)
    if (parent) {
      //@ts-ignore
      instance.setParent(parent)
    }
    return createViewModel(instance)
  }

  private _updateEditableTargetTrainingNodeVm(
    node: IViewModel<TargetTrainingNodeVmI>,
    source: TargetTrainingNode
  ): void {
    plainToClassFromExist<TargetTrainingNodeVmI, TargetTrainingNode>(
      node.model,
      source
    )
  }

  @action
  private _syncNodes(): void {
    const nodes: IViewModel<TargetTrainingNodeVmI>[] = []
    this._nodesMap.forEach((node) => {
      nodes.push(node)
    })
    this.nodes = nodes
  }

  private _traceDown(callback: TraceDownCallbackI, parentId?: EntityId): void {
    if (!parentId) {
      callback(this._rootId!, this._graph!.getNodeAttributes(this._rootId))
      this._traceDown(callback, this._rootId)
      return
    }
    this._graph!.forEachOutNeighbor(
      parentId,
      (id: EntityId, node: TargetTrainingNode) => {
        callback(id, node, parentId!)
        this._traceDown(callback, id)
      }
    )
  }
}

export const WorkoutDraftEditorVm: WorkoutDraftEditorVmConstructorI = _WorkoutDraftEditorVm

@injectable()
export class WorkoutDraftEditorVmFactory
  implements WorkoutDraftEditorVmFactoryI {
  constructor(
    @inject('WorkoutDraftEditorServiceFactory')
    private readonly _serviceFactory: WorkoutDraftEditorServiceFactoryI,
    @inject('WorkoutDraftEditorVmConstructor')
    private readonly _vmConstructor: WorkoutDraftEditorVmConstructorI
  ) {}

  create(id: EntityId): WorkoutDraftEditorVmI {
    return new this._vmConstructor(id, this._serviceFactory.create(id))
  }
}
