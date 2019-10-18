import { TargetTrainingNode } from '@/domain/type'

export interface TargetTrainingNodeVmI extends TargetTrainingNode {
  readonly isActive: boolean
  setParent(parent: TargetTrainingNodeVmI): void
}
