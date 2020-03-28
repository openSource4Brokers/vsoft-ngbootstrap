import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoronaComponent } from './corona.component';

const routes: Routes = [{ path: '', component: CoronaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoronaRoutingModule { }
