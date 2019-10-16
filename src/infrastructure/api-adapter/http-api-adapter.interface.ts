import { AxiosInstance } from 'axios'

export interface HttpApiAdapterI extends AxiosInstance {}

export interface HttpApiAdapterFactoryI {
  create(): HttpApiAdapterI
}
