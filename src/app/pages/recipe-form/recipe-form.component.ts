import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {


  formulario!:FormGroup;

  constructor(
    private readonly fb: FormBuilder
  ) { 
    console.log("Inicia el constructor");
    
  }

  ngOnInit(): void {
    this.crearFormulario();
    console.log("Inicia el ngOninit");
    
  }


  crearFormulario(){
    this.formulario=this.fb.group({
      id:['', [Validators.required]],
      name:['', [Validators.required]],
      ingredients:['', [Validators.required]],
      instructions:['', [Validators.required]],
      prepTimeMinutes:['', [Validators.required]],
      cookTimeMinutes:['', [Validators.required]],
      servings:['', [Validators.required]],
      difficulty:['', [Validators.required]],
      cuisine:['', [Validators.required]],
      caloriesPerServing:['', [Validators.required]],
      tags:['', [Validators.required]],
      userId:['', [Validators.required]],
      image:['' ],
      rating: ['', [Validators.required]],
      reviewCount:['', [Validators.required]],
      mealType:['', [Validators.required]]

    })
  }

  isInvalid(field:string){
    return this.formulario.controls[field].errors && this.formulario.controls[field].touched
  }

  onSubmit(){
    if(this.formulario.invalid) return ;
    console.log("Formulario:" , this.formulario.value);

    if(this.formulario.valid){
      this.formulario
    }
    
    this.formulario.reset();
    console.log("Formulario reset:" , this.formulario.value);
  }

  ngOnDestroy(){
    console.log("ngOnDestroy close ");
    
  }

}
