import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BredCrumbComponent } from './components/bred-crumb/bred-crumb.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ValorBrasileiroPipe } from './pipes/valor-brasileiro-pipe.pipe';

@NgModule({
  declarations: [BredCrumbComponent, PageHeaderComponent, ValorBrasileiroPipe],
  exports: [
    // shared modules
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    // shared components
    BredCrumbComponent,
    PageHeaderComponent,
    ValorBrasileiroPipe
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class SharedModule {}
