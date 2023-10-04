import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { DishType, Recipe } from 'src/app/model/recipe';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [
    CommonModule,
    RecipeCardComponent,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {

  //mi creo un array vuoto per tenere tutte le ricette
  allRecipes: Recipe[] = [];
  recipes: Recipe[] = [];
  //-1 perché non c'è una categoria con questo valore
  selectedCategory: string = '-1';

  categories = Object.entries(DishType).slice(Object.entries(DishType).length/2);

  constructor(private dataServ: DataService) {}

  ngOnInit(): void {
    this.dataServ
      .allRecipes
      .subscribe((recipes) => {
        this.recipes = recipes;
        this.allRecipes = recipes;
      });

      // for (const [key,value] of Object.entries(DishType)) {
      //   console.log(key,value);
      // }
      // console.log(DishType);
      // console.log(Object.entries);
  }

  categoryChanged() {
    console.log(this.selectedCategory);
    console.log(this.allRecipes);

    if (this.selectedCategory === '-1') {
      this.recipes = this.allRecipes;
    } else {
      const categoryNumber = parseInt(this.selectedCategory);
      this.recipes = this.allRecipes.filter(
        recipe => recipe.category === categoryNumber
      );
    }

  }


}
