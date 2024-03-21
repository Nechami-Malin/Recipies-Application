import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { OneRecipeComponent } from '../one-recipe/one-recipe.component';
import { CommonModule } from '@angular/common';

//---------------------------------------

import { NgModule } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { SidebarModule } from 'primeng/sidebar';
// 
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//---------------.

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MatOption } from '@angular/material/core';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select';

import { MatSidenavModule } from '@angular/material/sidenav';

import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'app-all-recipes',
  standalone: true,
  imports: [OneRecipeComponent, CommonModule,FormsModule,
    ReactiveFormsModule, MatSliderModule, MatCheckboxModule, MatIconModule, SidebarModule,
    MatCardModule, MatButtonModule, MatOption, MatFormField, MatFormFieldModule, MatInputModule
    , MatSelectModule, MatSidenavModule, ButtonModule

  ],
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.scss'
})
export class AllRecipesComponent implements OnInit {
  constructor(private _recipeService: RecipeService) { }

  public listRecipies: Recipe[] = [];
  filteredRecipes: Recipe[] = [];
  value: number = 0; // Difficulty level filter value
  value1: number = 0; // Preparation time filter value
  selectedCategories: number[] = []; // Selected categories for filtering
  sidebarVisible2: boolean = false;
  disabled = false;
  max = 5;
  min = 0;
  showTicks = true;
  step = 0;
  thumbLabel = true;
  recipeNameFilter: string = '';
  ngOnInit(): void {
    this._recipeService.getRecipes().subscribe({
      next: (res) => {
        console.log("allrecipies", res);
        this.listRecipies = res;
        this.filteredRecipes = [...this.listRecipies];
        console.log("as", this.listRecipies);

      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  filterByName(): void {
    this.filterRecipes();
  }
  filterRecipes(): void {
    this.filteredRecipes = this.listRecipies.filter(recipe => {
      const timeFilter = this.value1 === 0 || recipe.duration <= this.value1;
      const difficultyFilter = this.value === 0 || recipe.degree === this.value;
      const categoryFilter = this.selectedCategories.length === 0 || this.selectedCategories.includes(recipe.codeCategory);
      const nameFilter = this.recipeNameFilter === '' || recipe.nameRecipe.toLowerCase().includes(this.recipeNameFilter.toLowerCase());
      return timeFilter && difficultyFilter && categoryFilter && nameFilter;
    });
  }

  filterByTime(v: number): void {
    this.value1 = v;
    this.filterRecipes();
  }


  filterByDifficulty(v: number): void {
    this.value = v;
    this.filterRecipes();
  }

  filterByCategory(category: number): void {
    const index = this.selectedCategories.indexOf(category);
    if (index !== -1) {
      this.selectedCategories.splice(index, 1);
    } else {
      this.selectedCategories.push(category);
    }
    this.filterRecipes();
  }
}
