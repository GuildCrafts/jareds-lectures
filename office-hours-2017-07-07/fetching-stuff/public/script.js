document.addEventListener("DOMContentLoaded", function(event) {
  const button = document.querySelector('button')
  const pre = document.querySelector('pre')

  button.addEventListener('click', function(event){
    pre.innerText = 'doing AJAX…'
    fetch('/pugs', {
      method: 'PATCH'
    })
      .then(response => response.json())
      .then(payload => {

        pre.innerText = JSON.stringify(payload, null, 4)
      })

  })
});
