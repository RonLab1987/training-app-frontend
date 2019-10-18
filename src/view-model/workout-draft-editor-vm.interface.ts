import { EntityId, TargetTrainingNodeGraph } from '@/domain/type'
import { WorkoutDraftEditorServiceI } from '@/domain/service-interfaces/workout-draft-editor-service.interface'

export interface WorkoutDraftEditorVmFactoryI {
  create(id: EntityId): WorkoutDraftEditorVmI
}

export interface WorkoutDraftEditorVmConstructorI {
  new (
    _id: EntityId,
    _service: WorkoutDraftEditorServiceI
  ): WorkoutDraftEditorVmI
}

export interface WorkoutDraftEditorVmI {
  _graphSource: TargetTrainingNodeGraph | undefined
}
