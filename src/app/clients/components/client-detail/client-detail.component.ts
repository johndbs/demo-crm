import { Component } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.scss'
})
export class ClientDetailComponent {

  public item$= this.clientsService.getSelectedItem();

  constructor(private clientsService: ClientsService, private location: Location) { }

  goBack(): void {
    this.location.back();
  }

}
