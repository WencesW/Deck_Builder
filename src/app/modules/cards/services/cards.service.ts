import { Injectable } from '@angular/core';
import { Cards } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private apiService: ApiService) { }
}