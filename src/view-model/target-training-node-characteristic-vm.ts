import {
  EntityId,
  EntityValue,
  TargetTrainingNodeCharacteristic
} from '@/domain/type'
import { observable } from 'mobx'

export class TargetTrainingNodeCharacteristicVm
  implements TargetTrainingNodeCharacteristic {
  type!: EntityId
  type_name!: string
  @observable value!: EntityValue
}
