import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IInfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: IInfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient) { 
    console.log("Info servicio de infoPagina listo")
    
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    //Leer el archivo JSON
    this.http.get('assets/data/data-paginas.json')
    .subscribe((data:IInfoPagina) => {
      this.cargada = true;
      this.info = data;
      // console.log(this.info);
    });
  }
  
  cargarEquipo(){
    //Leer el archivo JSON
    this.http.get('https://angular-html-e124f-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((data:any) => {
      this.equipo = data;
      console.log(this.equipo);
    });
  }
}
