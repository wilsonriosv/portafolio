import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IInfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: IInfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient) { 
    console.log("Info servicio de infoPagina listo")
    
    //Leer el archivo JSON
    this.http.get('assets/data/data-paginas.json')
    .subscribe((data:IInfoPagina) => {
      this.cargada = true;
      this.info = data;
      console.log(this.info);
    });
  }
  
}
