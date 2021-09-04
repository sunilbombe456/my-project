import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[] = [
    new Ingredient('apple','5'),
    new Ingredient('watermellon','6'),
    new Ingredient('mango','8')
  ];

  constructor() { 

  }

  onAddIngredient(dataAdded : {name:string,amount: string})
  {
   this.ingredients.push(new Ingredient(dataAdded.name,dataAdded.amount));
  }

  ngOnInit() {
  }

  onDeleteIngredient(dataDeleted: void)
  {
    this.ingredients.pop();
  }

}
