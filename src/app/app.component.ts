import { Component, OnInit } from '@angular/core';
import { PokemonService } from './poke-apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pokemon: any;
  guess: string = '';
  isCorrect: boolean = false;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    this.pokemonService.getRandomPokemon().subscribe(pokemon => {
      this.pokemon = pokemon;
    });
  }

  checkGuess() {
    if (this.guess.toLowerCase() === this.pokemon.name.toLowerCase()) {
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }
  }

  nextPokemon() {
    this.guess = '';
    this.isCorrect = false;
    this.getPokemon();
  }
}

