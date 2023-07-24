import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../cliente/shared/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {


  titulo: string = 'Clientes';
  acoes: any[] = [];
  currentPage = 1;
  lastPage = 1;
  totalItems:number|undefined = 0;
  itemsPerPage:number|undefined = 10;
  totalPagesArray: number[] = [];

  constructor(private clienteService: ClienteService,private router:Router) {}

  ngOnInit(): void {
    this.lista();
  }

  lista() {
    this.clienteService.getAll(this.currentPage,this.itemsPerPage).subscribe(acao => {
      this.acoes = acao.data;
      this.currentPage = acao.current_page;
      this.lastPage = acao.last_page;
      this.totalItems = acao.total;
      this.itemsPerPage = acao.per_page;
      this.totalPagesArray = Array.from({ length: this.lastPage }, (_, i) => i + 1);

    });
  }
  edit(tipoId: number) {
    this.router.navigate(['/cliente', tipoId, 'edit']);
  }

  remove(id: number) {
    this.clienteService.delete(id).subscribe(() => {
      const index = this.acoes.findIndex((acao) => acao.id === id);
      if (index !== -1) {
        this.acoes.splice(index, 1);
      }
    });
  }
  onPageChange(page: number) {
    this.currentPage = page;
    this.lista();
  }

}
