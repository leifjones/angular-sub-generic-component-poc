# AngularSubGenericComponentExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7. It started out with steps 1 - 3 of the [Angular 10 "Hero" tutorial](https://v10.angular.io/tutorial/toh-pt1). 

Then I pivoted to implementing some proofs of concept for various ways to use Angular features. The still-functional remnants of the Hero tutorial are below the new components.

## Noteables
* Model with class (vs. interface) for each data type
  * Base class shared by types that will be utilized by similar strucures
  * Custom constructors
    * *To check out some of the flexibility here, try swapping out the `super(...)` constructor call with one of the commented out ones in the `NotableEvent` class and then hover over the items in the left column of the site.*
* A component that is either reused (and could be extended)<br> _Reduces variation and duplication of code._
  * Utilizes Angular's `@Input()` to pass in data from parent component, which - in a more complete system would be the thing that obtains data from a data service or an intermediary facade.
  * Receives an optional tooltip parameter
* An approach to having top and bottom borders on appropriate places<br>
_See the `isFirst` attribute of the `<app-vertical-list-item>` element in `VertivalListComponent`'s html, coupled with the `class` getter in `VerticalListItemComponent` and the item component's css_
* Use of SASS syntax vs CSS or SCSS. This was actually done by a mistake. It reads pythonically.
* Organization of classes by component, service, model
  * Most data is mocked and directly accessed, but there is a one example so far of using a service - including similating needing to wait for any API call by using rxjs/of.
  * Exported via an `index.ts` at various points - allowing for cleaner imports throughout the application.

## Imagined Next Steps
* Extending from the base VerticalListItemComponent to allow for multiple columns. A TableTemplateComponent paradigm might work for this if it many similar uses were anticipated. 
* Try out a variant of the Hero tutorial's editing, but in-line with the VerticalListItemComponents.
* More of the Angular tutorial steps: resolves, directives, and pipes, oh my!

## Original Angular-generated Tips

### Development server

Prerequsites: Note 12+, Angular CLI 10.2+. (Upgrading this globally won't interfere with other simultaneous projects on you machine.)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` (or `ng serve -port 4201` to not interfere with something else running simultaneously). The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
