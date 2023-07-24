import { Injectable } from '@angular/core';
import { VendaEmpresaRequest } from './vendaEmpresaRequest.model';
import { Observable } from 'rxjs';
import { VendaEmpresa } from './vendaEmpresa.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VendasEmpresaService {
  private baseUrl: string = environment.baseApiUrl + 'venda/empresa';
  private baseUrlOrcamento: string = environment.baseApiUrl + 'orcamento';
  constructor(private http: HttpClient) {}
  getAll(
    currentPage: number = 1,
    itemsPerPage: number = 1000
  ): Observable<VendaEmpresaRequest> {
    return this.http.get<VendaEmpresaRequest>(
      `${this.baseUrl}?page=${currentPage}&per_page=${itemsPerPage}`
    );
  }
  findById(vendaId: number): Observable<VendaEmpresa> {
    return this.http.get<VendaEmpresa>(`${this.baseUrlOrcamento}/${vendaId}`);
  }
  save(venda: Partial<VendaEmpresa>): Observable<VendaEmpresa> {
    return this.http.post<VendaEmpresa>(`${this.baseUrlOrcamento}`, venda);
  }
  update(venda: Partial<VendaEmpresa>): Observable<VendaEmpresa> {
    const url = `${this.baseUrlOrcamento}/${venda.id}`;
    return this.http.put<VendaEmpresa>(url, venda);
  }
  delete(vendaId: number): Observable<VendaEmpresa> {
    return this.http.delete<VendaEmpresa>(`${this.baseUrlOrcamento}/${vendaId}`);
  }
}
