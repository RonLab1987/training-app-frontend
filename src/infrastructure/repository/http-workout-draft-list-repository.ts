import { inject, injectable } from 'tsyringe'
import { WorkoutDraftListRepositoryI } from '@/domain/repository-interfaces/workout-draft-list-repository.interface'
import { HttpApiAdapterI } from '@/infrastructure/api-adapter/http-api-adapter.interface'
import { TargetTrainingNode } from '@/domain/type'
import { ObservableEndpoint } from '@/infrastructure/utils/observable-endpoint'
import { ObservableEndpointI } from '@/domain/repository-interfaces/observable-endpoint.interface'

@injectable()
export class HttpWorkoutDraftListRepository
  implements WorkoutDraftListRepositoryI {
  private readonly _getListEndpoint = '/api/v1/target-workout/draft'

  constructor(
    @inject('HttpApiAdapter') private readonly _adapter: HttpApiAdapterI
  ) {}

  getList$(): ObservableEndpointI<TargetTrainingNode[]> {
    return ObservableEndpoint.init<TargetTrainingNode[]>(
      () => this._getList(),
      30
    )
  }

  private _getList<T>(): Promise<T> {
    return new Promise((resolve, reject) => {
      this._adapter
        .get(this._getListEndpoint)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error))
    })
  }
}
