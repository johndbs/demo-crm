import { Component, OnInit } from '@angular/core';
import { Client } from '../../../core/models/client';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrl: './page-edit-client.component.scss'
})
export class PageEditClientComponent  implements OnInit{

  public item$!: Observable<Client>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientsService: ClientsService
  ) { }

  ngOnInit(): void {
      const itemId: number = this.route.snapshot.params['id'];
      this.item$ = this.clientsService.getItemById(itemId);
  }

  public action(item: Client): void { 
    this.clientsService.update(item).subscribe((data) => {
      this.router.navigate(['clients']);
    });
  } 

}
