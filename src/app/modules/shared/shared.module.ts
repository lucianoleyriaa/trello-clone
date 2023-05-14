import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { OverlayModule } from '@angular/cdk/overlay';

import { BtnComponent } from 'src/app/modules/shared/components/btn/btn.component';

@NgModule({
  declarations: [
    BtnComponent,
  ],
  imports: [
    CommonModule,
    OverlayModule,
    CdkAccordionModule,
    FontAwesomeModule,
  ],
  exports: [
    BtnComponent,
    CdkAccordionModule,
    FontAwesomeModule,
  ]
})
export class SharedModule { }
