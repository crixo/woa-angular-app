import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { PaginationModel } from '../models/pagination.model';

@Injectable()
export class PaginationService {
    private paginationModel: PaginationModel;

    get page(): number {
        return this.paginationModel.pageIndex;
    }

    get selectItemsPerPage(): number[] {
        return this.paginationModel.selectItemsPerPage;
    }

    get pageCount(): number {
        return this.paginationModel.pageSize;
    }

    get filter(): string{
        return this.paginationModel.filter;
    }

    set filter(filter: string){
        this.paginationModel.filter = filter;
        this.paginationModel.pageIndex = 0;
    }

    constructor() {
        this.paginationModel = new PaginationModel();
    }

    change(pageEvent: PageEvent) {
        console.log(pageEvent);
        this.paginationModel.pageIndex = pageEvent.pageIndex;// + 1;
        this.paginationModel.pageSize = pageEvent.pageSize;
        this.paginationModel.allItemsLength = pageEvent.length;
    }
}