import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  //key fce2ee4f
  private API_URL: string = 'https://www.omdbapi.com/?apikey=fce2ee4f';

  constructor(private http: HttpClient) {}

  getMoviesSvc(searchTerm: string): Observable<any> {
    return this.http.get(`${this.API_URL}&s=${searchTerm}`);
  }
}
