import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClienteRequest } from './clienteRequest.model';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl:string = environment.baseApiUrl+'cliente'
  constructor(
    private http:HttpClient
  ) { }
  getAll(currentPage:number=1,itemsPerPage:number=1000):Observable<ClienteRequest>{
    return this.http.get<ClienteRequest>(`${this.baseUrl}?page=${currentPage}&per_page=${itemsPerPage}`)
  }
  findById(produtoId: number):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.baseUrl}/${produtoId}`)
  }
  save(produto: Partial<Cliente>):Observable<Cliente>{
    return this.http.post<Cliente>(`${this.baseUrl}`,produto)
  }
  update(produto: Partial<Cliente>):Observable<Cliente>{
    const url = `${this.baseUrl}/${produto.id}`;
    return this.http.put<Cliente>(url,produto)
  }
  delete(produtoId:number):Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.baseUrl}/${produtoId}`)
  }
}
