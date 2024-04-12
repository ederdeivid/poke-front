export default interface HttpClient {
  get<T> (url: string): Promise<T>;
  post<T> (url: string, data?: any): Promise<T>;
}