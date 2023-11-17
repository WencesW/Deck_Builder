import { Injectable } from '@angular/core';
import { Cards } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private apiService: ApiService) { }

  public getCards(): Promise<Cards[]> {

    return new Promise<Cards[]>((resolve, reject) => {

    this.apiService.obtenerCarta(nombre : String)({
        next: (data: Cards[] | PromiseLike<Cards[]>) => resolve(data),
        error: (error: any) => reject(error)
      })
    });

  }
}
