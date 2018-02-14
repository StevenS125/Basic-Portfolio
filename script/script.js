$(document).ready(function () {

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

  // Handler for .ready() called.
  $('#someId').click(function(){
    $('html, body').animate({
        scrollBottom: $('#contact').offset().top
    }, 'slow');
});

var socket = io()

$(() => {
    $("#send").click(() => {
        var message = {
            name: $("#name").val(),
            message: $("#message").val()
        }
        postMessage(message)
    })
    getMessages()
})

socket.on('message', addMessage)

function addMessage(message) {
    $("#messages").append(`<h4> ${message.name} </h4> <p> ${message.message} </p>`)
}

function getMessages() {
    $.get('https://steve-snyder.herokuapp.com/messages', (data) => {
        data.forEach(addMessage);
    })
}

function postMessage(message) {
    $.post('https://steve-snyder.herokuapp.com/messages', message)
}


});

function myFunction() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar")

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


$("#scroller").click(function() {
  $('html, body').animate({
      scrollTop: $("#contact").offset().top
  }, 2000);
});