import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  titulo: string = 'Usuários';
  usuarios: any[] = [];
  currentPage = 1;
  lastPage = 1;
  totalItems:number|undefined = 0;
  itemsPerPage:number|undefined = 10;
  totalPagesArray: number[] = [];

  constructor(private UsuariosService: UsuarioService,private router:Router) {}
  ngOnInit(): void {
    this.lista();
  }

  lista() {
    this.UsuariosService.getAll(this.currentPage,this.itemsPerPage).subscribe(usuarios => {
      this.usuarios = usuarios.data;
      this.currentPage = usuarios.current_page;
      this.lastPage = usuarios.last_page;
      this.totalItems = usuarios.total;
      this.itemsPerPage = usuarios.per_page;
      this.totalPagesArray = Array.from({ length: this.lastPage }, (_, i) => i + 1);

    });
  }
  edit(tipoId: number) {
    this.router.navigate(['/usuarios', tipoId, 'edit']);
  }

  remove(id: number) {
    this.UsuariosService.delete(id).subscribe(() => {
      const index = this.usuarios.findIndex((usuario) => usuario.id === id);
      if (index !== -1) {
        this.usuarios.splice(index, 1);
      }
    });
  }
  onPageChange(page: number) {
    this.currentPage = page;
    this.lista();
  }
}
