import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';

import { environment } from '../../../environments/environment';
import { Contactmail } from './../../_models/contactmail';
import { MailService } from './../../_services/mail.service';
import { OfficeComponent } from './office/office.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  bsModalRef: BsModalRef;

  alerts: any[] = [{}];

  form: FormGroup;

  contactMail: Contactmail;
  mailSubject: string;
  busy = false;

  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService,
    private ms: MailService,
    private ts: TranslateService
  ) {}

  ngOnInit(): void {
    this.createContactForm();
  }

  onOfficeModal() {
    const lblTitle = 'Kantooruren';
    const lblCloseBtnName = 'Sluiten';

    const initialState = {
      title: lblTitle
    };
    this.bsModalRef = this.modalService.show(OfficeComponent, {
      initialState
    });
    this.bsModalRef.content.onSelected.subscribe(() => {
      // when closed do something eventualy
    });

    this.bsModalRef.content.closeBtnName = lblCloseBtnName;
  }

  submitContact() {
    this.contactMail = Object.assign({}, this.form.value);
    this.busy = true;
    this.ms.contactmail(this.contactMail).subscribe(
      () => {
        this.ts.get('CONTACT.SendSuccess').subscribe((res: string) => {
          this.ngxAlert('success', res);
        });
      },
      error => {
        this.ts.get('CONTACT.SendFailed').subscribe((res: string) => {
          this.ngxAlert('danger', res);
          this.busy = false;
        });
      },
      () => {
        this.createContactForm();
        this.busy = false;
      }
    );
  }

  createContactForm() {
    this.ts.get('CONTACT.MessageTitle').subscribe((res: string) => {
      this.mailSubject = res;
    });

    this.form = this.fb.group({
      subject: [this.mailSubject, Validators.required],
      name: [null, Validators.required],
      rR: [
        null,
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11)
        ]
      ],
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
        ])
      ],
      phone: [null],
      copySender: [true],
      message: ['', Validators.required],
      template: [null],
      data: [null],
      apiGuid: [environment.apiVsoftMailGuid, Validators.required],
      apiMailKey: [environment.apiVsoftSendFromAddress, Validators.required],
      apiNameKey: [environment.apiVsoftSendFromName, Validators.required]
    });
  }

  ngxAlert(ofType: string, message: string): void {
    this.alerts.push({
      type: ofType,
      msg: message,
      timeout: 2000
    });
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
