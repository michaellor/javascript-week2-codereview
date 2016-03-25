import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
    <div class="row">
      <h4>Edit this meal</h4>
        <input [(ngModel)]="meal.name" class="col-sm-4" input-md"/>
        <input [(ngModel)]="meal.details" class="col-sm-4" input-md"/>
        <input [(ngModel)]="meal.calories" class="col-sm-4" input-md"/>

    </div>
    `
})

export class EditMealComponent {
  public meal: Meal;
}
