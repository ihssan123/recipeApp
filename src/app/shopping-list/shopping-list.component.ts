import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingrediants:Ingredient[]=[
    new Ingredient("Apple",12),
    new Ingredient("Tomate",20)
  ];
  ngOnInit(): void {
      
  }

}
