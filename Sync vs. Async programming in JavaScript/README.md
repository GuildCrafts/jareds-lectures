# Sync vs. Async programming in JavaScript


## JavaScript Event Loop


Node only stops when the event queue is empty


## Callbacks

Callbacks are not always async. `forEach` for example.

## `setTimeout`

used to schedule a callback in a given number of milliseconds


## Async Operations

- schedule a callback `setTimeout`
- read from a file `fs.readFile`
- write to a file `fs.writeFile`
- HTTP requests

## Async Loops



## Promises

Promises are always asynchronous.


## Exercises

- read three files sync vs. async
- function that setimeouts for a random number of seconds, use Promise.all
- loop through an array of urls and fetch them all



## Other

- debouncing
