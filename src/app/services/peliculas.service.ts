import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PeliculasService {
  peliculas: any[] = [];
  url: string;
  headers: HttpHeaders;
  apikey: string;

  constructor(private http: HttpClient) {
    this.url = 'https://api.themoviedb.org/3';
    this.apikey = 'a5cf6688f854647fb9e65c9c87c656d5';
    this.headers = new HttpHeaders({
      'content-Type': 'application/json',
    });
  }

  getPopulares() {
    return this.http.get(
      `${this.url}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}`,
      { headers: this.headers }
    );
  }

  getPopularesNinos() {
    return this.http.get(
      `${this.url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}`,
      { headers: this.headers }
    );
  }

  buscarPelicula(text: string) {
    return this.http.get(
      `${this.url}/search/movie?query=${text}&sort_by=popularity.desc&api_key=${this.apikey}`,
      { headers: this.headers }
    );
  }

  getPelicula(id: string) {
    return this.http.get(`${this.url}/movie/${id}?api_key=${this.apikey}`, {
      headers: this.headers,
    });
  }

  getCartelera() {
    const desde = new Date();
    const hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    const desdeStr = `${desde.getFullYear()}-${
      desde.getMonth() + 1
    }-${desde.getDate()}`;
    const hastaStr = `${hasta.getFullYear()}-${
      hasta.getMonth() + 1
    }-${hasta.getDate()}`;

    return this.http.get(
      `${this.url}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}`,
      { headers: this.headers }
    );
  }
}
