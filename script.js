// input related variable
let inputTask = document.getElementById('it');
let outputTask = document.getElementById('tn');

// time related variable

let timeAssign = document.getElementById('clicktime');

// expected time related variable

let inputTime = document.getElementById('extimeinput');
let expectTime = document.getElementById('extime');

// Countdown related variables

let remtime = document.getElementById('remtimeid');

// watch function data variables

var date = new Date();
    var hr = date.getHours();
    var mn = date.getMinutes();
    var mnth = date.getMonth();
    var sc = date.getSeconds();
    var yr = date.getFullYear();

function watch(){
    var date = new Date();
    var hr = date.getHours();
    var mn = date.getMinutes();
    var sc = date.getSeconds();
    
    h = checkTime(hr);
    m = checkTime(mn);
    s = checkTime(sc)
    let clickTime = h + ":" + m + ":" + s; 
    timeAssign.innerHTML = clickTime;
}

function myTask(){
    // add name of input in desired field
    outputTask.innerHTML = inputTask.value;

    // add expected time in desired field

    expectTime.innerHTML = inputTime.value;


    watch();
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

// COUNT DOWN
// Update the count down every 1 second
var countDownDate = new Date("Dec 31, 2022 24:00:00").getTime();

var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    remtime.innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
     
      
    // If the count down is over, write some text 
    // if (distance < 0) {
    //   clearInterval(x);
    //   document.getElementById("demo").innerHTML = "EXPIRED";
    // }
  }, 1000);
  
