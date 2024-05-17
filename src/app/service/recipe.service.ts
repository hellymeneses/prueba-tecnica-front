import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipes } from '../interfaces/recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private url:string ='https://dummyjson.com/recipes'

  constructor(
    private readonly http:HttpClient
  ) { }


  public obtenerRecetas() :Observable<Recipes[]>{
    return this.http.get<Recipes[]>(this.url);
  }
}
