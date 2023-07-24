import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { VendedorFormComponent } from './vendedor-form/vendedor-form.component';
import { VendedorListComponent } from './vendedor-list/vendedor-list.component';
import { VendedoresRoutingModule } from './vendedores-routing.module';

@NgModule({
  declarations: [VendedorFormComponent, VendedorListComponent],
  imports: [SharedModule, VendedoresRoutingModule],
})
export class VendedorModule {}
