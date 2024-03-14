import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DurationFormatPipe } from '../pipe-time.pipe';

@Component({
  selector: 'app-one-recipe',
  standalone: true,
  imports: [CommonModule,DurationFormatPipe],
  templateUrl: './one-recipe.component.html',
  styleUrl: './one-recipe.component.scss'
})
export class OneRecipeComponent {
  // @Input() time!: number; // Input property for preparation time
  // @Input() difficulty!: number; // Input property for difficulty level
  @Input() recipe!: Recipe
  stars: number[] = []; 
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.stars = Array(this.recipe.degree).fill(0);
  }
  navigateBtn() {
    this.router.navigate(['recipies/recipe-details', this.recipe.codeRecipe])
  }
}
