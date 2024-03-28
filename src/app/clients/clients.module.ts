import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { FormClientComponent } from './components/form-client/form-client.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PageAddClientComponent,
    PageEditClientComponent,
    PageListClientsComponent,
    FormClientComponent,
    ClientDetailComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
