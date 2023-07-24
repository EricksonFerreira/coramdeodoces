import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuarioRequest } from './usuarioRequest.model';
import { Usuario } from './usuario.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl:string = environment.baseApiUrl+'usuarios'
  constructor(
    private http:HttpClient

  ) { }

  getAll(currentPage:number=1,itemsPerPage:number=1000):Observable<UsuarioRequest>{
    return this.http.get<UsuarioRequest>(`${this.baseUrl}?page=${currentPage}&per_page=${itemsPerPage}`)
  }
  findById(produtoId: number):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.baseUrl}/${produtoId}`)
  }
  save(produto: Partial<Usuario>):Observable<Usuario>{
    return this.http.post<Usuario>(`${this.baseUrl}`,produto)
  }
  update(produto: Partial<Usuario>):Observable<Usuario>{
    const url = `${this.baseUrl}/${produto.id}`;
    return this.http.put<Usuario>(url,produto)
  }
  delete(produtoId:number):Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.baseUrl}/${produtoId}`)
  }}
