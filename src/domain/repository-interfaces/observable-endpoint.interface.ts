import { ReplaySubject } from 'rxjs'

export interface ObservableEndpointI<T> extends ReplaySubject<T> {
  readonly currentValue: any
  readonly isSuspended: boolean
  readonly hasSubscribers: boolean
  forceUpdate(): void
  suspend(): void
  resume(): void
}
