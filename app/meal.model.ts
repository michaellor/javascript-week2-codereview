export class Meal {
  public empty: boolean = false;
  constructor(public name: string,
              public details: string,
              public calories: number,
              public id: number) {
  }
}
