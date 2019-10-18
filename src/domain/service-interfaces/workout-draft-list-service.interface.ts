import { EntityId, TargetTrainingNode } from '../type'
import { ObservableEndpointI } from '@/domain/repository-interfaces/observable-endpoint.interface'

export interface WorkoutDraftListServiceI {
  getList$(): ObservableEndpointI<TargetTrainingNode[]>
  createDraft(): Promise<EntityId>
  deleteDraft(id: EntityId): Promise<EntityId>
}
