import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Ensure CoreModule is imported prior to AppRoutingModule to guarantee availability of its components for routing. For instance, AppRoutingModule relies on components exported by CoreModule for correct routing configuration
    CoreModule, 
    AppRoutingModule
  ],
  providers: [
     { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
     { provide: LOCALE_ID, useValue: 'fr'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
