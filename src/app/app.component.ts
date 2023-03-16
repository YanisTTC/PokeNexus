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
    const guessWithoutAccents = this.removeAccents(this.guess.toLowerCase());
    const pokemonNameWithoutAccents = this.removeAccents(this.pokemon.name.toLowerCase());
    if (guessWithoutAccents === pokemonNameWithoutAccents) {
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }
  }
  
  removeAccents(str: string): string {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  nextPokemon() {
    this.guess = '';
    this.isCorrect = false;
    this.getPokemon();
  }
}

