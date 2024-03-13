import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { OneRecipeComponent } from '../one-recipe/one-recipe.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-recipes',
  standalone: true,
  imports: [OneRecipeComponent, CommonModule],
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.scss'
})
export class AllRecipesComponent {
  constructor(private _recipeService: RecipeService) {}

public  listRecipies:Recipe[]=[];
  ngOnInit():void{
    this._recipeService.getRecipes().subscribe({
      next: (res) => {
        console.log("allrecipies",res);
        this.listRecipies=res;
        console.log("as", this.listRecipies);
        
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
