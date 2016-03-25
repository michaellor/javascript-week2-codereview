import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent, NewMealComponent],
  template: `
    <div class="container headerdiv">
      <h1 class="white_text">Meal Tracker App</h1>
      <p>by Michael Lor - Epicodus 2016</p>
      <meal-list
      [mealList]="meals"
      (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Toast and OJ", "Didn't eat the crust. I hate crust.", 85, 0),
      new Meal("Big Mac and Soda", "The soda was diet Coke!", 541, 1)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(this.meals, clickedMeal); //take this out later.
  }
}
