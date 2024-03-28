import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../../../core/models/client';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrl: './page-list-clients.component.scss'
})
export class PageListClientsComponent implements OnInit{

  public collection$!: Observable<Client[]>;

  public headers: string[] = [
    "Actions",
    "Name",
    "Email",
    "Phone"
  ];

  constructor(private clientsService: ClientsService, private router: Router) {}


  ngOnInit(): void {
    this.collection$ = this.clientsService.getCollection();
  
  }


  public goEdit(item: Client): void {
    this.router.navigate(['clients', 'edit', item.id]);
  }

  public delete(item: Client): void {
    this.clientsService.delete(item.id).subscribe(() => {});
  }

  public selectItem(item: Client): void {
    this.clientsService.updateSelectedItem(item);
  }



}
