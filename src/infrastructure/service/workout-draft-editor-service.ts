import { EntityId, TargetTrainingNodeGraph } from '@/domain/type'
import { ObservableEndpointI } from '@/domain/repository-interfaces/observable-endpoint.interface'
import { inject, injectable } from 'tsyringe'
import { WorkoutDraftRepositoryI } from '@/domain/repository-interfaces/workout-draft-repository.interface'
import {
  WorkoutDraftEditorServiceConstructorI,
  WorkoutDraftEditorServiceFactoryI,
  WorkoutDraftEditorServiceI
} from '@/domain/service-interfaces/workout-draft-editor-service.interface'

@injectable()
export class WorkoutDraftEditorServiceFactory
  implements WorkoutDraftEditorServiceFactoryI {
  private _services: Map<EntityId, WorkoutDraftEditorServiceI> = new Map()

  constructor(
    @inject('WorkoutDraftRepository')
    private readonly _repository: WorkoutDraftRepositoryI,
    @inject('WorkoutDraftEditorServiceConstructor')
    private readonly _serviceConstructor: WorkoutDraftEditorServiceConstructorI
  ) {}

  create(id: EntityId): WorkoutDraftEditorServiceI {
    if (!this._services.has(id)) {
      this._services.set(id, new this._serviceConstructor(id, this._repository))
    }
    return this._services.get(id)!
  }
}

export const WorkoutDraftEditorService: WorkoutDraftEditorServiceConstructorI = class WorkoutDraftEditorService
  implements WorkoutDraftEditorServiceI {
  private readonly _graphSource$: ObservableEndpointI<TargetTrainingNodeGraph>

  constructor(
    private readonly _id: EntityId,
    private readonly _repository: WorkoutDraftRepositoryI
  ) {
    this._graphSource$ = this._repository.getDraftGraph$(this._id)
  }

  getDraftGraph$(): ObservableEndpointI<TargetTrainingNodeGraph> {
    return this._graphSource$
  }
}
