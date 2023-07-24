import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { VendasEncomendaFormComponent } from './vendas-encomenda-form/vendas-encomenda-form.component';
import { VendasEncomendaListComponent } from './vendas-encomenda-list/vendas-encomenda-list.component';
import { VendasEncomendasRoutingModule } from './vendas-encomendas-routing.module';


@NgModule({
  declarations: [
    VendasEncomendaFormComponent,
    VendasEncomendaListComponent
  ],
  imports: [
    SharedModule,VendasEncomendasRoutingModule
  ]
})
export class VendasEncomendaModule { }
