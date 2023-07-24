import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './produto.model';
import { environment } from 'src/environments/environment';
import { ProdutoRequest } from './produtoRequest.model';
import { HistoricoPreco } from './historicoPreco.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseUrl:string = environment.baseApiUrl+'produtos'
  constructor(
    private http:HttpClient
  ) { }

  getAll(currentPage:number=1,itemsPerPage:number=1000):Observable<ProdutoRequest>{
    return this.http.get<ProdutoRequest>(`${this.baseUrl}?page=${currentPage}&per_page=${itemsPerPage}`)
  }
  findById(produtoId: number):Observable<Produto>{
    return this.http.get<Produto>(`${this.baseUrl}/${produtoId}`)
  }
  getHistoricoPrecoOfProduto(produtoId: number):Observable<HistoricoPreco>{
    return this.http.get<HistoricoPreco>(`${this.baseUrl}/historicoprecoofproduto/${produtoId}`)
  }
  save(produto: Partial<Produto>):Observable<Produto>{
    return this.http.post<Produto>(`${this.baseUrl}`,produto)
  }
  update(produto: Partial<Produto>):Observable<Produto>{
    const url = `${this.baseUrl}/${produto.id}`;
    return this.http.put<Produto>(url,produto)
  }
  delete(produtoId:number):Observable<Produto>{
    return this.http.delete<Produto>(`${this.baseUrl}/${produtoId}`)
  }
}
