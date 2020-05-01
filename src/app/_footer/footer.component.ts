import { Component, OnInit } from '@angular/core';

import { version } from '../../../package.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // outputPath = 'https://github.com/openSource4Brokers/Portfolio58';
  version: string = version;

  // Get the current year for the copyright
  year = new Date().getFullYear();

  constructor() {}

  ngOnInit() {}
}
