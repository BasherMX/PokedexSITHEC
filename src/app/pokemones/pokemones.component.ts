import { Component, OnInit } from '@angular/core';
import { ListaPokemonesService } from '../services/lista-pokemones.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css'],
})
export class PokemonesComponent implements OnInit {
  CantidadPokemons: number = 99; //nota: debe ser multiplo de 3
  Url: string = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${this.CantidadPokemons}`;
  Urlanterior: string = '';
  Urlsiguiente: string = '';
  DatosPokemones: any = [];
  modalIndex: number= 0;

  constructor(private listaPokemonesService: ListaPokemonesService) {}

  ngOnInit(): void {
    this.obtener(this.Url);
  }


  obtener(urlAccesso: string) {
    
    //borrar todos los pokemones existentes
    this.DatosPokemones = [];

      //obtener n pokemones a la vez
    this.listaPokemonesService
    .getListaPokemones(urlAccesso)
    .subscribe((dataOne) => {
      
      this.Urlanterior = dataOne.previous;
      this.Urlsiguiente = dataOne.next;

      for (let i = 0; i < this.CantidadPokemons; i++) {

        //obtener los datos de cada pokemon
        this.listaPokemonesService
          .getUnPokemon(dataOne.results[i].url)
          .subscribe((data) => {
            let pokemon: any = {
              nombre: data.species.name,
              imagen: data.sprites.front_default,
              habilidades: data.abilities,
              juegos: data.game_indices,
              peso: data.weight,
              altura: data.height
            };

            this.DatosPokemones.push(pokemon);
          });
      }
    });
    
  }

  asignaModal(i: number){
    this.modalIndex = i;
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  
}
