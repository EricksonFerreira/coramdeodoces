import { Component, OnInit } from '@angular/core';
import { VendasEncomendaService } from '../shared/vendas-encomenda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendas-encomenda-list',
  templateUrl: './vendas-encomenda-list.component.html',
  styleUrls: ['./vendas-encomenda-list.component.css']
})
export class VendasEncomendaListComponent implements OnInit {
  titulo: string = 'Vendas Encomendas';
  vendasEncomendas: any[] = [];
  currentPage = 1;
  lastPage = 1;
  totalItems:number|undefined = 0;
  itemsPerPage:number|undefined = 10;
  totalPagesArray: number[] = [];

  constructor(private vendasEncomendasService: VendasEncomendaService,private router:Router) {}
  ngOnInit(): void {
    this.lista();
  }

  lista() {
    this.vendasEncomendasService.getAll(this.currentPage,this.itemsPerPage).subscribe(vendasEncomendas => {
      this.vendasEncomendas = vendasEncomendas.data;
      this.currentPage = vendasEncomendas.current_page;
      this.lastPage = vendasEncomendas.last_page;
      this.totalItems = vendasEncomendas.total;
      this.itemsPerPage = vendasEncomendas.per_page;
      this.totalPagesArray = Array.from({ length: this.lastPage }, (_, i) => i + 1);

    });
  }
  edit(tipoId: number) {
    this.router.navigate(['/venda/encomenda', tipoId, 'edit']);
  }

  remove(id: number) {
    this.vendasEncomendasService.delete(id).subscribe(() => {
      const index = this.vendasEncomendas.findIndex((transacao) => transacao.id === id);
      if (index !== -1) {
        this.vendasEncomendas.splice(index, 1);
      }
    });
  }
  onPageChange(page: number) {
    this.currentPage = page;
    this.lista();
  }

}
