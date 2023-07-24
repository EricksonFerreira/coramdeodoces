import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VendasEncomendaListComponent } from './vendas-encomenda-list/vendas-encomenda-list.component';
import { VendasEncomendaFormComponent } from './vendas-encomenda-form/vendas-encomenda-form.component';

const routes: Routes = [
  { path: '', component: VendasEncomendaListComponent },
  { path: 'create', component: VendasEncomendaFormComponent },
  { path: ':id/edit', component: VendasEncomendaFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendasEncomendasRoutingModule { }
