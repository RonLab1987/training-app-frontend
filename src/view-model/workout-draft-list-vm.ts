import { WorkoutDraftListVmI } from '@/view-model/workout-draft-list-vm.interface'
import { inject, injectable } from 'tsyringe'
import { WorkoutDraftListServiceI } from '@/domain/service-interfaces/workout-draft-list-service.interface'
import { action, observable } from 'mobx'
import {
  EntityId,
  TargetTrainingNode,
  TargetTrainingNodeGraph
} from '@/domain/type'
import { ObservableEndpointI } from '@/domain/repository-interfaces/observable-endpoint.interface'

@injectable()
export class WorkoutDraftListVm implements WorkoutDraftListVmI {
  @observable.ref workoutDraftList: TargetTrainingNode[] = []
  private readonly _workoutDraftList$: ObservableEndpointI<TargetTrainingNode[]>

  constructor(
    @inject('WorkoutDraftListService')
    private readonly _service: WorkoutDraftListServiceI
  ) {
    this._workoutDraftList$ = this._service.getList$()
    this._workoutDraftList$.subscribe((workoutDraftList) => {
      this._setWorkoutDraftList(workoutDraftList)
    })
  }

  @action
  private _setWorkoutDraftList(workoutDraftList: TargetTrainingNode[]) {
    this.workoutDraftList = workoutDraftList
  }

  createDraft(): Promise<EntityId> {
    return this._service.createDraft()
  }

  deleteDraft(id: EntityId): Promise<EntityId> {
    return this._service.deleteDraft(id)
  }

  suspend(): void {
    this._workoutDraftList$.suspend()
  }

  resume(): void {
    this._workoutDraftList$.resume()
  }
}
