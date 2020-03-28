import { Component, OnInit } from '@angular/core';

import { CoronaService } from './../../_services/corona.service';
import { CoronaGlobal } from '../../_models/coronaGlobal';
import { CoronaCountry } from '../../_models/coronaCountry';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css']
})
export class CoronaComponent implements OnInit {
  coronaGlobalNumbers: CoronaGlobal;
  coronaCountries: CoronaCountry[];
  coronaCountry: CoronaCountry;

  lastUpdate: any;
  busyGlobal = false;
  busySingleCountry = false;

  constructor(private cs: CoronaService) {}

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries() {
    const countries = this.cs.getAllCountries();
    countries.subscribe(
      (data: CoronaCountry[]) => {
        this.coronaCountries = data;
        // console.log(this.coronaCountries);
      },
      err => console.log(err)
    );
  }

  getGlobalNumbers() {
    this.busyGlobal = true;
    const corona = this.cs.getGlobal();
    corona.subscribe(
      (data: CoronaGlobal) => {
        this.coronaGlobalNumbers = data;
        // console.log(this.coronaGlobalNumbers);
        this.lastUpdate = new Date(this.coronaGlobalNumbers.updated);
        this.busyGlobal = false;
      },
      err => {
        console.log(err);
        this.busyGlobal = true;
      }
    );
  }

  getCountryDetails(indexInList: number) {
    this.coronaCountry = this.coronaCountries[indexInList];
    // console.log(this.coronaCountry);
  }
}
