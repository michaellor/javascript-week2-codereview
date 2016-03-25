import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="meal-form">
      <h4>New Meal Entry</h4>
      <input placeholder="Name" type="text" class="input-md" #newName>
      <input placeholder="Details" type="text" class="input-md" #newDetails>
      <input placeholder="Calories" type="number" class="input-md" #newCalories>
      <button (click)="addMeal(newName, newDetails, newCalories)" class="btn btn-success">Add Entry</button>
    </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;
  public newMeal: String[];
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement) {
    this.newMeal = [userName.value, userDetails.value, userCalories.value];
    this.onSubmitNewMeal.emit(this.newMeal);
    userName.value ="";
    userDetails.value ="";
    userCalories.value ="";
  }
}
