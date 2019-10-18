import { inject, injectable } from 'tsyringe'
import { action, observable } from 'mobx'
import { EntityId, TargetTrainingNodeGraph } from '@/domain/type'
import {
  WorkoutDraftEditorServiceFactoryI,
  WorkoutDraftEditorServiceI
} from '@/domain/service-interfaces/workout-draft-editor-service.interface'
import {
  WorkoutDraftEditorVmConstructorI,
  WorkoutDraftEditorVmFactoryI,
  WorkoutDraftEditorVmI
} from '@/view-model/workout-draft-editor-vm.interface'

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

class _WorkoutDraftEditorVm implements WorkoutDraftEditorVmI {
  @observable.ref _graphSource: TargetTrainingNodeGraph | undefined

  constructor(
    private readonly _id: EntityId,
    private readonly _service: WorkoutDraftEditorServiceI
  ) {
    this._service
      .getDraftGraph$()
      .subscribe((graphSource: TargetTrainingNodeGraph) => {
        this._seyGraphSource(graphSource)
      })
  }

  @action
  private _seyGraphSource(graphSource: TargetTrainingNodeGraph) {
    this._graphSource = graphSource
  }
}
export const WorkoutDraftEditorVm: WorkoutDraftEditorVmConstructorI = _WorkoutDraftEditorVm
