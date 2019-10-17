import { EntityId } from '@/domain/type'

export interface toDetailViewCallbackI {
  (id: EntityId): void
}
