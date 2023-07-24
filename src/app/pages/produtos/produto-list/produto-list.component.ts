import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../shared/produto.service';
import { ProdutoRequest } from '../shared/produtoRequest.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {
  titulo: string = 'Produtos';
  produtos: any[] = [];
  currentPage = 1;
  lastPage = 1;
  totalItems:number|undefined = 0;
  itemsPerPage:number|undefined = 10;
  totalPagesArray: number[] = [];

  constructor(private produtoService: ProdutoService,private router:Router) {}
  ngOnInit(): void {
    this.lista();
  }

  lista() {
    this.produtoService.getAll(this.currentPage,this.itemsPerPage).subscribe(produtos => {
      this.produtos = produtos.data;
      this.currentPage = produtos.current_page;
      this.lastPage = produtos.last_page;
      this.totalItems = produtos.total;
      this.itemsPerPage = produtos.per_page;
      this.totalPagesArray = Array.from({ length: this.lastPage }, (_, i) => i + 1);

    });
  }
  edit(produtoId: number) {
    this.router.navigate(['/produtos', produtoId, 'edit']);
  }

  remove(id: number) {
    this.produtoService.delete(id).subscribe(() => {
      const index = this.produtos.findIndex((produto) => produto.id === id);
      if (index !== -1) {
        this.produtos.splice(index, 1);
      }
    });
  }
  onPageChange(page: number) {
    this.currentPage = page;
    this.lista();
  }
}
