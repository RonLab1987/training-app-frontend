import axios from 'axios'
import {
  HttpApiAdapterFactoryI,
  HttpApiAdapterI
} from './http-api-adapter.interface'

export class HttpApiAdapterFactory implements HttpApiAdapterFactoryI {
  create(): HttpApiAdapterI {
    return axios.create()
  }
}
