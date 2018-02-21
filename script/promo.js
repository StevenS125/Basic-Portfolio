/*$(document).ready(function () {

$(function() {
    $('.intro').addClass('go');
  
    $('.reload').click(function() {
      $('.intro').removeClass('go').delay(200).queue(function(next) {
        $('.intro').addClass('go');
        next();
      });
  
    });
  })
});
*/

document.addEventListener('DOMContentLoaded', function(){ 
 


var element = document.getElementById('butter')


    setTimeout(function(){ 
    element.classList.add('intro')
    console.log('fuck you')
    ; }, 1000)


    setTimeout(function(){ 
        element.classList.add('introgo')
        ; }, 1500)

    }, false);


