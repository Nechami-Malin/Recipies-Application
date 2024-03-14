import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  recipes: any;
  nameFilter!: string;
  categoryFilter!: boolean;
  durationFilter!: boolean;
  filterRecipes() {
    this.filterRecipes = this.recipes.filter((recipe: { name: string; category: any; duration: any; }) => {
      let passNameFilter = true;
      let passCategoryFilter = true;
      let passDurationFilter = true;
  
      // Filter by name
      if (this.nameFilter && recipe.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) === -1) {
        passNameFilter = false;
      }
  
      // Filter by category
      if (this.categoryFilter && recipe.category !== this.categoryFilter) {
        passCategoryFilter = false;
      }
  
      // Filter by duration
      if (this.durationFilter && recipe.duration !== this.durationFilter) {
        passDurationFilter = false;
      }
  
      return passNameFilter && passCategoryFilter && passDurationFilter;
    });
  }
  
}
