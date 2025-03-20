import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { ProduccionService } from '../../services/produccion.service';
import { Produccion } from '../../models/produccion.model';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private readonly produccionService = inject(ProduccionService);
  private readonly cdr = inject(ChangeDetectorRef);

  udn: string[] = ["GLOBAL", "INOVA", "GDL", "MTY"]
  produccion: Produccion = new Produccion();
  anios: number[] = [];
  meses: { nombre: string, valor: number }[] = [];
  anioSeleccionado!: number;
  mesSeleccionado!: number;
  isLoading: boolean = true;

  ngOnInit() {
    const fechaActual = new Date();
    this.anioSeleccionado = fechaActual.getFullYear();
    this.mesSeleccionado = fechaActual.getMonth() + 1;

     //GENERATE LAST 10 YEARS
     for (let i = this.anioSeleccionado - 10; i <= this.anioSeleccionado; i++) {
      this.anios.push(i);
    }
    //DEFINE MONTHS
    this.meses = [
      { nombre: 'Enero', valor: 1 },
      { nombre: 'Febrero', valor: 2 },
      { nombre: 'Marzo', valor: 3 },
      { nombre: 'Abril', valor: 4 },
      { nombre: 'Mayo', valor: 5 },
      { nombre: 'Junio', valor: 6 },
      { nombre: 'Julio', valor: 7 },
      { nombre: 'Agosto', valor: 8 },
      { nombre: 'Septiembre', valor: 9 },
      { nombre: 'Octubre', valor: 10 },
      { nombre: 'Noviembre', valor: 11 },
      { nombre: 'Diciembre', valor: 12 }
    ];

    let mes = this.meses.filter(mes=> mes.valor == this.mesSeleccionado)[0];

    this.produccionService.getProdData(this.anioSeleccionado, mes.nombre.toLocaleLowerCase()).subscribe(data=>{
      this.produccion = data;
      this.isLoading = false;    
    })
    
  }

  onDateChange() {
    this.isLoading = true;
    
    let mes = this.meses.filter(mes=> mes.valor == this.mesSeleccionado)[0];
    
    this.produccionService.getProdData(this.anioSeleccionado, mes.nombre.toLowerCase()).subscribe(data=>{
      this.produccion = data;
      this.isLoading = false;
    })
  }

}
