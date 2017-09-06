

document.addEventListener("DOMContentLoaded", function(event) {
  const header = document.querySelector('header')
  const scrollBorder = header.offsetTop
  let aboveHeader = document.body.scrollTop < scrollBorder

  document.addEventListener("scroll", function(event) {
    // console.log('aboveHeader? ', aboveHeader)
    if (aboveHeader && document.body.scrollTop >= scrollBorder){
      aboveHeader = false
      // console.log('JUST SCROLLED BEYOND HEADER')
      header.classList.add('header-fixed')
    }else if (!aboveHeader && document.body.scrollTop < scrollBorder){
      aboveHeader = true
      // console.log('JUST SCROLLED BEFORE HEADER')
      header.classList.remove('header-fixed')
    }
  })

  // header.classList.add('header-fixed')
  // header.classList.remove('header-fixed')
});
