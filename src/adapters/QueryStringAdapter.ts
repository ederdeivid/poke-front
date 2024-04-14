import QueryString from '@/contracts/QueryString';

export default class QueryStringAdpter implements QueryString {
  stringify (params: Record<string, any>): string {
    return new URLSearchParams(params).toString()
  }
}