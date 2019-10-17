import { WorkoutDraftListVmI } from '@/view-model/workout-draft-list-vm.interface'
import { inject, injectable } from 'tsyringe'
import { WorkoutDraftListServiceI } from '@/domain/service-interfaces/workout-draft-list-service.interface'
import { action, observable } from 'mobx'
import { TargetTrainingNode } from '@/domain/type'

@injectable()
export class WorkoutDraftListVm implements WorkoutDraftListVmI {
  @observable.ref workoutDraftList: TargetTrainingNode[] = []

  constructor(
    @inject('WorkoutDraftListService')
    private readonly _service: WorkoutDraftListServiceI
  ) {
    this._service.getList$().subscribe((workoutDraftList) => {
      this._setWorkoutDraftList(workoutDraftList)
    })
  }

  @action
  private _setWorkoutDraftList(workoutDraftList: TargetTrainingNode[]) {
    this.workoutDraftList = workoutDraftList
  }
}
