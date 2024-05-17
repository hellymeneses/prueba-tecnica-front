import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './pages/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeFormComponent } from './pages/recipe-form/recipe-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    MenuComponent,
    RecipeFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
