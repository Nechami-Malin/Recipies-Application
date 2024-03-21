import { Component } from '@angular/core';
import { Category } from '../category.model';
import { RecipeService } from '../recipe.service';
import { CommonModule, NgIf } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIf],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss'
})
export class AddRecipeComponent {
  recipeForm !: FormGroup;
  selectedCategoryValue: string = '';
  constructor(private _recipiesService:RecipeService,private formBuilder: FormBuilder,private router:Router){

  }
  
  ingredientsFormArray!: FormArray;
  instructionsFormArray!: FormArray;
  categories : Category[]=[];
  selectedCategory: string = '';
  ngOnInit(): void {
    this._recipiesService.getCregory().subscribe({
      next: (res) => {
        this.categories=res;
        console.log("listCategory",this.categories)

      },
      error: (err) => {
        console.log(err);
      }
    })
    this.recipeForm = this.formBuilder.group({
      codeRecipe: ['', Validators.required],
      nameRecipe: ['', Validators.required],
      codeCategory: this.selectedCategory,
      duration: ['', Validators.required],
      degree: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      date: ['', Validators.required],
      codeUser: ['', Validators.required],
      image: ['', Validators.required],
      products: this.formBuilder.array([]),
      instructions: this.formBuilder.array([])
    });
    this.ingredientsFormArray = this.recipeForm.get('products') as FormArray;
    this.instructionsFormArray = this.recipeForm.get('instructions') as FormArray;
    console.log("  בעזרת ד  ",this.recipeForm.get('instructions')?.value ,this.recipeForm.get('product')?.value)

  }

// קבלת ה- FormControl של ה- select
// get categoryFormControl() {
//   console.log("categoryFormControl",this.recipeForm.get('codeCategory'));
  
//   return this.recipeForm.get('codeCategory');
// }


// onCategorySelection() {
//   console.log("onCategorySelection");
//   console.log("Category form control:", this.categoryFormControl);
//   const selectedValue = this.categoryFormControl?.value;
//   if (selectedValue !== undefined) {
//     this.selectedCategory = selectedValue;
//     console.log("category", this.selectedCategory);
//   } else {
//     console.log("Category is undefined");
//   }
// }

// onCategoryChange(value: string): void {
//   console.log("onCategoryChange",value);
  
//   this.selectedCategory = value;
//   console.log("selectedCategory",this.selectedCategory);

// }

  addIngredient() {
    this.ingredientsFormArray.push(this.formBuilder.control('')); // Changed 'product' to 'ingredient'
    // this.ingredientsFormArray.push(this.formBuilder.group({ ingredient: '' })); // Changed 'product' to 'ingredient'
  }

  removeIngredient(index: number) {
    this.ingredientsFormArray.removeAt(index);
  }

  addInstruction() {
    this.instructions.push(this.formBuilder.control('')); // Changed 'product' to 'ingredient'
    // this.instructionsFormArray.push(this.formBuilder.group({ instruction: '' }));
  }

  removeInstruction(index: number) {
    this.instructionsFormArray.removeAt(index);
  }

  resetForm() {
    this.recipeForm.reset();
  }

  get ingredients() {
    return this.recipeForm.get('products') as FormArray;
  }

  get instructions() {
    return this.recipeForm.get('instructions') as FormArray;
  }

  clearFormArrays() {
    while (this.ingredientsFormArray.length !== 0) {
      this.ingredientsFormArray.removeAt(0);
    }

    while (this.instructionsFormArray.length !== 0) {
      this.instructionsFormArray.removeAt(0);
    }
  }

  getInstructionFormControl(index: number): FormControl {
    return this.instructionsFormArray.at(index) as FormControl;
  }

  getIngredientFormControl(index: number): FormControl {
    return this.ingredientsFormArray.at(index) as FormControl;
  }
  
  onSubmit(event:Event) {
    event.preventDefault();
    const {  nameRecipe, selectedCategory, duration, degree ,date,image} = this.recipeForm.value;
    const ingredients1: string[] = this.recipeForm.value.products.filter((ingredient: string) => ingredient.trim() !== '')
    const instructions1: string[] = this.recipeForm.value.instructions.filter((ingredient: string) => ingredient.trim() !== '')

    const recipe: Recipe = {
      codeRecipe: 0,
      nameRecipe: nameRecipe,
      codeCategory: selectedCategory,
      duration: duration,
      degree: degree,
      date: date,
      products: ingredients1,
      instructions: instructions1,
      codeUser: 1,
      image: "string"
    };
    
    alert("  בעזרת ד  "+ nameRecipe+ selectedCategory+ duration+degree+date+image)
    console.log("  בעזרת ד  ", nameRecipe, selectedCategory, duration,degree,date,ingredients1,instructions1,image,)
    this._recipiesService.addRecipe(recipe).subscribe(
      (recipe) => {
        this.resetForm();
        this.clearFormArrays();
        Swal.fire({
          title: '!המתכון נוסף בהצלחה',
          icon: 'success',
          confirmButtonText: 'אישור'
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/recipies/all-recipies']);
          }
        });
      },
      (error) => {
        console.error("Error adding recipe:", error);
        Swal.fire({
          title: 'שגיאה',
          text: 'שגיאה בהוספת מתכון. אנא נסה שנית.',
          icon: 'error',
          confirmButtonText: 'אישור'
        });
        this.clearFormArrays();
      }
    );
  }
}

