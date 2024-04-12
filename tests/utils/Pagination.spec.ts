import { test, expect } from 'vitest'
import Pagination from '@/utils/Pagination';

const fakeArrayData: number[] = Array.from(Array(21).keys());
describe('Pagination tests', () => {
  test('Should correctly calculate the number of pages when specifying items per page', () => {
    const pagination = new Pagination().execute(fakeArrayData, 5, 1);
    expect(pagination).toMatchObject({ items: [0, 1, 2, 3, 4], currentPage: 1, amount: 5 });
  })

  test('Should return correct paginated values when pagination parameters are applied to third page', () => {
    const pagination = new Pagination().execute(fakeArrayData, 5, 3);
    expect(pagination).toMatchObject({ items: [10, 11, 12, 13, 14], currentPage: 3, amount: 5 });
  })

  test('Should returns empty values when passing an empty array to be paginated', () => {
    const pagination = new Pagination().execute([]);
    expect(pagination).toMatchObject({ items: [], currentPage: 1, amount: 0 });
  })

  test('Should returns empty when passing a wrong perPage value', () => {
    const pagination = new Pagination().execute(fakeArrayData, 0);
    expect(pagination).toMatchObject({ items: [], currentPage: 1, amount: 0 });
  })

  test('Should returns empty when passing a wrong currentPage value', () => {
    const pagination = new Pagination().execute(fakeArrayData, 5, 100);
    expect(pagination).toMatchObject({ items: [], currentPage: 1, amount: 0 });
  })
})