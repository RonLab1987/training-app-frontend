import { EntityId } from '@/domain/type'

export interface GoToDetailViewRouteCallbackI {
  (id: EntityId): void
}

export interface GoToViewRouteCallbackI {
  (): void
}
