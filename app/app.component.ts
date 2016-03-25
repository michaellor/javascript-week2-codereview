import { Component } from 'angular2/core';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
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

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Mega Meal Tracker</h1>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Toast and OJ", "Didn't eat the crust. I hate crust.", 85),
      new Meal("Big Mac and Soda", "The soda was diet Coke!", 541)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal); //take this out later.
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
