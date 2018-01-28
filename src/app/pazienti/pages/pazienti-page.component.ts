import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, filter } from 'rxjs/operators';

import { PazientiDataService } from '../services/pazienti-data.service';
import { PaginationService } from '../../core/services/pagination.service';
import { Paziente } from '../models/paziente.model';

@Component({
    selector: 'app-overview',
    templateUrl: 'pazienti-page.component.html'
})

export class PazientiPageComponent implements OnInit {

    dataSource: Paziente[];
    totalCount: number;

    constructor(
        private customerDataService: PazientiDataService,
        private paginationService: PaginationService) { }

    ngOnInit(): void {
        this.getPazienti();
    }

    switchPage(event: PageEvent) {
        this.paginationService.change(event);
        this.getPazienti();
    }

    filter(filter: string){
        console.log('Filter value: '+filter)
        this.paginationService.filter = filter;
        this.getPazienti();
    }

    delete(customer: Paziente) {
        this.customerDataService.fireRequest(customer, 'DELETE')
            .subscribe(() => {
                this.dataSource = this.dataSource.filter(x => x.id !== customer.id);
            });
    }

    getPazienti() {
        this.customerDataService.getPagedPazienti()
            .subscribe((result: any) => {
              console.log(result)
              console.log(result.body.totalRecords)
                this.totalCount = result.body.totalRecords;//JSON.parse(result.body).totalRecords;
                this.dataSource = result.body.records;
            });
    }
}