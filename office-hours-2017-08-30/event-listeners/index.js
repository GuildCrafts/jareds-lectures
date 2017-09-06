// strategy 1
const onButtonClick = function(){
  console.log('button 1 clicked')
}

document.addEventListener("DOMContentLoaded", function(event) {

  // strategy 2
  const button2 = document.querySelector('.button2')
  button2.onclick = function(event){
    console.log('button 2 clicked', event)
  }

  // strategy 3
  const button3 = document.querySelector('.button3')

  button3.addEventListener('click', function(event){
    console.log('button 3 clicked', event)
  })

  button3.addEventListener('click', function(event){
    console.log('button 3 clicked (2nd HANDLER)', event)
  })

});
