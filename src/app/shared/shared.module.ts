import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    IconsModule,
    TemplatesModule
  ]
})
export class SharedModule { }
