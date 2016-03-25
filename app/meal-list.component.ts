import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { DetailComponent } from './meal-details.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriesPipe],
  directives: [NewMealComponent, MealComponent, EditMealComponent, DetailComponent],
  template: `
    <div class="row">
      <div class="col-sm-6">
        <hr>
        <div>
          <new-meal (onSubmitNewMeal)="createMeal($event)">
          </new-meal>
        </div>
        <br><br>
        <select (change)="caloriesChange($event.target.value)" class="filter">
          <option value="">Show All</option>
          <option value="high">High Calorie Foods (over 300)</option>
          <option value="low">Low Calorie Foods (under 300)</option>
        </select>
        <br><br>
        <hr>
        <div>
          <h3>Meal List</h3>
          <meal-display *ngFor="#currentMeal of mealList | calories:filterCalories"
            (click)="mealClicked(currentMeal)"
            [class.selected]="currentMeal === selectedMeal"
            [meal]="currentMeal">
          </meal-display>
        </div>
        <hr>
      </div>
      <div class="col-sm-6">
        <div>
          <detail-display *ngIf="selectedMeal" [meal]="selectedMeal">
          </detail-display>
        </div>
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
