import { Component, OnInit } from '@angular/core';
import { TipoAcaoService } from '../shared/tipo-acao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-acao-list',
  templateUrl: './tipo-acao-list.component.html',
  styleUrls: ['./tipo-acao-list.component.css']
})
export class TipoAcaoListComponent implements OnInit {

  titulo: string = 'Tipo Ação';
  acoes: any[] = [];
  currentPage = 1;
  lastPage = 1;
  totalItems:number|undefined = 0;
  itemsPerPage:number|undefined = 10;
  totalPagesArray: number[] = [];

  constructor(private TipoAcaoService: TipoAcaoService,private router:Router) {}
  ngOnInit(): void {
    this.lista();
  }

  lista() {
    this.TipoAcaoService.getAll(this.currentPage,this.itemsPerPage).subscribe(acao => {
      this.acoes = acao.data;
      this.currentPage = acao.current_page;
      this.lastPage = acao.last_page;
      this.totalItems = acao.total;
      this.itemsPerPage = acao.per_page;
      this.totalPagesArray = Array.from({ length: this.lastPage }, (_, i) => i + 1);

    });
  }
  edit(tipoId: number) {
    this.router.navigate(['/tipoacao', tipoId, 'edit']);
  }

  remove(id: number) {
    this.TipoAcaoService.delete(id).subscribe(() => {
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
