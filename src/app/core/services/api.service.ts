import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cards, User } from 'src/app/core/Models';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = "http://localhost:4200"

  private apiCall = "https://api.scryfall.com"

  constructor(private http: HttpClient) { }

  //! Users

  public getToAuth(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users?email=${email}&password=${password}`);
  }

  public getUserNameById(id:number): Observable<string | null> {

    return this.http.get<User>(`${this.baseURL}/users/${id}`).pipe(
      map(user => user.userName),
      catchError(error => of(null))
    );
  }


  public async obtenerCarta(nombre: string) {
    const url = `${this.apiCall}/cards/named/${nombre}`;
      try {
        const responseAPI = await fetch(url, { method: 'GET' });
        if (!responseAPI.ok) {
          throw new Error(`No se pudo obtener la carta ${nombre}`);
        }
        return await responseAPI.json();
      } catch (error) {
        throw error;
      }
    }
  
}


  




  

