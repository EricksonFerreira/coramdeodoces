import { NgModule } from '@angular/core';
import { DashComponent } from './dash/dash.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { VendaRoutingModule } from './venda-routing.module';



@NgModule({
  declarations: [
    DashComponent
  ],
  imports: [
    SharedModule,VendaRoutingModule
  ]
})
export class VendaModule { }
