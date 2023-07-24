import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { TipoProdutoFormComponent } from './tipo-produto-form/tipo-produto-form.component';
import { TipoProdutoListComponent } from './tipo-produto-list/tipo-produto-list.component';
import { TipoProdutosRoutingModule } from './tipo-produtos-routing.module';

@NgModule({
  declarations: [TipoProdutoFormComponent, TipoProdutoListComponent],
  imports: [SharedModule, TipoProdutosRoutingModule],
})
export class TipoProdutoModule {}
