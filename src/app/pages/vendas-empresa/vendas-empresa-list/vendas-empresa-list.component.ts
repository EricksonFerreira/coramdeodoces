import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendasEmpresaService } from '../shared/vendas-empresa.service';

@Component({
  selector: 'app-vendas-empresa-list',
  templateUrl: './vendas-empresa-list.component.html',
  styleUrls: ['./vendas-empresa-list.component.css']
})
export class VendasEmpresaListComponent implements OnInit {
  titulo: string = 'Vendas Empresa';
  vendasEmpresa: any[] = [];
  currentPage = 1;
  lastPage = 1;
  totalItems:number|undefined = 0;
  itemsPerPage:number|undefined = 10;
  totalPagesArray: number[] = [];

  constructor(private vendasEmpresaService: VendasEmpresaService,private router:Router) {}

  ngOnInit(): void {
    this.lista();
  }

  lista() {
    this.vendasEmpresaService.getAll(this.currentPage,this.itemsPerPage).subscribe(vendasEmpresa => {
      this.vendasEmpresa = vendasEmpresa.data;
      this.currentPage = vendasEmpresa.current_page;
      this.lastPage = vendasEmpresa.last_page;
      this.totalItems = vendasEmpresa.total;
      this.itemsPerPage = vendasEmpresa.per_page;
      this.totalPagesArray = Array.from({ length: this.lastPage }, (_, i) => i + 1);

    });
  }
  edit(tipoId: number) {
    this.router.navigate(['/venda/empresa', tipoId, 'edit']);
  }

  remove(id: number) {
    this.vendasEmpresaService.delete(id).subscribe(() => {
      const index = this.vendasEmpresa.findIndex((transacao) => transacao.id === id);
      if (index !== -1) {
        this.vendasEmpresa.splice(index, 1);
      }
    });
  }
  onPageChange(page: number) {
    this.currentPage = page;
    this.lista();
  }

}
