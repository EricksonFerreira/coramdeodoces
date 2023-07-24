import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { VendedorRequest } from './vendedorRequest.model';
import { Observable } from 'rxjs';
import { Vendedor } from './vendedor.model';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  private baseUrl:string = environment.baseApiUrl+'vendedores'
  constructor(
    private http:HttpClient
  ) { }

  getAll(currentPage:number=1,itemsPerPage:number=1000):Observable<VendedorRequest>{
    return this.http.get<VendedorRequest>(`${this.baseUrl}?page=${currentPage}&per_page=${itemsPerPage}`)
  }
  findById(produtoId: number):Observable<Vendedor>{
    return this.http.get<Vendedor>(`${this.baseUrl}/${produtoId}`)
  }
  save(produto: Partial<Vendedor>):Observable<Vendedor>{
    return this.http.post<Vendedor>(`${this.baseUrl}`,produto)
  }
  update(produto: Partial<Vendedor>):Observable<Vendedor>{
    const url = `${this.baseUrl}/${produto.id}`;
    return this.http.put<Vendedor>(url,produto)
  }
  delete(produtoId:number):Observable<Vendedor>{
    return this.http.delete<Vendedor>(`${this.baseUrl}/${produtoId}`)
  }
}
