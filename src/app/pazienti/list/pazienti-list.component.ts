import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { PaginationService } from '../../core/services/pagination.service';
import { Paziente } from '../models/paziente.model';

@Component({
  selector: 'pazienti-list',
  templateUrl: 'pazienti-list.component.html'
})

export class PazientiListComponent {

  dataSource = new MatTableDataSource<Paziente>();
  displayedColumns = ['id', 'nome', 'dataDiNascita', 'actions'];

  @Input('dataSource')
  set dataSourceForTable(value: Paziente[]) {
      this.dataSource = new MatTableDataSource<Paziente>(value);
  }

  @Input() totalCount: number;
  @Output() onDeleteCustomer = new EventEmitter();
  @Output() onPageSwitch = new EventEmitter();

  constructor(public paginationService: PaginationService) { }
}