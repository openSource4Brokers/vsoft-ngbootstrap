import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PoliciesComponent } from './_navbar/policies/policies.component';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LanguageService } from './_services/language.service';
import { MailService } from './_services/mail.service';
import { LanguageComponent } from './_navbar/language/language.component';
import { NavbarComponent } from './_navbar/navbar.component';
import { FooterComponent } from './_footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    PoliciesComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    FontAwesomeModule,
    AppRoutingModule,
  ],
  providers: [
    Title,
    LanguageService,
    MailService,
    BsModalRef,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  entryComponents: [LanguageComponent, PoliciesComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
