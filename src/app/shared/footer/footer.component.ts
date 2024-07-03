import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{

  annio: number = new Date().getFullYear();
  
  constructor( public infoPaginaService: InfoPaginaService){}

  ngOnInit(): void {
      
  }
}
