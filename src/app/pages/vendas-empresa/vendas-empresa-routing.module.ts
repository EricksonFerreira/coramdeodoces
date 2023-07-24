import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VendasEmpresaListComponent } from './vendas-empresa-list/vendas-empresa-list.component';
import { VendasEmpresaFormComponent } from './vendas-empresa-form/vendas-empresa-form.component';

const routes: Routes = [
  { path: '', component: VendasEmpresaListComponent },
  { path: 'create', component: VendasEmpresaFormComponent },
  { path: ':id/edit', component: VendasEmpresaFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendasEmpresaRoutingModule { }
