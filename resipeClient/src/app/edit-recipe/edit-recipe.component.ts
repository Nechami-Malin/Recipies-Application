import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Category } from '../category.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-edit-recipe',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.scss'
})

export class EditRecipeComponent implements OnInit {
  public recipe!: Recipe;
  public itemId!: number;
  public recipeForm!: FormGroup;
  public categories: Category[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _recipeServie: RecipeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.itemId = param['id'];
      console.log("let's see the id...", this.itemId);
      this._recipeServie.getRecipeById(this.itemId).subscribe({
        next: (res) => {
          console.log(res);
          this.recipe = res;
          // Initialize the form after retrieving the recipe
          this.initRecipeForm();
        },
        error: (err) => {
          console.log(err);
        }
      });
    });

    this.loadCategories();

  } 

  initRecipeForm(): void {
    this.recipeForm = this.formBuilder.group({
      nameRecipe: [this.recipe.nameRecipe, Validators.required],
      codeCategory: [this.recipe.codeCategory, Validators.required],
      duration: [this.recipe.duration, Validators.required],
      degree: [this.recipe.degree, [Validators.required, Validators.min(1), Validators.max(5)]],
      date: [this.recipe.date, Validators.required],
      image: [this.recipe.image, Validators.required],
      products: [this.recipe.products.join('\n'), Validators.required],
      instructions: [this.recipe.instructions.join('\n'), Validators.required]
    });
  }

  saveChanges(): void {
    if (this.recipeForm.valid) {
     

      this._recipeServie.editRecipe(this.recipe).subscribe({
        next: (res) => {
          // this.recipe = res;
          console.log(res);
          this.router.navigate(['recipies/recipe-details', this.itemId]);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['recipies/recipe-details', this.itemId]);
  }
  loadCategories(): void {
    this._recipeServie.getCregory().subscribe(categories => {
      this.categories = categories;
    });
  }
}
