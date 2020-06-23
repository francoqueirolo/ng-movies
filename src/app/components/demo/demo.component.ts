import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
})
export class DemoComponent implements OnInit {
  peliculas: any;
  isPeliculas = false;

  constructor(public ps: PeliculasService) {
    this.ps.getPopulares().subscribe((data: any) => {
      console.log(data.results);
      this.peliculas = data.results;
      this.isPeliculas = true;
    });
  }

  ngOnInit() {}
}
