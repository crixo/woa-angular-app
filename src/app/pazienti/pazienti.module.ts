import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { PazientiRoutes } from './pazienti.routing';

import { PazientiDataService } from './services/pazienti-data.service';

import { PazientiPageComponent } from './pages/pazienti-page.component';
import { PazientiListComponent } from './list/pazienti-list.component';

@NgModule({
  imports: [
    RouterModule.forChild(PazientiRoutes),
    SharedModule
],
  exports: [],
  declarations: [
    PazientiListComponent, 
    PazientiPageComponent],
  providers: [
    PazientiDataService
  ],
})
export class PazientiModule { }
