import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../shared/vendedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendedor-list',
  templateUrl: './vendedor-list.component.html',
  styleUrls: ['./vendedor-list.component.css']
})
export class VendedorListComponent implements OnInit {
  titulo: string = 'Vendedores';
  vendedores: any[] = [];
  currentPage = 1;
  lastPage = 1;
  totalItems:number|undefined = 0;
  itemsPerPage:number|undefined = 10;
  totalPagesArray: number[] = [];

  constructor(private VendedorService: VendedorService,private router:Router) {}
  ngOnInit(): void {
    this.lista();
  }

  lista() {
    this.VendedorService.getAll(this.currentPage,this.itemsPerPage).subscribe(vendedores => {
      this.vendedores = vendedores.data;
      this.currentPage = vendedores.current_page;
      this.lastPage = vendedores.last_page;
      this.totalItems = vendedores.total;
      this.itemsPerPage = vendedores.per_page;
      this.totalPagesArray = Array.from({ length: this.lastPage }, (_, i) => i + 1);

    });
  }
  edit(tipoId: number) {
    this.router.navigate(['/vendedores', tipoId, 'edit']);
  }

  remove(id: number) {
    this.VendedorService.delete(id).subscribe(() => {
      const index = this.vendedores.findIndex((vendedor) => vendedor.id === id);
      if (index !== -1) {
        this.vendedores.splice(index, 1);
      }
    });
  }
  onPageChange(page: number) {
    this.currentPage = page;
    this.lista();
  }
}
