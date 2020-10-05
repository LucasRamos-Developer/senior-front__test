import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { PaginationResponse } from '../responses/pagination.response';
import { CidadeSimple } from '../models/cidade.simple';

import { Observable } from 'rxjs';  
import { DefaultResponse } from '../responses/default.response';
import { Cidade } from '../models/cidade';

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})

export class CidadeService {

  _url = 'http://localhost:8080/cidades';

  constructor( private http: HttpClient) { }

  getList(page : number = 1): Observable<PaginationResponse<CidadeSimple>> {
    const ajaxurl = `${this._url}?page=${page}`;
    return this.http.get<PaginationResponse<CidadeSimple>>(ajaxurl);
  }

  getSearch(cep : string) : Observable<DefaultResponse<Cidade>> {
    const ajaxurl = `${this._url}/search?page=${cep}`;
    return this.http.get<DefaultResponse<Cidade>>(ajaxurl);
  }

}