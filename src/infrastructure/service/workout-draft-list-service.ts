import { WorkoutDraftListServiceI } from '@/domain/service-interfaces/workout-draft-list-service.interface'
import { TargetTrainingNode } from '@/domain/type'
import { ObservableEndpointI } from '@/domain/repository-interfaces/observable-endpoint.interface'
import { inject, injectable } from 'tsyringe'
import { WorkoutDraftListRepositoryI } from '@/domain/repository-interfaces/workout-draft-list-repository.interface'

@injectable()
export class WorkoutDraftListService implements WorkoutDraftListServiceI {
  private _list$: ObservableEndpointI<TargetTrainingNode[]> | null = null

  constructor(
    @inject('WorkoutDraftListRepository')
    private readonly _repository: WorkoutDraftListRepositoryI
  ) {}

  getList$(): ObservableEndpointI<TargetTrainingNode[]> {
    if (!this._list$) {
      this._list$ = this._repository.getList$()
    }
    return this._list$
  }
}
