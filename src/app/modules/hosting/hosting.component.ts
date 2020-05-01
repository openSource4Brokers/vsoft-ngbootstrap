import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.css'],
})
export class HostingComponent implements OnInit {
  accordeonOneAtATime = true;
  accordeonHostingOpen = true;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Vsoft Hosting');
  }
}
