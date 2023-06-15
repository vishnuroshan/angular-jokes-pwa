import { Component, OnDestroy, OnInit } from '@angular/core';
import { JokeService } from 'src/app/joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private jokes: JokeService) {}
  joke = '';
  loading = true;
  ngOnDestroy(): void {}

  generateJokes() {
    this.jokes.getJoke().subscribe((jokeContent) => {
      this.loading = false;
      this.joke = jokeContent;
    });
  }
  ngOnInit() {
    this.generateJokes();
  }
}
