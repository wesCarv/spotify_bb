import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios'

export const client: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

class ServiceConfig {
  public async get<T, B, R = AxiosResponse<T>>(
    url: string,
    data?: AxiosRequestConfig<B>
  ): Promise<R> {
    try {
      return await client.get(url, data)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  public async post<T, B, R = AxiosResponse<T>>(url: string, data?: B): Promise<R> {
    try {
      return await client.post(url, data)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  public async put<T, B, R = AxiosResponse<T>>(url: string, data?: B): Promise<R> {
    try {
      return await client.put(url, data)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  public async patch<T, B, R = AxiosResponse<T>>(url: string, data?: B): Promise<R> {
    try {
      return await client.patch(url, data)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  public async delete<T, B, R = AxiosResponse<T>>(
    url: string,
    data?: AxiosRequestConfig<B>
  ): Promise<R> {
    try {
      return await client.delete(url, data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export default new ServiceConfig()
