import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
    <div class="edit-form">
      <h4 class="red_text">Edit Meal Properties</h4>
        <label>meal name:</label>
        <input [(ngModel)]="meal.name" class="input-md"/><br>
        <label>details:</label>
        <input [(ngModel)]="meal.details" class="input-md"/><br>
        <label>colories:</label>
        <input [(ngModel)]="meal.calories" type="number" class="input-md"/><br>
    </div>
    `
})

export class EditMealComponent {
  public meal: Meal;
}
