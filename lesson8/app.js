// $(()=>{
//   $('.bg1').on('click', ()=>{
//     $('.bg1').slideUp()
//   })

//   $('.bg2').on('click', ()=>{
//     $('.bg2').slideUp()
//   })

//   $('.bg3').on('click', ()=>{
//     $('.bg3').slideUp()
//   })

//   $('.bg4').on('click', ()=>{
//     $('.bg4').slideUp()
//   })
// })

$(()=>{
  $('.box1').on('click', function(){
     $(this).slideUp();
  })
})

// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   });
// });

$(()=>{
  $('button').on('click', ()=>{
    $('ul').children().css('color', 'red')
  })
})