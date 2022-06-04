import { Country } from '#/utils/interfaces';
import { defineStore } from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const useCountries = defineStore('countries', {
  state: () => ({
    currentPage: 1,
    itemsPerPage: 10,
    offset: 0,
    countries: null as Country[] | null,
  }),
});
