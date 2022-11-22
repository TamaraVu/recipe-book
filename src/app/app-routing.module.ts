import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { TaskOneComponent } from './tasks/task-one/task-one.component';
import { TaskTwoComponent } from './tasks/task-two/task-two.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [],
  },
  {
    path: 'recipe/:id',
    component: RecipeDetailComponent,
  },
  {
    path: 'recipe/:id/edit',
    component: RecipeEditComponent,
  },
  {
    path: 'edit',
    component: RecipeEditComponent,
    pathMatch: 'full',
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'task-one',
    component: TaskOneComponent,
  },
  {
    path: 'task-two',
    component: TaskTwoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
