import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reporte } from '../models/reporteFinanciero.model';
import { environment } from '../../environments/environment.staging';

@Injectable({
  providedIn: 'root'
})
export class ReporteFinancieroService {

  private readonly httClient = inject(HttpClient);

  getData(year: number, month: string, udn = "default"): Observable<Reporte>
  {
    let url = `https://erp-api-ps4c.onrender.com/get_reporte_info/${year}/${month}/${udn}`;    
    
    return this.httClient.get<Reporte>(url);
  }
}
