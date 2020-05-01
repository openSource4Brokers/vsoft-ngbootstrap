import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { BsModalRef } from 'ngx-bootstrap/modal';

import { LanguageService } from './../../_services/language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  title: string;
  closeBtnName: string;

  languages = [];
  selected = '';

  public onSelected: Subject<boolean>;

  constructor(
    public bsModalRef: BsModalRef,
    private languageService: LanguageService
  ) {}

  public ngOnInit(): void {
    this.onSelected = new Subject();
    this.languages = this.languageService.getLanguages();
    this.selected = this.languageService.selected;
  }

  select(lng) {
    this.languageService.setLanguage(lng);
    // this.saveSettings();
    // this.popoverCtrl.dismiss();

    this.onSelected.next(true);
    this.bsModalRef.hide();
  }
}
