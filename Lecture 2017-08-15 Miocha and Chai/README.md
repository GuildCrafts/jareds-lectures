# Mocha and Chai


- assert vs. expect
- deep equal


## Mocha is a testing framework
## Chai is an assertion library


```js

const doNothing = function(){}

const readTheFile = function(){
  // read the file /whatever.txt
  // return its contents
}




// before your test
// expectedContents = "i like cheese #{Math.random()}"
// write to that file (expectedContents)
expect(readTheFile()).to.eql(expectedContents)


before our test
writeToTheFile("some other random unique string")
// read that file
// expect(fs.readFileSync("/whatever.txt")).to.eql(…)

```
