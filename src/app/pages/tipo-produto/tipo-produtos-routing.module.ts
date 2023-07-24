import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TipoProdutoListComponent } from './tipo-produto-list/tipo-produto-list.component';
import { TipoProdutoFormComponent } from './tipo-produto-form/tipo-produto-form.component';

const routes: Routes = [
  { path: '', component: TipoProdutoListComponent },
  { path: 'create', component: TipoProdutoFormComponent },
  { path: ':id/edit', component: TipoProdutoFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoProdutosRoutingModule { }
