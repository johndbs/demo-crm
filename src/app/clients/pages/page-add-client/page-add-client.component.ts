import { Component } from '@angular/core';
import { Client } from '../../../core/models/client';
import { ClientsService } from '../../services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrl: './page-add-client.component.scss'
})
export class PageAddClientComponent {

  public item: Client = new Client();

  constructor(private clientsService: ClientsService, private router: Router) {}

  public action(item: Client): void {
    this.clientsService.add(item).subscribe((res) => {
      this.router.navigate(['clients']);
    });
  }

}
