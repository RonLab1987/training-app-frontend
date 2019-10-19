import { inject, injectable } from 'tsyringe'
import { WorkoutDraftRepositoryI } from '@/domain/repository-interfaces/workout-draft-repository.interface'
import { HttpApiAdapterI } from '@/infrastructure/api-adapter/http-api-adapter.interface'
import {
  EntityId,
  TargetTrainingNode,
  TargetTrainingNodeGraph
} from '@/domain/type'
import { ObservableEndpoint } from '@/infrastructure/utils/observable-endpoint'
import { ObservableEndpointI } from '@/domain/repository-interfaces/observable-endpoint.interface'
import { TargetWorkoutSetNodeNameDTO } from '@/domain/dto'

@injectable()
export class HttpWorkoutDraftRepository implements WorkoutDraftRepositoryI {
  private readonly _endpointPrefix = '/api/v1/target-workout'
  private readonly _getListEndpoint = `${this._endpointPrefix}/draft`
  private readonly _createDraftEndpoint = `${this._endpointPrefix}/draft/create`
  private readonly _deleteDraftEndpoint = (id: EntityId) =>
    `${this._endpointPrefix}/draft/${id}/delete`
  private readonly _getDraftGraphEndpoint = (id: EntityId) =>
    `${this._endpointPrefix}/draft/${id}`
  private readonly _setNodeNameEndpoint = (id: EntityId) =>
    `${this._endpointPrefix}/draft/${id}/set-node-name`

  constructor(
    @inject('HttpApiAdapter') private readonly _adapter: HttpApiAdapterI
  ) {}

  getList$(): ObservableEndpointI<TargetTrainingNode[]> {
    return ObservableEndpoint.init<TargetTrainingNode[]>(
      () => this._getList(),
      5
    )
  }

  getDraftGraph$(id: EntityId): ObservableEndpointI<TargetTrainingNodeGraph> {
    return ObservableEndpoint.init<TargetTrainingNodeGraph>(
      () => this._getDraftGraph(id),
      10
    )
  }

  createDraft(): Promise<EntityId> {
    return new Promise((resolve, reject) => {
      this._adapter
        .post(this._createDraftEndpoint)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error))
    })
  }

  deleteDraft(id: EntityId): Promise<EntityId> {
    return new Promise((resolve, reject) => {
      this._adapter
        .delete(this._deleteDraftEndpoint(id))
        .then((response) => resolve(response.data))
        .catch((error) => reject(error))
    })
  }

  setNodeName(dto: TargetWorkoutSetNodeNameDTO): Promise<EntityId> {
    const { id, ...payload } = dto
    return new Promise((resolve, reject) => {
      this._adapter
        .post(this._setNodeNameEndpoint(id), payload)
        // .then((response) => resolve(response.data))
        // slowdown
        .then((response) => setTimeout(() => resolve(response.data), 3000))
        .catch((error) => reject(error))
    })
  }

  private _getList<T>(): Promise<T> {
    return new Promise((resolve, reject) => {
      this._adapter
        .get(this._getListEndpoint)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error))
    })
  }

  private _getDraftGraph<T>(id: EntityId): Promise<T> {
    return new Promise((resolve, reject) => {
      this._adapter
        .get(this._getDraftGraphEndpoint(id))
        .then((response) => resolve(response.data))
        .catch((error) => reject(error))
    })
  }
}
