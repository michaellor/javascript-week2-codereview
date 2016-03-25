import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';
import { MealListComponent } from './meal-list.component';
import { MealComponent } from './meal.component';
import { EditMealComponent } from './edit-meal.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent, NewMealComponent],
  template: `
    <div class="container">
      <h1>Mega Meal Tracker</h1>
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
