import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.css']
})
export class HostingComponent implements OnInit {
  accordeonOneAtATime = true;
  accordeonHostingOpen = true;

  constructor() {}

  ngOnInit(): void {}
}
