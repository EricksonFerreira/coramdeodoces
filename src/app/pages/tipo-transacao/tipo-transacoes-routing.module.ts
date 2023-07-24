import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TipoTransacaoListComponent } from './tipo-transacao-list/tipo-transacao-list.component';
import { TipoTransacaoFormComponent } from './tipo-transacao-form/tipo-transacao-form.component';

const routes: Routes = [
  { path: '', component: TipoTransacaoListComponent },
  { path: 'create', component: TipoTransacaoFormComponent },
  { path: ':id/edit', component: TipoTransacaoFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoTransacoesRoutingModule { }
