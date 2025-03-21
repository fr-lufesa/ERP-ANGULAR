import { Component, inject } from '@angular/core';
import { Reporte } from '../../models/reporteFinanciero.model';
import { ReporteFinancieroService } from '../../services/reportefinanciero.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private readonly reporteFinancieroService = inject(ReporteFinancieroService);

  udns!: string[];
  reporte: Reporte = new Reporte();
  anios: number[] = [];
  meses: { nombre: string, valor: number }[] = [];

  anioSeleccionado!: number;
  mesSeleccionado!: number;
  udnSeleccionado: string = "GLOBAL"

  isLoading: boolean = true;

  ngOnInit() {
    const fechaActual = new Date();

    this.anioSeleccionado = fechaActual.getFullYear();
    this.mesSeleccionado = fechaActual.getMonth() + 1;

    this.initializeSelectInfo();

    let mes = this.meses.filter(mes => mes.valor == this.mesSeleccionado)[0];

    this.reporteFinancieroService.getData(this.anioSeleccionado, mes.nombre.toLocaleLowerCase(), this.udnSeleccionado).subscribe(data => {    
      this.reporte = data;      
      this.isLoading = false;
    })

   

  }

  onValueChange() {
    this.isLoading = true;

    let mes = this.meses.filter(mes => mes.valor == this.mesSeleccionado)[0];

    this.reporteFinancieroService.getData(this.anioSeleccionado, mes.nombre.toLowerCase(), this.udnSeleccionado).subscribe(data => {
      this.reporte = data;    
      console.log(data)
      this.isLoading = false;
    })
  }

  initializeSelectInfo() {
    this.udns = ["GLOBAL", "INOVA", "GDL", "MTY"]
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
  }

}


