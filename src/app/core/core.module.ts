import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { UiModule } from '../ui/ui.module';
import { TemplatesModule } from '../templates/templates.module';
import { LoginModule } from '../login/login.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconsModule, 
    UiModule, 
    LoginModule,
    HeaderComponent,
    FooterComponent,
    NavComponent
  ]
})
export class CoreModule { }
