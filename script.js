// input related variable
let inputTask = document.getElementById('it');
let outputTask = document.getElementById('tn');

// time related variable

let timeAssign = document.getElementById('clicktime');

// expected time related variable

let inputTime = document.getElementById('extimeinput');
let expectTime = document.getElementById('extime');


function watch(){
    var date = new Date();
    var hr = date.getHours();
    var mn = date.getMinutes();
    var sc = date.getSeconds();
    h = checkTime(hr);
    m = checkTime(mn);
    let clickTime = h + ":" + m; 
    timeAssign.innerHTML = clickTime;
}


function myTask(){
    // add name of input in desired field
    outputTask.innerHTML = inputTask.value;

    // add expected time in desired field

    expectTime.innerHTML = inputTime.value;
    watch();
}

function checkTime(i, h) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
