(function($)
{
    var burger = $('header nav>div:last-child ');
    var menu = $('header nav div:nth-child(3) ');
    var heading = $('header nav ul a')
    var btn = $('#contact > div:first-child > div:nth-child(2) form > div:nth-child(5) button');
    var btntag = $('#contact > div:first-child > div:nth-child(2) form > div:nth-child(5) p');
    var divbtn = $('#contact > div:first-child > div:nth-child(2) form > div:nth-child(5)');

    burger.on('click', function()
      {
        menu.slideToggle();
        divbtn.fadeToggle('fast');
      
        heading.on('click', function()
         {
             menu.slideUp();
             divbtn.fadeIn();
         });
    });
    
//-----------------------------------------------------
    var more = $('header > div:nth-child(5) > div:nth-child(5) > div:last-child > p:nth-child(2)');
    var txt = $('#txtdropdown');
    var arrowup = $('#txtdropdown>i');

    more.on('click', function()
    {
      txt.slideToggle('slow');
      more.hide('slow');
    });
    arrowup.on('click', function()
    {
        txt.slideUp();
        more.show('slow');
    });
//----------------------------------------------------
// $(document).scroll(function()
// {
//   // .animate({left : '+=50px'}, "fast" );
// });

})(jQuery);

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove' , e => 
{
    cursor.setAttribute('style' , "top: " +(e.pageY - 10)+ "px; left: " +(e.pageX - 10)+ "px;")
})

document.addEventListener('click', () => 
{
    cursor.classList.add("expand");

    setTimeout(() => 
    {
      cursor.classList.remove("expand");
    }, 500)
    
})
//----------------------------------------------------
