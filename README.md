# AngularViewTransitionsDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0.

## Prerequisite 
- You'll need a chromium based browser, as the View Transitions API is not supported on Firefox at the moment. 
- Just go for Chrome. :) 

## Code along 

- First, run the application with `ng serve`. You should now be able to see the application running on `http://localhost:4200/`.
- Open the link on your browser, and click on any of the "Read more" buttons. You should see that the transition is very direct. 

- Now, let's add some transitions and view the changes. 

- Open app.config.ts, and add `withViewTransitions()` to the `provideRouter()` configuration. 
  - If you go to the browser and click on any of the "Read more" buttons, you'll notice that the transition is much smoother. 

- This is already an improvement, but we can add more details.

### Let's move the image from the card to the details page.

- The goal is to move the image from the card (point A) to the details page (point B), using the least amount of code. 
- Currently the first view sort of fades out, and the second view fades in.
- But let's make the image expand from A to B.

- First, let's find the image in the artist-list component, and add the `view-transition-name` property.
- We want to make sure this identifier is unique to the view, for which we can use the `artist.id` property. 

```html
<img
  class="header-image img-responsive"
  mat-card-image
  src="assets/{{artist.image}}"
  [style.view-transition-name]="'img-' + artist.id"
  [alt]="artist.name"
>
```

- We've now defined the "old" state to be transitioned. We need to define the "new" state as well. 
- Find the image in the artist component, and add the _same_ `view-transition-name` property. 

```html
  <div
  class="img-container"
  [ngStyle]="{ backgroundImage: 'url(assets/' + artist.image + ')', viewTransitionName: 'img-' + artist.id }"
>
```

Now we should see the image transition from the card to the details page. But... is it really smooth? 

The reason for this ^ is called [Ink Overflow](https://developer.mozilla.org/en-US/docs/Glossary/Ink_overflow), and the fix for it is about how the image is rendered in the first place.

## Exercise

- For an exercise, I would like to add a transition to the artist name and artist lifespan. How would you go about it?

### Answer below (spoilers)

- Currently, when we trigger the navigation, the view is being morphed. Let's add a transition to move the name and lifespan from the card onto the details page. 

- For this, we'll need to use the `view-transition-name` property. 
  - We need to add a **unique** identifier. In a single view, only one item can have a certain identifier. Otherwise, the browser will throw an error. 
  - We can define this in a css class, in the style html tag, in [ngStyle] etc. 

- The view transition API looks at things as 2 states, namely "old" and "new". It takes a snapshot of the old state, and then animates the new view to the new state. 

- Find the artist name and artist lifespan in the card component, and add the `view-transition-name` property.
- Because we need the items to be unique, we'll use the `artist.id` to make the name and lifespan unique.
```html
<!-- artist-list.component.html -->
<mat-card-title [style.view-transition-name]="'img-' + artist.id + '-name'">{{ artist.name }}</mat-card-title>
<mat-card-subtitle [style.view-transition-name]="'img-' + artist.id + '-lifespan'">{{ artist.lifespan }}</mat-card-subtitle>
```

This ^ is the old state. 

We want to move the `name` and `lifespan` values 
- from the `artist-list` view (old state) 
- onto their new location on the `artist` component (new state) 

To make sure the browser knows where to move the items, we need to add the `view-transition-name` property to the "new state" as well: 
```html
<!-- artist.component.html -->
<h2 class="artist-name" [style.view-transition-name]="'img-' + artist.id + '-name'">{{ artist.name }}</h2>
<h5 class="artist-lifespan" [style.view-transition-name]="'img-' + artist.id + '-lifespan'">{{ artist.lifespan }}</h5>
```

And now the text moves from point A to point B, where 
- point A is the text's location on the card component, and 
- point B is the text's location on the artist component, right under the image.

Notice that this experience is a bit janky. 
Takeaway from this: just because we can add an animation to something, doesn't mean we should. :) 

