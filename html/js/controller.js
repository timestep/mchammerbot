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
//chunk for accelerator
$('#big').mousedown(function() {
  clicked = true;
  timeoutId = setTimeout(function() {
    acc = 0.2}
    , 1);
  timeoutId = setTimeout(function() {
    acc = 0.4}
    , 500);
  timeoutId = setTimeout(function() {
    acc = 0.6}
    , 1000);
  timeoutId = setTimeout(function() {
    acc = 1}
    , 1500);
  }).bind('mouseup mouseleave', function() {
  $.ajax({url: serverurl, dataType: "jsonp"});
  clearTimeout(timeoutId);
  acc = 0;
  clicked = false;
});

//chunk for left turn
$('#left').mouseover(function() {
  if (clicked) {
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc, turn:-0.8*acc}, dataType: "jsonp"})}
    , 1);
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc, turn:-0.8*acc}, dataType: "jsonp"})}
    , 500);
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc, turn:-0.8*acc}, dataType: "jsonp"})}
    , 1000);
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc, turn:-0.8*acc}, dataType: "jsonp"})}
    , 1500); 
  }
})

//chunk for straight
$('#straight').mouseover(function() {
  if (clicked) {
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc}, dataType: "jsonp"})}
    , 1);
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc}, dataType: "jsonp"})}
    , 500);
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc}, dataType: "jsonp"})}
    , 1000);
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc}, dataType: "jsonp"})}
    , 1500); 
  }
})

//chunk for left turn
$('#right').mouseover(function() {
  if (clicked) {
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc, turn:0.8*acc}, dataType: "jsonp"})}
    , 1);
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc, turn:0.8*acc}, dataType: "jsonp"})}
    , 500);
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc, turn:0.8*acc}, dataType: "jsonp"})}
    , 1000);
  timeoutId = setTimeout(function() {
    $.ajax({url: serverurl, data: {forward: 1*acc, turn:0.8*acc}, dataType: "jsonp"})}
    , 1500); 
  }
})
