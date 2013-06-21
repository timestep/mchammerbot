
////BUTTON INTERACTION
$('.btn-large').data('url', "http://127.0.0.1:8071/motion-control/update");
$('#forward').data('movement', {forward: 1});
$('#backward').data('movement', {forward: -1});
$('#turn_right').data('movement', {turn: 1});
$('#turn_left').data('movement', {turn: -1});
$('#strafe_right').data('movement', {strafe: 1});
$('#strafe_left').data('movement', {strafe: -1});
$('#stop').data('movement', {forward: 0})

url_robut = "http://127.0.0.1:8071/motion-control/update";
$('.btn-large').click(function() {
  var motionControl = $(this).data();
  $.ajax({url: motionControl.url, data: motionControl.movement, dataType: "jsonp"});
});


///KEYBOARDINTERACTION

keycombos = {
  "w":{forward:1},
  "s":{forward:-1},
  "a":{turn:1},
  "d":{turn:-1},
  "q":{strafe:1},
  "e":{strafe:-1}
}
var my_combos = [];
var my_scope = this;
  
for (var i in keycombos){
  var tempVal = {
    "keys"          : i,
    "is_exclusive"  : true,
    "on_keydown"    : function(e) {
        console.log(e.which);
        var key = String.fromCharCode(e.which).toLowerCase();
        $.ajax({url: "http://127.0.0.1:8071/motion-control/update", data:keycombos[key], dataType: "jsonp"});
    },
    "on_keyup"      : function(e) {
        console.log("Stopping");
        $.ajax({url: "http://127.0.0.1:8071/motion-control/update", dataType: "jsonp"});
    },
    "this"          : my_scope
  };
  
  my_combos.push(tempVal);  
}

var tempVal = {
    "keys"          : "w a",
    "is_exclusive"  : true,
    "on_keydown"    : function(e) {
        console.log('w and a');
        // var key = String.fromCharCode(e.which).toLowerCase();
        $.ajax({url: "http://127.0.0.1:8071/motion-control/update", data:{strafe:1}, dataType: "jsonp"});
    },
    "on_keyup"      : function(e) {
        console.log("Stopping");
        $.ajax({url: "http://127.0.0.1:8071/motion-control/update", dataType: "jsonp"});
    },
    "this"          : my_scope
  };

my_combos.push(tempVal);
keypress.register_many(my_combos);


var x = $.ajax({url:"http://127.0.0.1:8071/motors", dataType:"jsonp"});

//GETS Methods
// var getMotionOfBot = function(){
//   x = $.ajax({url:"http://127.0.0.1:8071/motors", dataType:"jsonp"});
//   aMotorValue = x.responseJSON.a 
//   sMotorValue = x.responseJSON.s
//   dMotorValue = x.responseJSON.d
//   fMotorValue = x.responseJSON.f
// }

// getMotionOfBot();

// var y = $.parseJSON(x);



// keycombos = {
//   "w": function() {$.ajax({url:"http://127.0.0.1:8071/motion-control/update", data:{forward:1}, dataType: "jsonp"}) },
//   "s": function() {$.ajax({url:"http://127.0.0.1:8071/motion-control/update", data:{forward:-1}, dataType: "jsonp"}) },
//   "a": function() {$.ajax({url:"http://127.0.0.1:8071/motion-control/update", data:{turn:1}, dataType: "jsonp"}) },
//   "d": function() {$.ajax({url:"http://127.0.0.1:8071/motion-control/update", data:{turn:-1}, dataType: "jsonp"}) },
//   "q": function() {$.ajax({url:"http://127.0.0.1:8071/motion-control/update", data:{strafe:1}, dataType: "jsonp"}) },
//   "e": function() {$.ajax({url:"http://127.0.0.1:8071/motion-control/update", data:{strafe:-1}, dataType: "jsonp"}) }
// };

// fwd = 0
// trn = 0
// stf = 0

// my_scope = this;
// my_combos = [
//     {
//         "keys"          : "w",
//         "is_exclusive"  : true,
//         "on_keydown"    : function() {
//             $.ajax({url:"http://127.0.0.1:8071/motion-control/update", data: {forward: 1}, dataType: "jsonp"});
//         },
//         "on_keyup"      : function(e) {
//             console.log("And now you've released one of the keys.");
//         },
//         "this"          : my_scope
//     },
//     {
//         "keys"          : "s",
//         "is_exclusive"  : true,
//         "on_keyup"      : function(event) {
//             event.preventDefault();
//             console.log("We've prevented the s key from doing anything!");
//         },
//         "this"          : my_scope
//     }
// ];
// keypress.register_many(my_combos);
   
// $('#forward').click(function() {
//   console.log("Forward.");
//   // test = $.get('http://127.0.0.1:8071/motion-control/update',{forward: 1},'jsonp');       
//   $.ajax({url:"http://127.0.0.1:8071/motion-control/update", data: {forward: 1}, dataType: "jsonp"});
// });

// $('#backward').click(function() {
//   console.log("Backwards.");
//   // test = $.get('http://127.0.0.1:8071/motion-control/update',{forward: 1},'jsonp');       
//   $.ajax({url:"http://127.0.0.1:8071/motion-control/update", data: {forward: -1}, dataType: "jsonp"});
// });

// $('#turn_right').click(function() {
//   console.log("Turn Right.");
//   // test = $.get('http://127.0.0.1:8071/motion-control/update',{forward: 1},'jsonp');       
//   $.ajax({url:"http://127.0.0.1:8071/motion-control/update", data: {turn: 1}, dataType: "jsonp"});
// });

// $('#turn_left').click(function() {
//   console.log("Turn Left.");
//   // test = $.get('http://127.0.0.1:8071/motion-control/update',{forward: 1},'jsonp');       
//   $.ajax({url:"http://127.0.0.1:8071/motion-control/update", data: {turn: -1}, dataType: "jsonp"});
// });

// $('#strafe_right').click(function() {
//   console.log("Strafe Right.");
//   // test = $.get('http://127.0.0.1:8071/motion-control/update',{forward: 1},'jsonp');       
//   $.ajax({url:"http://127.0.0.1:8071/motion-control/update", data: {strafe: 1}, dataType: "jsonp"});
// });

// $('#strafe_left').click(function() {
//   console.log("Strafe Left.");
//   // test = $.get('http://127.0.0.1:8071/motion-control/update',{forward: 1},'jsonp');       
//   $.ajax({url:"http://127.0.0.1:8071/motion-control/update", data: {strafe: -1}, dataType: "jsonp"});
// });

// $('#stop').click(function() {
//   console.log("Stop");
//   // test = $.get('http://127.0.0.1:8071/motion-control/update',{forward: 1},'jsonp');       
//   $.ajax({url:"http://127.0.0.1:8071/motion-control/update", dataType: "jsonp"});
//   // $.ajax({url:"http://127.0.0.1:8071/motion-control/update", data: {strafe: 0}, dataType: "jsonp"});
// });

//       for (i in keycombos) {
//         tempVal = {
//           "keys"          : i,
//           "is_exclusive"  : true,
//           "val":keycombos[i],
//           "on_keydown"    : keycombos[i],
//           "on_keyup"      : function() {
//             $.ajax({url:"http://127.0.0.1:8071/motion-control/update", dataType: "jsonp"});
//           },
//           "this"          : my_scope
//           };
//           my_combos.push(tempVal);  
//         }
//       keypress.register_many(my_combos);

