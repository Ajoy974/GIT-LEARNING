$('button').click(function(){
  $("div").animate({
    fontSize: "-=1px",

  },'5000',()=>{
    alert('hello world')
  })
})