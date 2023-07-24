import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { TipoTransacaoListComponent } from './tipo-transacao-list/tipo-transacao-list.component';
import { TipoTransacaoFormComponent } from './tipo-transacao-form/tipo-transacao-form.component';
import { TipoTransacoesRoutingModule } from './tipo-transacoes-routing.module';

@NgModule({
  declarations: [TipoTransacaoListComponent, TipoTransacaoFormComponent],
  imports: [SharedModule, TipoTransacoesRoutingModule],
})
export class TipoTransacaoModule {}
