import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-component',
  templateUrl: './movie-component.component.html',
  styleUrls: ['./movie-component.component.css']
})
export class MovieComponentComponent {

  movies = [
    {
      title: 'Inception',
      description: 'A thief who enters the dreams of others to obtain information.',
      actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
      rate: 0
    },
    {
      title: 'The Dark Knight',
      description: 'Batman teams up with Commissioner Gordon and Harvey Dent to fight a dangerous new criminal.',
      actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
      rate: 0
    },
    {
      title: 'Avatar',
      description: 'A paraplegic marine dispatched to the moon Pandora on a unique mission.',
      actors: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
      rate: 0
    },
    // ... Ajoutez d'autres films ici ...
    {
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits.',
      actors: ['John Travolta', 'Samuel L. Jackson', 'Uma Thurman'],
      rate: 0
    },
    {
      title: 'The Matrix',
      description: 'A computer programmer discovers a dystopian world that isn\'t what it seems.',
      actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
      rate: 0
    },
    {
      title: 'Jurassic Park',
      description: 'A theme park showcasing cloned dinosaurs turns into a fight for survival.',
      actors: ['Sam Neill', 'Laura Dern', 'Jeff Goldblum'],
      rate: 0
    },
    // ... Ajoutez d'autres films ici ...
  ];
  
incrementeRatingButton(movie: any){
  movie.rate = movie.rate + 1
  
  
}
decrementeRatingButton(movie: any){
  if (movie.rate > 0) {
    movie.rate -= 1;
  }
}
}
