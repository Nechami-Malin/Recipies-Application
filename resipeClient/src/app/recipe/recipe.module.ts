import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRecipesComponent } from '../all-recipes/all-recipes.component';
import { RecipeRoutingModule } from './recipe.routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule , RecipeRoutingModule
  ]
})
export class RecipeModule { }
