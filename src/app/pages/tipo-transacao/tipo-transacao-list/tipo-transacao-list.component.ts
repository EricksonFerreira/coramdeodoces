import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoTransacaoService } from '../shared/tipo-transacao.service';

@Component({
  selector: 'app-tipo-transacao-list',
  templateUrl: './tipo-transacao-list.component.html',
  styleUrls: ['./tipo-transacao-list.component.css']
})
export class TipoTransacaoListComponent implements OnInit {
  titulo: string = 'Tipos de Transações';
  tiposTransacoes: any[] = [];
  currentPage = 1;
  lastPage = 1;
  totalItems:number|undefined = 0;
  itemsPerPage:number|undefined = 10;
  totalPagesArray: number[] = [];

  constructor(private TipoTransacaoService: TipoTransacaoService,private router:Router) {}
  ngOnInit(): void {
    this.lista();
  }

  lista() {
    this.TipoTransacaoService.getAll(this.currentPage,this.itemsPerPage).subscribe(tiposTransacoes => {
      this.tiposTransacoes = tiposTransacoes.data;
      this.currentPage = tiposTransacoes.current_page;
      this.lastPage = tiposTransacoes.last_page;
      this.totalItems = tiposTransacoes.total;
      this.itemsPerPage = tiposTransacoes.per_page;
      this.totalPagesArray = Array.from({ length: this.lastPage }, (_, i) => i + 1);

    });
  }
  edit(tipoId: number) {
    this.router.navigate(['/tipotransacao', tipoId, 'edit']);
  }

  remove(id: number) {
    this.TipoTransacaoService.delete(id).subscribe(() => {
      const index = this.tiposTransacoes.findIndex((transacao) => transacao.id === id);
      if (index !== -1) {
        this.tiposTransacoes.splice(index, 1);
      }
    });
  }
  onPageChange(page: number) {
    this.currentPage = page;
    this.lista();
  }

}
