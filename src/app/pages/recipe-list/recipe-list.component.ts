import { Component, OnInit } from '@angular/core';
import { Elemento } from 'src/app/interfaces/elemento';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipe:Elemento[]=[];

  constructor(
    private readonly recipeService:RecipeService
  ) { 
    console.log("Ingresa a Constructor");
    
  }

  ngOnInit(): void {
    this.obtenerListadoRecetas();
    console.log("Inicia NgOninit");
    
  }



  obtenerListadoRecetas(){
    this.recipeService.obtenerRecetas().subscribe((response:any)=>{
      this.recipe=response.recipes;
      console.log(" this.recipe: " , this.recipe);
      
    })
  }

  ngOnDestroy(){
    console.log("ngOnDestroy close");
    

  }

}
