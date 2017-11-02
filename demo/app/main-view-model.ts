import { Observable } from 'tns-core-modules/data/observable';
import { Shadow } from 'nativescript-shadow';

export class HelloWorldModel extends Observable {
  public message: string;
  private shadow: Shadow;

  constructor() {
    super();

    this.shadow = new Shadow();
    this.message = this.shadow.message;
  }
}
