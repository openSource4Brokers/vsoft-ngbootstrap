import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CoronaCountry } from '../_models/coronaCountry';
import { CoronaGlobal } from '../_models/coronaGlobal';

@Injectable()
export class CoronaService {
  baseUrl = 'https://corona.lmao.ninja/';

  constructor(private csHttp: HttpClient) {}

  getGlobal(): Observable<CoronaGlobal> {
    return this.csHttp.get<CoronaGlobal>(this.baseUrl + 'all');
  }

  getAllCountries(): Observable<CoronaCountry[]> {
    return this.csHttp.get<CoronaCountry[]>(this.baseUrl + 'countries');
  }

  getSingleCountry(country: string): Observable<CoronaCountry> {
    return this.csHttp.get<CoronaCountry>(
      this.baseUrl + 'countries/' + country
    );
  }
}
