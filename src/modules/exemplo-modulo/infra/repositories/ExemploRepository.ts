import { AxiosResponse } from 'axios'
import { IExemploRepository } from '../../domian/repositories/ExemploRepository'
import http from 'shared/services/ServiceConfig'

export class ExemploRepository implements IExemploRepository {
  async get(): Promise<string> {
    const resp: AxiosResponse<string> = await http.get('/exemplo-path')
    return resp.data
  }
}
