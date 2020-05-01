import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css'],
})
export class PoliciesComponent implements OnInit {
  title: string;
  closeBtnName: string;

  typeCookiesAndPrivacy: string;

  public onSelected: Subject<boolean>;

  accordeonOneAtATime = true;
  accordeonBasicOpen = true;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {}

  onAcceptPrivacy() {
    localStorage.setItem('vsoft_privacy', this.typeCookiesAndPrivacy);
    // this.onSelected.next(true);
    this.bsModalRef.hide();
  }

  logSelected(selectedType: string) {
    this.typeCookiesAndPrivacy = selectedType;
  }
}
