import { EntityId, TargetTrainingNodeCharacteristic } from '@/domain/type'
import { Type } from 'class-transformer'
import { action, computed, observable } from 'mobx'
import { TargetTrainingNodeCharacteristicVm } from '@/view-model/target-training-node-characteristic-vm'
import { TargetTrainingNodeVmI } from '@/view-model/target-training-node-vm.interface'

export class TargetTrainingNodeVm implements TargetTrainingNodeVmI {
  readonly id!: EntityId
  readonly parentId!: EntityId | null
  readonly type!: EntityId
  readonly type_name!: string
  @observable name!: string | null
  @observable active: boolean = true
  @Type(() => TargetTrainingNodeCharacteristicVm)
  characteristics!: TargetTrainingNodeCharacteristic[]
  private _parent: TargetTrainingNodeVmI | undefined

  @computed
  get isActive(): boolean {
    const parentIsActive = this._parent ? this._parent!.isActive : true
    return this.active && parentIsActive
  }

  @action
  suspend(): void {
    this.active = false
  }

  @action
  resume(): void {
    this.active = false
  }

  @action
  setParent(parent: TargetTrainingNodeVmI) {
    this._parent = parent
  }
}
