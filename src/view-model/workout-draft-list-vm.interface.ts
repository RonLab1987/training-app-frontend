import { EntityId, TargetTrainingNode } from '@/domain/type'

export interface WorkoutDraftListVmI {
  workoutDraftList: TargetTrainingNode[]
  createDraft(): Promise<EntityId>
  deleteDraft(id: EntityId): Promise<EntityId>
}
