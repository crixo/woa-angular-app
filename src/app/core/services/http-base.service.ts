import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import { Customer } from '../../models/customer.model';
import { PaginationService } from './pagination.service';

@Injectable()
export class HttpBaseService {

    private headers = new HttpHeaders();
    private endpoint = `http://localhost:8010/api`;

    constructor(
        private httpClient: HttpClient,
        private paginationService: PaginationService) {

        this.headers = this.headers.set('Content-Type', 'application/json');
        this.headers = this.headers.set('Accept', 'application/json');
    }

    getPages<T>(entityName: string) {
        const skip = (this.paginationService.page) * this.paginationService.pageCount;
        const take = this.paginationService.pageCount;
        const filter = this.paginationService.filter;
        let mergedUrl = `${this.endpoint}` +
            //`page/?page=${this.paginationService.page}&pageCount=${this.paginationService.pageCount}`;
            `/${entityName}/page/${skip}/${take}`;
        if(filter!==undefined){
            mergedUrl += `?filter=${filter}`;
        }

        return this.httpClient.get<T>(mergedUrl, { observe: 'response' });
    }

    getSingle<T>(entityName: string, id: number) {
        const mergedUrl = `${this.endpoint}/${entityName}/${id}`;
        return this.httpClient.get<T>(mergedUrl);
    }

    add<T>(entityName: string, toAdd: T) {
        const mergedUrl = `${this.endpoint}/${entityName}`;
        return this.httpClient.post<T>(mergedUrl, toAdd, { headers: this.headers });
    }

    update<T>(entityName: string, id: number, toUpdate: T) {
        const mergedUrl = `${this.endpoint}/${entityName}/${id}`;
        return this.httpClient.put<T>(mergedUrl,
            toUpdate,
            { headers: this.headers });
    }

    delete(entityName: string, id: number) {
        const mergedUrl = `${this.endpoint}/${entityName}/${id}`;
        return this.httpClient.delete(mergedUrl);
    }
}
