import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaPokemonesService {
  
  

  constructor(private http: HttpClient) { }

  getListaPokemones(url: string){
    return this.http.get<any>(url);
  }

  getUnPokemon(url: string){
    return this.http.get<any>(url);
  }

}
