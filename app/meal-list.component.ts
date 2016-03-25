import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriesPipe],
  directives: [NewMealComponent, MealComponent, EditMealComponent],
  template: `
    <div class="row">
      <div class="col-md-6">
        <div>
          <new-meal (onSubmitNewMeal)="createMeal($event)">
          </new-meal>
        </div>
        <select (change)="caloriesChange($event.target.value)" class="filter">
          <option value="">Show All</option>
          <option value="high">High Calorie Foods (over 300)</option>
          <option value="low">Low Calorie Foods (under 300)</option>
        </select>
        <div>
          <meal-display *ngFor="#currentMeal of mealList | calories:filterCalories"
            (click)="mealClicked(currentMeal)"
            [class.selected]="currentMeal === selectedMeal"
            [meal]="currentMeal">
          </meal-display>
        </div>
      </div>
      <div class="col-md-6">
        <div class="container">
          <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal">
          </edit-meal>
        </div>
      </div>
    </div>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterCalories: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(mealArray: string[]): void {
    this.mealList.push(
      new Meal(mealArray[0], mealArray[1], Number(mealArray[2]), this.mealList.length)
    );
  }
  caloriesChange(filterOption) {
    this.filterCalories = filterOption;
  }
}



// <div *ngIf='displayDetails'>
//     <button (click)='hideDetails()'>Hide Food Details</button>
//       <new-meal (onNewMealSubmit)="createMeal($event)"></new-meal>
//     </div>
//     <div *ngIf='!displayDetails'>
//       <button (click)='showDetails()'>Show Food Details</button>
//     </div>
