import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateContainerComponent } from './components/template-container/template-container.component';
import { TemplateFullwidthComponent } from './components/template-fullwidth/template-fullwidth.component';



@NgModule({
  declarations: [
    TemplateFullwidthComponent,
    TemplateContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateFullwidthComponent,
    TemplateContainerComponent
  ]
})
export class TemplatesModule { }
