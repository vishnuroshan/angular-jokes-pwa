import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokeServiceService {

  constructor(private http: HttpClient) { }

  getJoke() {
    return this.http.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&format=txt');
  }
}
