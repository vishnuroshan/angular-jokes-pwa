import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  constructor(private http: HttpClient) {}

  getJoke() {
    return this.http.get(
      'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit&format=txt',
      { responseType: 'text' }
    );
  }
}
