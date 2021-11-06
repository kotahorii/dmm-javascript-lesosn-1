$(()=>{
  $('#back a').on('click', (e)=>{
    $('body, html').animate({
      scrollTop:0
    },800)
    e.preventDefault()
  })
})