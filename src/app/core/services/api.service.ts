import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/core/Models';
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

  /* Ejemplo de como trasnformar la respuesta de la api */
  public getUserNameById(id:number): Observable<string | null> {

    return this.http.get<User>(`${this.baseURL}/users/${id}`).pipe(
      map(user => user.userName),
      catchError(error => of(null))
    );
  }


  public async obtenerCarta(nombre: any) {
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

  


  




  

