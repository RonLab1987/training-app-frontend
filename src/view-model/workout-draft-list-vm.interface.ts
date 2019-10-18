import { EntityId, TargetTrainingNode } from '@/domain/type'
import { BaseRxVmI } from '@/view-model/base-rx-vm.interface'

export interface WorkoutDraftListVmI extends BaseRxVmI {
  workoutDraftList: TargetTrainingNode[]
  createDraft(): Promise<EntityId>
  deleteDraft(id: EntityId): Promise<EntityId>
}
