import { Injectable } from '@angular/core';
import { Cards } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private apiService: ApiService) { }

      public obtenerCarta(nombre:string){
          let data = this.apiService.obtenerCarta(nombre);
          console.log(data);
        };

      public getDeck(): Promise<Cards[]> {
        return new Promise<Cards[]>((resolve, reject) => {
          this.apiService.getDeck().subscribe({
            next: data => resolve(data),
            error: error => reject(error)
          })
        });
      }

      public deleteCard(id: number): Promise<boolean> {

        return new Promise<boolean>((resolve, reject) => {
          this.apiService.deleteCard(id).subscribe({
            next: bool => resolve(bool),
            error: error => reject(error)
          })
        });
      }

}

