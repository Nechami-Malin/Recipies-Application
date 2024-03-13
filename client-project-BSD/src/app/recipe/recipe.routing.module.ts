import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllRecipesComponent } from '../all-recipes/all-recipes.component';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';


const reciprRoutes: Routes = [
  { path: '', redirectTo: 'allRecipies', pathMatch: 'full' },
  { path: 'all-recipies', component: AllRecipesComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: 'recipe-details/:id', component:RecipeDetailsComponent }

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     RouterModule.forChild(reciprRoutes)
  ],  
  exports: [RouterModule]

})
export class RecipeRoutingModule { }
