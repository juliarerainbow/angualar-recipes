import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import { CategoryToStringPipe } from 'src/app/pipes/category-to-string.pipe';
import { MatButtonModule } from '@angular/material/button';
import { SuperButtonDirective } from 'src/app/directives/super-button.directive';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, 
            CategoryToStringPipe,
            MatButtonModule,
            SuperButtonDirective],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipe?: Recipe;

  constructor(private dataServ: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('sticazzi');
    if (id) {
      this.dataServ.getRecipe(id).subscribe((r) => (this.recipe = r));
    }
  }

  deleteRecipe() {
    if (this.recipe && this.recipe.id) {
      this.dataServ.deleteRecipe(this.recipe.id).subscribe(resp=> { console.log('cancellato')});
    }
  }
}
