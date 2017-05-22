# Crash course in the DOM

## Nomenclature

### DOM Node

AKA Element. A single node in the HTML DOM tree.

### Node Type

The type of node: `div`, `a`, `span`, etc.

### Text Node

A special kind of node representing text between nodes.

### Attributes



##### Attributes are Key / Value pairs

Given this HTML:

```html
<a href="http://example.com" target="_blank">example</a>
```

`href="http://example.com"` and `target="_blank"` are attributes


Some attributes can be boolean and appear to have no value. Their very presence is meaningful. For example:

```html
<input type="checkbox" checked />
```


##### data attributes

The HTML spec forbids adding arbitrary attributes to any'ol DOM Node. So if you want a custom attribute prefix it with `data-`.

For example:

```html
<ol class="blog-list">
  <li class="blog-list-member" data-postId="159498">
    …
  </li>
  <li class="blog-list-member" data-postId="264877">
    …
  </li>
</ol>
```


### Properties

…are the object properties on a DOM Node.

Given this JavaScript:

```js
var checkbox = document.querySelector('input[type="checkbox"]')
console.log(checkbox.checked ? 'checkbox is checked :D' : 'checkbox is not checked')
```

`checked` of `checkbox.checked` is a property of the DOMNode in the `checkbox` variable.

_NOTE while `checked` is both a property and an attribute, they're distinctly different despite being kept in sync._

## Tree Structure

You can think of the [DOM](https://www.w3schools.com/js/js_htmldom.asp) [Tree](https://en.wikipedia.org/wiki/Tree_(data_structure)) as a series of nested objects.


So this HTML:

```html
<html>
  <body>
    <h1>Hello World</h1>
    <p>example</p>
  </body>
</html>
```

Can be represented with this object structure:

```js
var fakeDocument = {
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

This is almost exactly how the Document Object Model represents the HTML for you in JavaScript.


## Finding elements

AKA Querying the DOM


You never need to use these:

- `getElementById`
- `getElementByClassName`
- `getElementByTagName`
- `getElementByName`

because these do everything you need:

- `querySelector` returns the first matching DOM Node
- `querySelectorAll` returns a `NodeList` of all the matching DOM Nodes


#### Querying by Id

```js
node.querySelector('#the-button')
```

#### Querying by ClassName

```js
node.querySelectorAll('.magic-button')
```

#### Querying by TagName

```js
node.querySelectorAll('div')
```

#### Querying by Name

```js
node.querySelector('*[name="zipcode"]')
```


### IDs Add Unessisary Complexity

Prefer `querySelector` and `querySelectorAll` over `getElementById`


### `NodeList` is not an `Array`

Since a `NodeList` is not an `Array` we cannot do:

```js
document.querySelectorAll('.magic-button').forEach(function(button){
  button.addEventHandler('click', onMagicButtonClick)
})
```

instead we have to convert the `NodeList` into an `Array`. Like this:


```js
Array.from(document.querySelectorAll('.magic-button')).forEach(function(button){
  button.addEventHandler('click', onMagicButtonClick)
})
```



## DOM events

### Binding

Prefer `addEventHandler` over event properties or attributes

You should prefer to do this:

```js
var pandaNode = document.querySelector('.panda')
pandaNode.addEventHandler('click', function(event){
  …
})
```

over this:

```js
var pandaNode = document.querySelector('.panda')
pandaNode.onclick = function(event){
  …
}
```

and definitely never ever do this:

```html
<body>
  <script type="text/javascript">
    function onPandaClick(){
      …
    }
  </script>
  <div class="panda" onClick="onPandaClick()" />
</body>
```



### `event.preventDefault()`

Prevents the default behavior of any event.



### `event.stopPropagation()`

Stops the event from bubbling up any further.




### Event Bubbling

Events always occur on a single target. Some events travel up the DOM. This is called bubbling. The event is triggered on the target element's parent node and then on that element's parent and so on until they reach the `HTML` AKA `document` element.

```html
<div class="links">
  <a href="" data-fruit="apple">Apple</a>
  <a href="" data-fruit="orange">orange</a>
  <a href="" data-fruit="peach">peach</a>
  <a href="" data-fruit="kiwi">kiwi</a>
</div>
```

```js
document.querySelector('.links').addEventHandler('click', function(event){
  event.preventDefault()
  console.log('you clicked on the '+event.target.dataset.fruit)
})
```

## Changing styles

Avoid setting styles directly in your JavaScript like this:

```js
var button = document.querySelector('.magic-button')
button.addEventHandler('click', function(event){
  button.style.backgroundColor = 'red'
})
```

instead use classNames:

```js
var button = document.querySelector('.toggle-button')
button.addEventHandler('click', function(event){
  if (button.classList.contains('toggle-button')){
    button.classList.remove('magic-button-clicked')
  }else{
    button.classList.add('magic-button-clicked')
  }
})
```


## Chrome Developer Tools

When inspecting elements in the Chrome Developer Tools console you will often get and HTML like rendering. If you want to ensure a JavaScript Object view of these elements use `console.log(node)`

When using the Elements tab of the Chrome Developer Tools. Whatever element you can selected is made available in the console within the `$0` variable.
