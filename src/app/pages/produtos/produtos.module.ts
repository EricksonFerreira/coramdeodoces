import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutosRoutingModule } from './produtos-routing.module';

@NgModule({
  declarations: [ProdutoFormComponent, ProdutoListComponent],
  imports: [SharedModule, ProdutosRoutingModule],
})
export class ProdutosModule {}
