import { ReplaySubject } from 'rxjs'

export interface ObservableEndpointI<T> extends ReplaySubject<T> {
  readonly currentValue: any
  forceUpdate(): void
}
