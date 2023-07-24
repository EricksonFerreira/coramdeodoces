import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsuariosRoutingModule } from './usuario-routing.module';



@NgModule({
  declarations: [
    UsuarioFormComponent,
    UsuarioListComponent
  ],
  imports: [
    SharedModule, UsuariosRoutingModule
  ]
})
export class UsuarioModule { }
