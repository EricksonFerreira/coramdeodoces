import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoProdutoRequest } from './tipoProdutoRequest.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoProduto } from './tipoProduto.model';


@Injectable({
  providedIn: 'root'
})
export class TipoProdutoService {

  private baseUrl:string = environment.baseApiUrl+'tipoprodutos'
  constructor(
    private http:HttpClient
  ) { }

  getAll(currentPage:number=1,itemsPerPage:number=1000):Observable<TipoProdutoRequest>{
    return this.http.get<TipoProdutoRequest>(`${this.baseUrl}?page=${currentPage}&per_page=${itemsPerPage}`)
  }
  findById(produtoId: number):Observable<TipoProduto>{
    return this.http.get<TipoProduto>(`${this.baseUrl}/${produtoId}`)
  }
  save(produto: Partial<TipoProduto>):Observable<TipoProduto>{
    return this.http.post<TipoProduto>(`${this.baseUrl}`,produto)
  }
  update(produto: Partial<TipoProduto>):Observable<TipoProduto>{
    const url = `${this.baseUrl}/${produto.id}`;
    return this.http.put<TipoProduto>(url,produto)
  }
  delete(produtoId:number):Observable<TipoProduto>{
    return this.http.delete<TipoProduto>(`${this.baseUrl}/${produtoId}`)
  }
}
