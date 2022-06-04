// Generated by https://quicktype.io

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side: string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface Aud {
  name: string;
  symbol: string;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Translation {
  official: string;
  common: string;
}

export interface NativeName {
  eng: Translation;
  gil: Translation;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: any;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: any;
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: any;
  flag: string;
  maps: Maps;
  population: number;
  gini: any;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: CoatOfArms;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
}
