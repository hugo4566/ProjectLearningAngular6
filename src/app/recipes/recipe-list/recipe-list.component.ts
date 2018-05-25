import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','Simple Test','https://media.npr.org/assets/img/2016/06/29/coolandspicycucpage_custom-76cd10cf7f561a3c8bd6330f119995c73213065d-s900-c85.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
