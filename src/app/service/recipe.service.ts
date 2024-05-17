import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Elemento } from '../interfaces/elemento';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private url:string ='https://dummyjson.com/recipes'

  constructor(
    private readonly http:HttpClient
  ) { }


  public obtenerRecetas() :Observable<Elemento[]>{
    return this.http.get<Elemento[]>(this.url);
  }
}
