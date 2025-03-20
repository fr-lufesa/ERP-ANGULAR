import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produccion } from '../models/produccion.model';

@Injectable({
  providedIn: 'root'
})
export class ProduccionService {
  
  private readonly httClient = inject(HttpClient);

  getProdData(year: number, month: string, udn = "default"): Observable<Produccion>
  {
    let url = `http://127.0.0.1:8000/get_produccion_info/${year}/${month}/${udn}`;
    
    return this.httClient.get<Produccion>(url);
  }
}
