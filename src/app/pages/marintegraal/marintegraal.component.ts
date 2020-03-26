import { Component, OnInit } from '@angular/core';

import { Entry } from 'contentful';
import { ContentfulService } from '../../_services/contentful.service';

@Component({
  selector: 'app-marintegraal',
  templateUrl: './marintegraal.component.html',
  styleUrls: ['./marintegraal.component.css']
})
export class MarintegraalComponent implements OnInit {
  accordeonUpdateOpen = true;
  accordeonOneAtATime = true;

  contentfulUpdatesEntry: Entry<any>;
  contentfulContractTypesEntry: Entry<any>;

  constructor(private cfService: ContentfulService) {}

  ngOnInit(): void {
    const contentfulUpdateId = '64Wa2kez6Yo9OqgdAAxq8s';
    this.cfService.getContentDetail(contentfulUpdateId).subscribe(result => {
      this.contentfulUpdatesEntry = result;
    });
    const contentfulContractTypesId = '1eD6PrHZAV7K843r9KUvXN';
    this.cfService
      .getContentDetail(contentfulContractTypesId)
      .subscribe(result => {
        this.contentfulContractTypesEntry = result;
      });
    // 1eD6PrHZAV7K843r9KUvXN
  }
}
