import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cards, User } from 'src/app/core/Models';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  private baseURL = "http://localhost:3000"

  private  apiCall = "https://api.scryfall.com"

  constructor(private http: HttpClient) { }

  //! Users

  public getToAuth(email: string, password: string): Observable<User[]> {
    let response = this.http.get<User[]>(`${this.baseURL}/users?email=${email}&password=${password}`);
    console.log(response);
    return response;
  }

  public getUserNameById(id:number): Observable<string | null> {

    return this.http.get<User>(`${this.baseURL}/users/${id}`).pipe(
      map(user => user.userName),
      catchError(error => of(null))
    );
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users`);
  }

  public addUser(user: User): Observable<User> {
    let length = this.getUsers.length
    user.id = length++;
    return this.http.post<User>(`${this.baseURL}/users`, user);
  }

  //! Cards

  public async obtenerCarta(nombre: string) {
    const url = `${this.apiCall}/cards/named?exact=${nombre}`;
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

    public getDeck(): Observable<Cards[]> {
      return this.http.get<Cards[]>(`${this.baseURL}/cards`);
    }
  
    public async autocompletarCarta(nombre:string){
      const url = `${this.apiCall}/cards/autocomplete?q=${nombre}`;
      try {
        const responseAPI = await fetch(url, { method: 'GET' });
        if (!responseAPI.ok) {
          throw new Error(`No se pudo obtener las cartas`);
        }
        return await responseAPI.json();
      } catch (error) {
        throw error;
      }
    }

    public async obtenerCartas(nombre: string) {
      let bulkCardNames = await this.autocompletarCarta(nombre);
      let arrayBulk: Promise<any>[] = [];
      var dataArray = bulkCardNames.data;
      dataArray.forEach((element: any) => {
        arrayBulk.push( this.obtenerCarta(element));
      });
      return arrayBulk;
      }

      public deleteCard(id: number): Observable<boolean> {

        return this.http.delete(`${this.baseURL}/cards/${id}`)
          .pipe(
            map(resp => true),
            catchError(error => of(false))
          );
      }
}


  




  

