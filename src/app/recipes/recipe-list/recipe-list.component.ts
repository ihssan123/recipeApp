import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[]=[
    new Recipe('A test recipe','This is simply a test','https://www.eatingwell.com/thmb/fW8uYHYMRuY0v_hmZ3xyTtmb04o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/EWL-255186-chickpea-curry-chhole-Step-01-B-fdcdbd14ce7f4eab901582eac22a8b27.jpg')
  ];
  constructor(){

  }
  ngOnInit(): void {
      
  }

}
