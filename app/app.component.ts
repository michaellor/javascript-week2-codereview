import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div class="container">
      <h3>Meal Entry #{{ meal.id + 1}}:</h3>
      <h4>Name: {{ meal.name }}</h4>
      <h4>Details: {{ meal.details }}</h4>
      <h4>Calories: {{ meal.calories }}</h4>
    </div>
  `
})
export class MealComponent {
  public meal: Meal;
}


@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent],
  template: `
    <div class="container">
      <meal-display *ngFor="#currentMeal of mealList"
        (click)="mealClicked(currentMeal)"
        [class.selected]="currentMeal === selectedMeal"
        [meal]="currentMeal">
      </meal-display>
    </div>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
}

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
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

export class Meal {
  public empty: boolean = false;
  constructor(public name: string,
              public details: string,
              public calories: number,
              public id: number) {
  }
}
