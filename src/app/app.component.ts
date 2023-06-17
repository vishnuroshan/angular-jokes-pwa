import { Component, OnInit } from '@angular/core';
import { JokeResponse } from 'src/app/interfaces/app.interface';
import { JokeService } from 'src/app/joke.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  delivery: string = '';
  constructor(private jokes: JokeService) {}
  setup: string = '';
  loading = true;
  category: string = '';
  loadingMessage = 'loading...';
  generateJokes() {
    this.loading = true;
    this.jokes.getJokeJson().subscribe((jokeContent: JokeResponse) => {
      if (jokeContent.error) {
        this.loadingMessage = 'Error!! 🔥🔥💻🔥🔥';
      } else {
        this.category = jokeContent.category;
        if (jokeContent.type === 'single') {
          this.setup = jokeContent.joke;
          this.delivery = '';
        } else {
          this.setup = jokeContent.setup;
          this.delivery = jokeContent.delivery;
        }
      }
      this.loading = false;
    });
  }
  ngOnInit() {
    this.generateJokes();
  }
}
