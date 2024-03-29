import { WorkoutDraftListServiceI } from '@/domain/service-interfaces/workout-draft-list-service.interface'
import { EntityId, TargetTrainingNode } from '@/domain/type'
import { ObservableEndpointI } from '@/domain/repository-interfaces/observable-endpoint.interface'
import { inject, injectable } from 'tsyringe'
import { WorkoutDraftRepositoryI } from '@/domain/repository-interfaces/workout-draft-repository.interface'

@injectable()
export class WorkoutDraftListService implements WorkoutDraftListServiceI {
  readonly _list$: ObservableEndpointI<TargetTrainingNode[]>

  constructor(
    @inject('WorkoutDraftRepository')
    private readonly _repository: WorkoutDraftRepositoryI
  ) {
    this._list$ = this._repository.getList$()
  }

  getList$(): ObservableEndpointI<TargetTrainingNode[]> {
    return this._list$
  }

  createDraft(): Promise<EntityId> {
    const promise = this._repository.createDraft()
    promise.then(() => this.forceUpdate())
    return promise
  }

  deleteDraft(id: EntityId): Promise<EntityId> {
    const promise = this._repository.deleteDraft(id)
    promise.then(() => this.forceUpdate())
    return promise
  }

  forceUpdate() {
    this._list$.forceUpdate()
  }
}
