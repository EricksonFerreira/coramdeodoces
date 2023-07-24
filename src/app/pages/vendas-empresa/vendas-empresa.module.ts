import { NgModule } from '@angular/core';
import { ValorMaskDirective } from 'src/app/shared/diretivas/valor-mask.directive';
import { VendasEmpresaFormComponent } from './vendas-empresa-form/vendas-empresa-form.component';
import { VendasEmpresaListComponent } from './vendas-empresa-list/vendas-empresa-list.component';
import { VendasEmpresaRoutingModule } from './vendas-empresa-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    VendasEmpresaFormComponent,
    VendasEmpresaListComponent,
    ValorMaskDirective,
  ],
  imports: [SharedModule, VendasEmpresaRoutingModule],
})
export class VendasEmpresaModule {}
