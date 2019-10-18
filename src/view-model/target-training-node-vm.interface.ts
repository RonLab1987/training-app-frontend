import { TargetTrainingNode } from '@/domain/type'

export interface TargetTrainingNodeVmI extends TargetTrainingNode {
  readonly isActive: boolean
  readonly level: number
  setParent(parent: TargetTrainingNodeVmI): void
}

export interface TargetTrainingNodeVmSourceI extends TargetTrainingNode {
  readonly level: number
}
