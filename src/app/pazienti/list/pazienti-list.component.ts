import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

import { PaginationService } from '../../core/services/pagination.service';
import { Paziente } from '../models/paziente.model';
import { filter } from 'rxjs/operators/filter';

@Component({
  selector: 'pazienti-list',
  templateUrl: 'pazienti-list.component.html'
})

export class PazientiListComponent {

  dataSource = new MatTableDataSource<Paziente>();
  displayedColumns = ['id', 'nome', 'cognome', 'dataDiNascita', 'actions'];
  //filter: string;
  filterForm: FormGroup;

  @Input('dataSource')
  set dataSourceForTable(value: Paziente[]) {
      this.dataSource = new MatTableDataSource<Paziente>(value);
  }

  @Input() totalCount: number;
  @Output() onDeleteCustomer = new EventEmitter();
  @Output() onPageSwitch = new EventEmitter();
  @Output() onFilter= new EventEmitter();

  constructor(public paginationService: PaginationService, 
    private fb: FormBuilder) { 
      this.createForm();
      this.filterForm.valueChanges.subscribe(data => {
        const filter = data.filter;
        if(filter!==null && filter.length>1){
          this.onFilter.emit(data.filter);
        }
      })
  }

  createForm() {
    this.filterForm = this.fb.group({
      filter: '', 
    });
  }
}