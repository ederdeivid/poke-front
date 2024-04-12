import HttpClient from '@/contracts/HttpClient'
import axios from 'axios';

export default class AxiosAdapter implements HttpClient {
  public async get<T> (url: string): Promise<T> {
    const response = await axios.get(url)
    return response.data
  }

  public async post<T> (url: string, data?: any): Promise<T> {
    const response = await axios.get(url, data)
    return response.data
  }
}