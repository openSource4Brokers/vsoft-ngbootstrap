import { SharedModule } from '../shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

import { AccordionModule } from 'ngx-bootstrap/accordion';

import { ContentfulService } from './../../_services/contentful.service';
import { MdToHtmlPipe } from './../../_helpers/md-to-html.pipe';

import { MarintegraalRoutingModule } from './marintegraal-routing.module';
import { MarintegraalComponent } from './marintegraal.component';

@NgModule({
  declarations: [MarintegraalComponent],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    MarintegraalRoutingModule,
    AccordionModule.forRoot(),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ContentfulService]
})
export class MarintegraalModule {}
