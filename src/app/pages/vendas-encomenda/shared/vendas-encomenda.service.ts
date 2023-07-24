import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VendaEncomendaRequest } from './vendaEncomendaRequest.model';
import { VendaEncomenda } from './vendaEncomenda.model';

@Injectable({
  providedIn: 'root'
})
export class VendasEncomendaService {

  private baseUrl:string = environment.baseApiUrl+'venda/encomenda'
  constructor(
    private http:HttpClient
  ) { }
  getAll(currentPage:number=1,itemsPerPage:number=1000):Observable<VendaEncomendaRequest>{
    return this.http.get<VendaEncomendaRequest>(`${this.baseUrl}?page=${currentPage}&per_page=${itemsPerPage}`)
  }
  findById(produtoId: number):Observable<VendaEncomenda>{
    return this.http.get<VendaEncomenda>(`${this.baseUrl}/${produtoId}`)
  }
  save(venda: Partial<VendaEncomenda>):Observable<VendaEncomenda>{
    return this.http.post<VendaEncomenda>(`${this.baseUrl}`,venda)
  }
  update(venda: Partial<VendaEncomenda>):Observable<VendaEncomenda>{
    const url = `${this.baseUrl}/${venda.id}`;
    return this.http.put<VendaEncomenda>(url,venda)
  }
  delete(produtoId:number):Observable<VendaEncomenda>{
    return this.http.delete<VendaEncomenda>(`${this.baseUrl}/${produtoId}`)
  }}
