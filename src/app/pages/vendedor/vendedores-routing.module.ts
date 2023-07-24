import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VendedorListComponent } from './vendedor-list/vendedor-list.component';
import { VendedorFormComponent } from './vendedor-form/vendedor-form.component';

const routes: Routes = [
  { path: '', component: VendedorListComponent },
  { path: 'create', component: VendedorFormComponent },
  { path: ':id/edit', component: VendedorFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendedoresRoutingModule { }
