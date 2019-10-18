import { EntityId, TargetTrainingNode, TargetTrainingNodeGraph } from '../type'
import { ObservableEndpointI } from '@/domain/repository-interfaces/observable-endpoint.interface'

export interface WorkoutDraftRepositoryI {
  getList$(): ObservableEndpointI<TargetTrainingNode[]>
  getDraftGraph$(id: EntityId): ObservableEndpointI<TargetTrainingNodeGraph>
  createDraft(): Promise<EntityId>
  deleteDraft(id: EntityId): Promise<EntityId>
}
