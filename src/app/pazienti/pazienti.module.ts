import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PazientiRoutes } from './pazienti.routing';

import { PazientiDataService } from './services/pazienti-data.service';

import { PazientiPageComponent } from './pages/pazienti-page.component';
import { PazientiListComponent } from './list/pazienti-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PazientiRoutes),
    MatPaginatorModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    FormsModule
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
