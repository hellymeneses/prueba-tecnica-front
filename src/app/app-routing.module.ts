import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { RecipeFormComponent } from './pages/recipe-form/recipe-form.component';

const routes: Routes =
 [
    { path: 'main', component: MenuComponent },
    { path: 'list-recipe', component: RecipeListComponent },
    { path: 'form-recipe', component: RecipeFormComponent },
    { path: '**', redirectTo: 'main' },
    
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule],

  providers: [],
})
export class AppRoutingModule {}
