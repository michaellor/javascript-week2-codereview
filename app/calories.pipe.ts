import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe ({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var caloriesThreshold = args[0];
    if (caloriesThreshold === "high") {
      return input.filter((meal) => {
        if (meal.calories >= 300) {
          return true;
        }
      });
    } else if (caloriesThreshold === "low") {
        return input.filter((meal) => {
          if(meal.calories < 300) {
            return true;
          }
        });
      } else {
        return input;
      }
    }
  }
