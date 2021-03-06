import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div class="container">
      <h4>Meal Entry #{{ meal.id + 1}}: {{ meal.name }}</h4>
    </div>
  `
})
export class MealComponent {
  public meal: Meal;
}
