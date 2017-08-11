const allContacts = []

const addContact = function(firstName){
  if (typeof firstName !== 'string')
    throw new Error('firstName argument must be a string')
  allContacts.push({firstName})
}

const addContacts = function(contacts){
  contacts.forEach(contact => {
    addContact(contact.firstName)
  })
}


/////////////

addContacts([
  {firstName: 'Jared'},
  {firstName: 'Laura'},
  {firstName: 'Quarly'},
  {firstName: 'Steve'},
])


if (!module.parent) {

  // const assert = function(result, errorMessage){
  //   if (!result) throw new Error(errorMessage)
  // }
  const assert = console.assert

  const test = function(testBlock){
    // RESET
    allContacts.length = 0
    testBlock()
    // CLEANUP
  }

  const arrayDeepEqual = function(a, b){
    if (a.length !== b.length) return false
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false
    }
    return true
  }

  // expect([1,2,3]).to.deep.eql([1,2,3])
  assert(arrayDeepEqual([1,2,3], [1,2,3]), 'array deep eql 1 failed')
  assert(arrayDeepEqual([1,2,3], [1,2,3,4]), 'array deep eql 2 failed')
  assert(arrayDeepEqual([1,2,3], [1,2,6]), 'array deep eql 3 failed')

  test(function(){
    addContact('Bob')
    assert(
      allContacts.length === 1,
      'expected allContacts.length === 1'
    )
    assert(
      typeof allContacts[allContacts.length - 1] === 'object',
      'expected first contact to be an object'
    )
    assert(
      allContacts[allContacts.length - 1].firstName === 'Bob',
      'expected first contact\'s firstName to be "Bob"'
    )
  })



  test(function(){
    addContacts([
      {firstName: 'Jared'},
      {firstName: 'Laura'},
      {firstName: 'Quarly'},
      {firstName: 'Steve'},
    ])
    assert(
      allContacts.length === 4,
      'expected allContacts.length === 1'
    )
    assert(
      typeof allContacts[allContacts.length - 1] === 'object',
      'expected first contact to be an object'
    )
    assert(
      allContacts[allContacts.length - 1].firstName === 'Steve',
      'expected first contact\'s firstName to be "Steve"'
    )
  })


  test(function(){
    let thrownError
    try{
      addContact(123)
    }catch(error){
      thrownError = error
    }
    assert(thrownError, 'expected addContact(123) to throw errpr')
    assert(
      thrownError.message === 'firstName argument must be a string',
      'expected addContact(123) throw argument error'
    )
  })

}
