import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Contrato } from '../contrato.model';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {

  constructor(public http: HttpClient) { }

  private httpOptions = {headers: new HttpHeaders({'Content-Type': 'aplication/json' })};
  private contratosUrl = 'http://localhost:3000/contratos'

  getAll(): Observable<Contrato[]>{
    return this.http.get<Contrato[]>(this.contratosUrl, this.httpOptions)
  }
}
