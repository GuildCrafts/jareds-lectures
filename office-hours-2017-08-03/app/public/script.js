document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal')

  const openModal = () => {
    modal.classList.add('modal-open')
    document.body.classList.add('showing-modal')
  }
  const closeModal = () => {
    modal.classList.remove('modal-open')
    document.body.classList.remove('showing-modal')
  }

  const modalOpenButton = document.querySelector('.modal-open-button')
  modalOpenButton.addEventListener('click', (event)=>{
    event.preventDefault()
    openModal()
  })

  const modalCloseButton = document.querySelector('.modal-close-button')
  modalCloseButton.addEventListener('click', event => {
    event.preventDefault()
    closeModal()
  })

  modal.addEventListener('click', event => {
    console.log('EVNET TARGET', event.target)
    if (event.target === modal){
      event.preventDefault();
      closeModal()
    }
  })


});
