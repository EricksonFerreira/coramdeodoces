import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ProdutosRoutingModule } from '../produtos/produtos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientesRoutingModule } from './cliente-routing.module';



@NgModule({
  declarations: [
    ClienteFormComponent,
    ClienteListComponent
  ],
  imports: [
    SharedModule, ClientesRoutingModule
  ]
})
export class ClienteModule { }
