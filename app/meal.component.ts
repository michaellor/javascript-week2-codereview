import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div class="container">
      <h2>Meal Entry #{{ meal.id + 1}}:</h2>
      <h3>{{ meal.name }}</h3>
    </div>
  `
})
export class MealComponent {
  public meal: Meal;
}

//      <h4>Details: {{ meal.details }}</h4>
      //<h4>Calories: {{ meal.calories }}</h4>
