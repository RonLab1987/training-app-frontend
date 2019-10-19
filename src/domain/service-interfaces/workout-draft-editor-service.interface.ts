import { EntityId, TargetTrainingNode, TargetTrainingNodeGraph } from '../type'
import { ObservableEndpointI } from '@/domain/repository-interfaces/observable-endpoint.interface'
import { WorkoutDraftRepositoryI } from '@/domain/repository-interfaces/workout-draft-repository.interface'
import { TargetWorkoutSetNodeNameDTO } from '@/domain/dto'

export interface WorkoutDraftEditorServiceFactoryI {
  create(id: EntityId): WorkoutDraftEditorServiceI
}

export interface WorkoutDraftEditorServiceConstructorI {
  new (
    _id: EntityId,
    _repository: WorkoutDraftRepositoryI
  ): WorkoutDraftEditorServiceI
}

export interface WorkoutDraftEditorServiceI {
  getDraftGraph$(): ObservableEndpointI<TargetTrainingNodeGraph>
  setNodeName(dto: TargetWorkoutSetNodeNameDTO): Promise<EntityId>
}
