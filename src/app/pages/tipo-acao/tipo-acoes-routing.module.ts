import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TipoAcaoListComponent } from './tipo-acao-list/tipo-acao-list.component';
import { TipoAcaoFormComponent } from './tipo-acao-form/tipo-acao-form.component';

const routes: Routes = [
  { path: '', component: TipoAcaoListComponent },
  { path: 'create', component: TipoAcaoFormComponent },
  { path: ':id/edit', component: TipoAcaoFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoAcoesRoutingModule { }
