import { NgModule, ModuleWithProviders } from '@angular/core';
// import { appDirective } from './{your-path}';
// import { appService } from './{your-path}';

import { MdToHtmlPipe } from '../_helpers/md-to-html.pipe';

@NgModule({
  declarations: [
    MdToHtmlPipe // so we use already for a pipe
    // appDirective
  ],
  exports: [
    MdToHtmlPipe // so we use already for a pipe
    // appDirective
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
      // providers: [ appService ]
    };
  }
}
