# Office Hours


- Would it be possible to touch on the specifics of basic bubble, insertion, and selection algorithms?
- best practices for writing maintainable/readable code?
- demo a quick setup to use Babel from node CLI?
- event loop
- call stack
- v8


1. it works
2. testable
3. is readable and maintainable

## Readable & Maintainable

- clear variables names
- constancy
- small single responsibility pieces
- refactor and dry up your code






never use short variables names like `err`.
never use variables `data` `thing`

```js

printBooks(){

  books.reverse().forEach((book, index) => {

  })

  for (var i = Things.length - 1; i >= 0; i--) {
    Things[i]
  }

  for (let i = 0; i < Things.length; i++) {
    Things[i]
  }



}


```
