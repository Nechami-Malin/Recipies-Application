import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

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
  code:number | undefined

  constructor(private route: ActivatedRoute, private _recipeServie: RecipeService,private router:Router) { }
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
    const userData=sessionStorage.getItem('userInfo');
    if (userData) {
      this.code = JSON.parse(userData).userCode;
    }
  }
  
  isCurrentUserRecipeOwner(): boolean {
    
    if(this.code==this.recipe.codeUser)
       return true;
    return false;
    
  }

  deleteRecipe(): void {
    this._recipeServie.deleteRecipe(this.recipe.codeRecipe)
    .subscribe({
      next:()=>{
        Swal.fire(
           'Deleted!!!!',
           'The recipe was deleted successfully',
           'success'
        )
      },
      error:(err)=>{
        Swal.fire(
          'Error!!!!',
          'error',
          'error'
       )
      }
    })
  }
}
