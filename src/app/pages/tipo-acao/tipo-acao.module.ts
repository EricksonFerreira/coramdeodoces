import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { TipoAcaoFormComponent } from './tipo-acao-form/tipo-acao-form.component';
import { TipoAcaoListComponent } from './tipo-acao-list/tipo-acao-list.component';
import { TipoAcoesRoutingModule } from './tipo-acoes-routing.module';

@NgModule({
  declarations: [TipoAcaoFormComponent, TipoAcaoListComponent],
  imports: [SharedModule, TipoAcoesRoutingModule],
})
export class TipoAcaoModule {}
