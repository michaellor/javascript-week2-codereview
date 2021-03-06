import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'detail-display',
  inputs: ['meal'],
  template: `
    <div class="container">
      <h3 class="orange_text">{{ meal.name }}</h3>
      <h4>Details: {{ meal.details }}</h4>
      <h4>Calories: {{ meal.calories }}</h4>
    </div>
  `
})
export class DetailComponent {
  public meal: Meal;
}
