import { EntityId, TargetTrainingNodeGraph } from '@/domain/type'
import { WorkoutDraftEditorServiceI } from '@/domain/service-interfaces/workout-draft-editor-service.interface'
import { BaseRxVmI } from '@/view-model/base-rx-vm.interface'
import { IViewModel } from 'mobx-utils'
import { TargetTrainingNodeVmI } from '@/view-model/target-training-node-vm.interface'

export interface WorkoutDraftEditorVmFactoryI {
  create(id: EntityId): WorkoutDraftEditorVmI
}

export interface WorkoutDraftEditorVmConstructorI {
  new (
    _id: EntityId,
    _service: WorkoutDraftEditorServiceI
  ): WorkoutDraftEditorVmI
}

export interface WorkoutDraftEditorVmI extends BaseRxVmI {
  nodes: IViewModel<TargetTrainingNodeVmI>[]
}
