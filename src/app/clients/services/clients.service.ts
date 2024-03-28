import { Injectable } from '@angular/core';
import { environnement } from '../../../environnements/environnement';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Client } from '../../core/models/client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private apiUrl = environnement.apiUrl;

  private collection$: BehaviorSubject<Client[]> = new BehaviorSubject<Client[]>([]);

  private selectedItem$: BehaviorSubject<Client> = new BehaviorSubject<Client>(new Client());

  constructor(private http: HttpClient) { 
    this.refreshCollection();
  }

  private refreshCollection(id?: number): void {
    this.http.get<Client[]>(`${this.apiUrl}/clients`)
      .pipe(
        map((clients) => {
          return clients.map((data) => {
            return new Client(data);
          });
        })
      ).subscribe((clients) => {
        if(id){
          this.getItemById(id).subscribe((client) => {
            this.selectedItem$.next(client);
          });
        }else{
          this.selectedItem$.next(clients[0]);
        }

        this.collection$.next(clients);
      });
  }

  public getCollection(): Observable<Client[]> {
    return this.collection$;
  }

  public getItemById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/clients/${id}`);
  }

  public add(item: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}/clients`, {...item, id:undefined}).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }
  
  public update(item: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/clients/${item.id}`, item).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  public delete(id: number): Observable<Client> {
    return this.http.delete<Client>(`${this.apiUrl}/clients/${id}`).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  public updateSelectedItem(item: Client): void {
    this.selectedItem$.next(item);
  }

  public getSelectedItem(): Observable<Client> {
    return this.selectedItem$;
  }


}
