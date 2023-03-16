import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface PokemonData {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokebuildapi.fr/api/v1';

  constructor(private http: HttpClient) {}

  getRandomPokemon(): Observable<PokemonData> {
    const id = Math.floor(Math.random() * 898) + 1;
    const url = `${this.apiUrl}/pokemon/${id}`;
    return this.http.get<PokemonData>(url);
  }
}
