$(()=>{
  $('.menu-trigger').on('click', function(e){
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle()
    e.preventDefault()
  })
})