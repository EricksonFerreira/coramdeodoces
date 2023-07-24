import { Component, OnInit } from '@angular/core';
import { TipoProdutoService } from '../shared/tipo-produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-produto-list',
  templateUrl: './tipo-produto-list.component.html',
  styleUrls: ['./tipo-produto-list.component.css']
})
export class TipoProdutoListComponent implements OnInit {
  titulo: string = 'Tipos de Produtos';
  tiposProdutos: any[] = [];
  currentPage = 1;
  lastPage = 1;
  totalItems:number|undefined = 0;
  itemsPerPage:number|undefined = 10;
  totalPagesArray: number[] = [];

  constructor(private tipoProdutoService: TipoProdutoService,private router:Router) {}
  ngOnInit(): void {
    this.lista();
  }

  lista() {
    this.tipoProdutoService.getAll(this.currentPage,this.itemsPerPage).subscribe(tipos => {
      this.tiposProdutos = tipos.data;
      this.currentPage = tipos.current_page;
      this.lastPage = tipos.last_page;
      this.totalItems = tipos.total;
      this.itemsPerPage = tipos.per_page;
      this.totalPagesArray = Array.from({ length: this.lastPage }, (_, i) => i + 1);

    });
  }
  edit(tipoId: number) {
    this.router.navigate(['/tipoproduto', tipoId, 'edit']);
  }

  remove(id: number) {
    this.tipoProdutoService.delete(id).subscribe(() => {
      const index = this.tiposProdutos.findIndex((tipoProduto) => tipoProduto.id === id);
      if (index !== -1) {
        this.tiposProdutos.splice(index, 1);
      }
    });
  }
  onPageChange(page: number) {
    this.currentPage = page;
    this.lista();
  }
}
