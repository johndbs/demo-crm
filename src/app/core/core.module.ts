import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { UiModule } from '../ui/ui.module';
import { TemplatesModule } from '../templates/templates.module';
import { LoginModule } from '../login/login.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    IconsModule, 
    UiModule, 
    LoginModule
  ]
})
export class CoreModule { }
