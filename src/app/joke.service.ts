import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JokeResponse } from 'src/app/interfaces/app.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  constructor(private http: HttpClient) {}

  getJoke() {
    return this.http.get(
      'https://v2.jokeapi.dev/joke/Any?format=txt&safe-mode',
      { responseType: 'text' }
    );
  }

  getJokeJson(): Observable<JokeResponse> {
    return this.http.get<JokeResponse>(
      'https://v2.jokeapi.dev/joke/Any?safe-mode'
    );
  }
}
