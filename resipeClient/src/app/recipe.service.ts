import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }
  
  getRecipes(): Observable<any> {
    return this.http.get('/api/Recipe')
  }
  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`https://localhost:7155/api/Recipe/${id}`)
  }
  addRecipe(r:Recipe):Observable<any>{
    return this.http.post('https://localhost:7155/api/Recipe/',r);
  }
  getCregory():Observable<any>{
    return this.http.get('/api/Category');
    //043997
  }
  editRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`https://localhost:7155/api/Recipe/${recipe.codeRecipe}`, recipe);
  }
  deleteRecipe(codeRecipe: number):Observable<any>{
    return this.http.delete<Recipe>(`https://localhost:7155/api/Recipe/${codeRecipe}`)
  }
}

