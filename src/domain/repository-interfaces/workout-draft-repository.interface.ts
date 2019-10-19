import { EntityId, TargetTrainingNode, TargetTrainingNodeGraph } from '../type'
import { ObservableEndpointI } from '@/domain/repository-interfaces/observable-endpoint.interface'
import { TargetWorkoutSetNodeNameDTO } from '@/domain/dto'

export interface WorkoutDraftRepositoryI {
  getList$(): ObservableEndpointI<TargetTrainingNode[]>
  getDraftGraph$(id: EntityId): ObservableEndpointI<TargetTrainingNodeGraph>
  createDraft(): Promise<EntityId>
  deleteDraft(id: EntityId): Promise<EntityId>
  setNodeName(dto: TargetWorkoutSetNodeNameDTO): Promise<EntityId>
}
