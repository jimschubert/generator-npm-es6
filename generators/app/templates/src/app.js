/*global console*/
'use strict';
export default class Application {
  constructor() {
    this.name = `
		Welcome to my app.
		This app is written with ES6.
	`;
  }

  example() {
    console.log(this.name);
    return this.name;
  }
}
