import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import { Customer } from '../../models/customer.model';
import { PaginationService } from './pagination.service';

@Injectable()
export class HttpBaseService {

    private headers = new HttpHeaders();
    private endpoint = `http://localhost:8010/api/pazienti/`;

    constructor(
        private httpClient: HttpClient,
        private paginationService: PaginationService) {

        this.headers = this.headers.set('Content-Type', 'application/json');
        this.headers = this.headers.set('Accept', 'application/json');
    }

    getAll<T>() {
        const mergedUrl = `${this.endpoint}` +
            //`page/?page=${this.paginationService.page}&pageCount=${this.paginationService.pageCount}`;
            `page/${this.paginationService.page * this.paginationService.pageCount}/${this.paginationService.pageCount}`;

        return this.httpClient.get<T>(mergedUrl, { observe: 'response' });
    }

    getSingle<T>(id: number) {
        return this.httpClient.get<T>(`${this.endpoint}${id}`);
    }

    add<T>(toAdd: T) {
        return this.httpClient.post<T>(this.endpoint, toAdd, { headers: this.headers });
    }

    update<T>(id: number, toUpdate: T) {
        return this.httpClient.put<T>(`${this.endpoint}${id}`,
            toUpdate,
            { headers: this.headers });
    }

    delete(id: number) {
        return this.httpClient.delete(`${this.endpoint}${id}`);
    }
}
