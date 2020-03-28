export interface CoronaCountry {
  country: string;
  countryInfo: CountryInfo;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  casesPerOneMillion?: number;
  deathsPerOneMillion?: number;
}

interface CountryInfo {
  _id?: number;
  lat: number;
  long: number;
  flag: string;
  iso3?: string;
  iso2?: string;
}
