/* eslint-disable import/no-extraneous-dependencies */
import { describe, expect, it } from 'vitest';

import { Country } from '#/utils/interfaces';
import { handlePage } from '#/utils/functions';

describe('pagination', () => {
  // initial store
  const mockedCountriesStore = {
    currentPage: 1,
    itemsPerPage: 10,
    offset: 0,
    countries: null as Country[] | null,
  };

  it.concurrent('loads 2nd page correctly', () => {
    const ans = handlePage(mockedCountriesStore, 2);
    expect(ans.currentPage).toEqual(2);
    expect(ans.offset).toEqual(10);
  });

  it.concurrent('loads 7th page correctly', async () => {
    const ans = handlePage(mockedCountriesStore, 7);
    expect(ans.currentPage).toEqual(7);
    expect(ans.offset).toEqual(60);
  });
});
