export default class Pagination {
  private pagesAmount: number = 1;
  private currentPage: number = 1;
  private perPage: number = 5;

  public execute<T> (data: T[], perPage: number = 5, currentPage: number = 1): { items: T[], currentPage: number, amount: number; } {
    
    this.perPage = perPage;
    this.currentPage = currentPage;
    this.pagesAmount = Math.ceil(data.length / this.perPage);
    
    if (perPage < 1 || currentPage > this.pagesAmount) return { items: [], currentPage: 1, amount: 0 }
    return {
      items: this.paginate(data),
      currentPage,
      amount: this.pagesAmount,
    };
  }

  private paginate<T> (data: T[]): T[] {
    return data.slice(this.perPage * (this.currentPage - 1), this.perPage * (this.currentPage - 1) + this.perPage);
  }
}