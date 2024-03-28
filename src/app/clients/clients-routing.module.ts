import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';

const routes: Routes = [
  {path: '', children: [
    {path: '', component: PageListClientsComponent},
    {path: 'detail', component: ClientDetailComponent}
  ]},
  {path: 'add', component: PageAddClientComponent},
  {path: 'edit/:id', component: PageEditClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
