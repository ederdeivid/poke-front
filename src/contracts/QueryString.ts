export default interface QueryString {
  stringify(object: Record<string, any>): string;
}