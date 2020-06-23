import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: [],
})
export class GaleriaComponent implements OnInit, AfterViewInit {
  @Input('peliculas') peliculas;
  @Input('titulo') titulo;

  constructor() {}

  ngAfterViewInit(): void {
  }

  ngOnInit() {}
}
