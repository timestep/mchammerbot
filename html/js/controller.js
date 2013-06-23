// $.post("http://localhost:8071/motors", {a: 5}, function() {}, "jsonp");
// $.ajax({url: "http://127.0.0.1:8071/motors", data: {a: 1}, dataType: "jsonp"});

////BUTTON INTERACTION
$('.btn-large').data('url', "http://127.0.0.1:8071/motion-control/update");
$('#forward').data('movement', {forward: 1});
$('#backward').data('movement', {forward: -1});
$('#turn_right').data('movement', {turn: 1});
$('#turn_left').data('movement', {turn: -1});
$('#strafe_right').data('movement', {strafe: 1});
$('#strafe_left').data('movement', {strafe: -1});
$('#stop').data('movement', {forward: 0})

$('.btn-large').mousedown(function() {
  var motionControl = $(this).data();
  $.ajax({url: motionControl.url, data: motionControl.movement, dataType: "jsonp"});
});
$('.btn-large').mouseup(function() {
  var motionControl = $(this).data();
  $.ajax({url: motionControl.url, dataType: "jsonp"});
});
$('.btn-large').mouseleave(function() {
  var motionControl = $(this).data();
  $.ajax({url: motionControl.url, dataType: "jsonp"});
});

serverurl = "http://127.0.0.1:8071/motion-control/update"
timeoutID = 0;
clicked = false;
reverse = 1;
acc = 0;
//chunk for accelerator
$('#big').mousedown(function() {
  clicked = true;
  // if (reverse === 1) {
    timeoutId = setTimeout(function() {
      acc = 0.2}
      , 1);
    timeoutId = setTimeout(function() {
      acc = 0.4}
      , 700);
    timeoutId = setTimeout(function() {
      acc = 0.6}
      , 1400);
    timeoutId = setTimeout(function() {
      acc = 1}
      , 2100);}
  // else {
  //   timeoutId = setTimeout(function() {
  //     acc = 0.1}
  //     , 1);
  //   timeoutId = setTimeout(function() {
  //     acc = 0.2}
  //     , 700);
  //   timeoutId = setTimeout(function() {
  //     acc = 0.4}
  //     , 1400);
  //   timeoutId = setTimeout(function() {
  //     acc = 0.5}
  //     , 2100);}
  ).bind('mouseup mouseleave', function() {
  $.ajax({url: serverurl, dataType: "jsonp"});
  clearTimeout(timeoutId);
  acc = 0;
  clicked = false;
});

//chunk for left turn
$('#left').mouseover(function() {
  if (clicked) {
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc*reverse, turn:-0.5*acc*reverse}, dataType: "jsonp"})}
    , 1);
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc*reverse, turn:-0.5*acc*reverse}, dataType: "jsonp"})}
    , 700);
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc*reverse, turn:-0.5*acc*reverse}, dataType: "jsonp"})}
    , 1400);
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc*reverse, turn:-0.5*acc*reverse}, dataType: "jsonp"})}
    , 2100); 
  }
})

//chunk for straight
$('#straight').mouseover(function() {
  if (clicked) {
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc*reverse}, dataType: "jsonp"})}
    , 1);
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc*reverse}, dataType: "jsonp"})}
    , 700);
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc*reverse}, dataType: "jsonp"})}
    , 1400);
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc*reverse}, dataType: "jsonp"})}
    , 2100); 
  }
})

//chunk for left turn
$('#right').mouseover(function() {
  if (clicked) {
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc*reverse, turn:0.5*acc*reverse}, dataType: "jsonp"})}
    , 1);
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc*reverse, turn:0.5*acc*reverse}, dataType: "jsonp"})}
    , 700);
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc*reverse, turn:0.5*acc*reverse}, dataType: "jsonp"})}
    , 1400);
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc*reverse, turn:0.5*acc*reverse}, dataType: "jsonp"})}
    , 2100); 
  }
})

//stick that switches between Drive and Reverse
$('#stick').click(function () {
  if ($('#stick').css('background-color') === "rgb(255, 255, 0)") {
    $('#stick').css('background-color', 'green');
    reverse = -0.5;
  } else {
    $('#stick').css('background-color', 'yellow');
    reverse = 1;
  }})
