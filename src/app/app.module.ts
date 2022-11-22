import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';

import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BlogComponent } from './blog/blog.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { TaskOneComponent } from './tasks/task-one/task-one.component';
import { TaskTwoComponent } from './tasks/task-two/task-two.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    AboutUsComponent,
    ContactUsComponent,
    BlogComponent,
    TaskOneComponent,
    TaskTwoComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  exports: [RecipeItemComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
