/* eslint-disable import/prefer-default-export */
export const handlePage = (countriesStore: any, pageNumber: number) => {
  const newCountriesStore = { ...countriesStore };
  newCountriesStore.currentPage = pageNumber;
  newCountriesStore.offset = (newCountriesStore.currentPage - 1) * newCountriesStore.itemsPerPage;
  return newCountriesStore;
};
