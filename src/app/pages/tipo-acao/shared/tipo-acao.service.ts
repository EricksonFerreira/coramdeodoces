import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoAcaoRequest } from './tipoAcaoRequest.model';
import { TipoAcao } from './tipoAcao.model';

@Injectable({
  providedIn: 'root'
})
export class TipoAcaoService {
  private baseUrl:string = environment.baseApiUrl+'tipoacao'
  constructor(
    private http:HttpClient
  ) { }
  getAll(currentPage:number=1,itemsPerPage:number=1000):Observable<TipoAcaoRequest>{
    return this.http.get<TipoAcaoRequest>(`${this.baseUrl}?page=${currentPage}&per_page=${itemsPerPage}`)
  }
  findById(produtoId: number):Observable<TipoAcao>{
    return this.http.get<TipoAcao>(`${this.baseUrl}/${produtoId}`)
  }
  save(produto: Partial<TipoAcao>):Observable<TipoAcao>{
    return this.http.post<TipoAcao>(`${this.baseUrl}`,produto)
  }
  update(produto: Partial<TipoAcao>):Observable<TipoAcao>{
    const url = `${this.baseUrl}/${produto.id}`;
    return this.http.put<TipoAcao>(url,produto)
  }
  delete(produtoId:number):Observable<TipoAcao>{
    return this.http.delete<TipoAcao>(`${this.baseUrl}/${produtoId}`)
  }
}
