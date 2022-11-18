import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}
  private recipes: Recipe[] = [
    {
      name: 'Sushi Easy Recipe',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      imagePath:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-837452_11-fbff219.jpg',
      ingredients: [
        { ingredientName: 'Uncooked sushi rice', ingredientAmount: '2 cups' },
        { ingredientName: 'Water', ingredientAmount: '2 cups' },
        { ingredientName: 'Rice vinegar', ingredientAmount: '2 tablespoons' },
        { ingredientName: 'Sugar', ingredientAmount: '2 tablespoons' },
        { ingredientName: 'Salt', ingredientAmount: '11/2 tablespoons' },
        { ingredientName: 'Nori', ingredientAmount: '4 sheets' },
        { ingredientName: 'Pre-cooked tempura shrimp', ingredientAmount: '8' },
        { ingredientName: 'cucumber', ingredientAmount: '8 strips' },
        {
          ingredientName: 'black and/or white sesame seeds',
          ingredientAmount: '3 tablespoons',
        },
      ],
    },
    {
      name: 'Homemade burger',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imagePath:
        'https://images.immediate.co.uk/production/volatile/sites/30/2021/11/Ultimate-Christmas-burger-cab555b.jpg',
      ingredients: [
        { ingredientName: 'ground lean beef', ingredientAmount: '1 pound' },
        { ingredientName: 'egg', ingredientAmount: '1' },
        { ingredientName: 'minced onion', ingredientAmount: '1/2 cup' },
        { ingredientName: 'breadcrumbs', ingredientAmount: '1/2 cup' },
        { ingredientName: 'Worcestershire', ingredientAmount: '1 tablespoons' },
        {
          ingredientName: 'garlic, peeled and minced',
          ingredientAmount: '1 or 2 cloves',
        },
        { ingredientName: 'salt', ingredientAmount: '1/2 teaspoon' },
        { ingredientName: 'pepper', ingredientAmount: '1/2 teaspoon' },
        {
          ingredientName: 'black and/or white sesame seeds',
          ingredientAmount: '3 tablespoons',
        },
      ],
    },
    {
      name: 'Vegan Smoothie',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imagePath:
        'https://realfoodwholelife.com/wp-content/uploads/2021/12/Strawberry-Banana-Peanut-Butter-Smoothie-3-500x500.jpg',
      ingredients: [
        { ingredientName: 'frozen strawberries', ingredientAmount: '2 cups' },
        { ingredientName: 'bannanas', ingredientAmount: '2' },
        { ingredientName: 'water', ingredientAmount: '1/2 cup' },
        { ingredientName: 'ice cubes', ingredientAmount: '8' },
      ],
    },
    {
      name: 'Calabaza Soap',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imagePath:
        'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2020-10-Instant-Pot-Butternut-Squash-Soup%2F2020-10-14_ATK_30985',
      ingredients: [
        {
          ingredientName: 'calabaza squash kalabasa, cubed',
          ingredientAmount: '1 lb',
        },
        { ingredientName: 'chicken broth', ingredientAmount: '2 cups' },
        { ingredientName: 'salt', ingredientAmount: '1 1/2 teaspoons' },
        { ingredientName: 'onion', ingredientAmount: '1' },
        { ingredientName: 'garlic powder', ingredientAmount: '1 teaspoon' },
        { ingredientName: 'heavy whipping cream', ingredientAmount: '1/2 cup' },
        {
          ingredientName: 'ground black pepper',
          ingredientAmount: '1/2 teaspoon',
        },
        { ingredientName: 'dried parsley', ingredientAmount: '1/2 teaspoon' },
      ],
    },
    {
      name: 'Homemade Breakfast',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imagePath:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baked-eggs-and-zoodles-bundles1-1661458984.jpeg?crop=0.857xw:1.00xh;0.0722xw,0&resize=640:*',
      ingredients: [
        {
          ingredientName: 'butter',
          ingredientAmount: '1/2 tablespoon',
        },
        { ingredientName: 'eggs', ingredientAmount: '2' },
      ],
    },
    {
      name: 'Healthy Fruit Desert',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imagePath:
        'https://thebusybaker.ca/wp-content/uploads/2016/07/tropical-parfaits-fbig.png',
      ingredients: [
        {
          ingredientName: 'blueberries',
          ingredientAmount: '1 pint',
        },
        { ingredientName: 'peaches', ingredientAmount: '2' },
        { ingredientName: 'pineapple', ingredientAmount: '1' },
        { ingredientName: 'strawberries', ingredientAmount: '1 pint' },
        { ingredientName: 'watermelon', ingredientAmount: '2 cups' },
      ],
    },
  ];

  getRecipes() {
    return this.recipes;
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
}
