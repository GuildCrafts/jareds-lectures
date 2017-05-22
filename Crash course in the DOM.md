# Crash course in the DOM

## Nomenclature

### DOM Node

AKA Element. A single node in the HTML DOM tree

### Node Type

The type of node: `div`, `a`, `span`, etc.

### Attributes

Given this HTML:

```html
<a href="http://example.com" target="_blank">example</a>
```

`href="http://example.com"` and `target="_blank"` are attributes

### Properties

…are the object properties on a DOM Node.

Given this JavaScript:

```js
var checkbox = document.querySelector('input[type="checkbox"]')
console.log(checkbox.checked ? 'checkbox is checked :D' : 'checkbox is not checked')
```

`checked` of `checkbox.checked` is a property of the DOMNode in the `checkbox` variable.


## Tree Strucutre

You can think of the DOM Tree as a series of nexted objects.

```html
<html>
  <body>
    <h1>Hello World</h1>
    <p>example</p>
  </body>
</html>
```

```js
var document = {
  nodeType: 'html',
  childNodes: [
    {
      nodeType: 'body',
      childNodes: [
        {
          nodeType: 'h1',
          childNodes: [
            {
              nodeType: 'text',
              data: 'Hello World'
            },
          ],
        },
        {
          nodeType: 'p',
          childNodes: [
            {
              nodeType: 'text',
              data: 'example'
            },
          ],
        },
      ]
    }
  ]
}
```


## Finding elements

- `querySelector` and `querySelectorAll`
- `NodeList` vs. `Array`
- `id` vs. `class`


## DOM events

- use `addEventHandler` in favor or properties or attributes
- bubbling
- `event.preventDefault()`
- `event.stopPropagation()`

## Associating data with DOM Nodes

## Console

`console.dir`

