import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  cartelera: any;
  populares: any;
  popularesNinos: any;

  constructor(public ps: PeliculasService) {
    this.ps.getCartelera().subscribe((data: any) => {
      this.cartelera = data.results;
      console.log('cartelera: ', this.cartelera);
    });

    this.ps.getPopulares().subscribe((data: any) => {
      this.populares = data.results;
      console.log('populares: ', this.populares);
    });

    this.ps.getPopularesNinos().subscribe((data: any) => {
      this.popularesNinos = data.results;
      console.log('popularesNinos: ', this.popularesNinos);

    });
  }

  ngOnInit() {}
}
