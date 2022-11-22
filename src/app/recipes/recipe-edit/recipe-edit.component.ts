import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;
  id: number;
  editMode: boolean = false;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  get IngredientsControl() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  get timestamp(): FormControl {
    return this.recipeForm.get('timestamp') as FormControl;
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray<any>([]);
    let timestamp = '';

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              ingredientName: new FormControl(
                ingredient.ingredientName,
                Validators.required
              ),
              ingredientAmount: new FormControl(ingredient.ingredientAmount, [
                Validators.required,
              ]),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients,
      timestamp: new FormControl(timestamp),
    });
  }

  addIngredients() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        ingredientName: new FormControl(null, Validators.required),
        ingredientAmount: new FormControl(null, [Validators.required]),
      })
    );
  }

  onSubmit() {
    this.recipeForm.get('timestamp')?.patchValue(new Date().toLocaleString());
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.router.navigate(['/recipes']);
  }
}
