export interface JokeResponse {
  category: string;
  delivery: string;
  error: boolean;
  flags: { [key: string]: boolean };
  id: number;
  joke: string;
  lang: string;
  safe: boolean;
  setup: string;
  type: string;
}
