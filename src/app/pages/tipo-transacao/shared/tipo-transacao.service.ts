import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoTransacaoRequest } from './tipoTransacaoRequest.model';
import { TipoTransacao } from './tipoTransacao.model';

@Injectable({
  providedIn: 'root'
})
export class TipoTransacaoService {

  private baseUrl:string = environment.baseApiUrl+'tipopagamento'
  constructor(
    private http:HttpClient
  ) { }
  getAll(currentPage:number=1,itemsPerPage:number=1000):Observable<TipoTransacaoRequest>{
    return this.http.get<TipoTransacaoRequest>(`${this.baseUrl}?page=${currentPage}&per_page=${itemsPerPage}`)
  }
  findById(produtoId: number):Observable<TipoTransacao>{
    return this.http.get<TipoTransacao>(`${this.baseUrl}/${produtoId}`)
  }
  save(produto: Partial<TipoTransacao>):Observable<TipoTransacao>{
    return this.http.post<TipoTransacao>(`${this.baseUrl}`,produto)
  }
  update(produto: Partial<TipoTransacao>):Observable<TipoTransacao>{
    const url = `${this.baseUrl}/${produto.id}`;
    return this.http.put<TipoTransacao>(url,produto)
  }
  delete(produtoId:number):Observable<TipoTransacao>{
    return this.http.delete<TipoTransacao>(`${this.baseUrl}/${produtoId}`)
  }
}
