import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Recipe } from 'src/app/model/recipe';
import { RouterModule } from '@angular/router';
import { CategoryToStringPipe } from 'src/app/pipes/category-to-string.pipe';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RepeatDirective } from 'src/app/directives/repeat.directive';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule,MatIconModule, MatCardModule, MatButtonModule,RouterModule,CategoryToStringPipe,RepeatDirective],
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe;

}
