import Visibility from 'visibilityjs'
import { ReplaySubject } from 'rxjs'
import { ObservableEndpointI } from '@/domain/repository-interfaces/observable-endpoint.interface'

interface PromisifyDataCallback {
  <T>(...args: any[]): Promise<T>
}
type timeout = number | undefined

export class ObservableEndpoint<T> extends ReplaySubject<T>
  implements ObservableEndpointI<T> {
  _timeout: timeout
  private _timeoutId: number | undefined
  private _currentValue: any
  private _isSuspended:boolean = false

  constructor(readonly _dataCallback: PromisifyDataCallback, timeoutInSeconds: timeout) {
    super(1)
    this._timeout = timeoutInSeconds ? timeoutInSeconds * 1000 : undefined
  }

  get currentValue() {
    return this._currentValue
  }

  get hasSubscribers() {
    const observers = this.observers
    return Array.isArray(observers) && observers.length > 0
  }

  get isSuspended() {
    if (this._isSuspended || !this.hasSubscribers) {
      return true
    }
    return Visibility.isSupported() ? Visibility.hidden() : false
  }

  private _loop() {
    if (this._timeout === undefined || this.isStopped) {
      return
    }
    const callback = () => {
      this.isSuspended ? this._loop() : this._getData()
    }
    this._timeoutId = setTimeout(callback, this._timeout)
  }

  private _getData(...args: any[]) {
    if (this.isStopped) {
      return
    }
    this._dataCallback<T>(...args)
      .then((data: T) => {
        this._loop()
        this._currentValue = data
        this.next(data)
      })
      .catch((error: any) => {
        this.error(error)
      })
  }

  forceUpdate(...args: any[]) {
    clearTimeout(this._timeoutId)
    return this._getData(...args)
  }

  suspend() {
    this._isSuspended = true
    clearTimeout(this._timeoutId)
  }

  resume() {
    if (!this._isSuspended) {
      return
    }
    this._isSuspended = false
    this._getData()
  }

  complete() {
    clearTimeout(this._timeoutId)
    super.complete()
  }

  unsubscribe() {
    clearTimeout(this._timeoutId)
    super.unsubscribe()
  }

  static init<T>(dataCallback: PromisifyDataCallback, timeoutInSeconds: timeout):ObservableEndpointI<T> {
    const instance = new ObservableEndpoint<T>(
      dataCallback,
      timeoutInSeconds
    )
    instance._getData()
    return instance
  }
}
