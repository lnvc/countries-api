import { defineStore } from 'pinia';

interface ITheme {
  theme: 'dark' | 'light',
}

// eslint-disable-next-line import/prefer-default-export
export const useTheme = defineStore('main', {
  state: () => ({
    theme: 'dark',
  } as ITheme),
  getters: {
    getTheme: (state: ITheme) => state.theme,
  },
});
