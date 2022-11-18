import { Ingredient } from './ingredient.model';

export interface Recipe {
  name: string;
  description: string;
  imagePath: string;
  timestamp?: string;
  ingredients?: Ingredient[];
}
