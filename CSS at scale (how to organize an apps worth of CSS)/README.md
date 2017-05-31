# CSS at scale (how to organize an apps worth of CSS


## Classnames Are Global

There is no way to scope or nest classnames

## Order Matters

The order at which you're styles fall within your final CSS artifact impacts the order at which they're applied.

## Selector Specificity


[Specificity Calculator](https://specificity.keegan.st/)


## Pitfalls

### Using IDs

### Styling Node Types


## Organization


### Patterns


#### Atomic CSS

[Atomic](http://github.com/nemophrost/atomic-css)

Breaking down styles into atomic, or indivisible, pieces

#### BEM

[BEM](http://getbem.com/introduction/)

Block. Element. Modifier.

[naming rules](http://getbem.com/naming/)

#### Object Oriented CSS

[OOCSS](http://oocss.org/)

Separating container and content with CSS “objects”

#### SMACSS

[smacss](http://smacss.com/)

Style-guide to write your CSS with five categories for CSS rules

#### SUITCSS

[SUITCSS](http://suitcss.github.io/)

Structured class names and meaningful hyphens



## Preprocessors

Preprocessors can make it easier to use consistent prefixes for namespacing.

Most preprocessors can also be used to split your CSS up into multiple source files and then compile your final asset in the order defined by your require tree.

### LESS / SCSS / SASS

```scss

.signup-form{

  &-input{
    border: 1px solid grey;

    &:active, &:focus {
      border-color: blue;
    }
  }

  &-required-input{
    border-color: orange;
    &:active, &:focus {
      border-color: red;
    }
  }

}

```

```css
.signup-form-input {
  border: 1px solid grey; }
  .signup-form-input:active, .signup-form-input:focus {
    border-color: blue; }
.signup-form-required-input {
  border-color: orange; }
  .signup-form-required-input:active, .signup-form-required-input:focus {
    border-color: red; }
```

### Dumb Concatination

Webpack can do this.


## Styleguides

- [Google](https://google.github.io/styleguide/htmlcssguide.html)
- [GitHub](http://primercss.io/scaffolding/)
- [Airbnb](https://github.com/airbnb/css)
- [Some Others](http://styleguides.io/)


## Process and Workflow

Break up your CSS suit into components, not pages.

Keep styles specific until they need to be extracted out and shared across components.

Create a styleguide


## Browser Specific Stlyes


### Hacks

OMG so many hacks!

#### Underscore Hack

[CSS Underscore Hack](https://allinthehead.com/retro/150/css-underscore-hack)

#### `* html` Hack

http://www.dynamicsitesolutions.com/css/filters/star-html/

#### Others

- http://browserhacks.com/
- http://www.fix-css.com/cheat-sheets/css-hacks/


