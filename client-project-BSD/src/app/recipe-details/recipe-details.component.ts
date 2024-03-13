import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss'
})
export class RecipeDetailsComponent {
  public recipe!: Recipe
  public itemId!: number
  stars: boolean[] = Array(5).fill(false);
  isOwner: boolean=false;
  constructor(private route: ActivatedRoute, private _recipeServie: RecipeService) { }
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.itemId = param['id']
      console.log("let's see the id...", this.itemId);
      this._recipeServie.getRecipeById(this.itemId).subscribe({
        next: (res) => {
          console.log(res);
          this.recipe = res
        },
        error: (err) => {
          console.log(err);
        }
      })
    })
  }
  
  isCurrentUserRecipeOwner(): boolean {
    // Implement your logic to check if the current user is the owner of the recipe
    // Set this.isOwner accordingly
    return this.isOwner;
  }

  deleteRecipe(): void {
    // Implement your logic to delete the recipe
  }
}
