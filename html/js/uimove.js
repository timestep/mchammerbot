<<<<<<< HEAD
//$('#draggable').draggable({
//    drop: function( event, ui ) {
//
//         position of the draggable minus position of the droppable
//         relative to the document
//        var $newPosX = ui.offset.left - $(this).offset().left;
//        var $newPosY = ui.offset.top - $(this).offset().top;
//
//    }
//});
=======
  //GETS Methods
$( document ).ready(function() {
	var getMotionOfBot = function(){
		$.ajax({url:"http://127.0.0.1:8071/motors", dataType:"jsonp",success: function(data){
			aMotorValue = data.a 
		    sMotorValue = data.s
		    dMotorValue = data.d
		    fMotorValue = data.f
		}});
	};
	getMotionOfBot();


	var moveBot = function(motion){
		$.ajax({url: "http://127.0.0.1:8071/motion-control/update", data: motion, dataType: "jsonp"});
	}
	var stopBot = function(){
		$.ajax({url: "http://127.0.0.1:8071/motion-control/update", dataType: "jsonp"});
	}
	var destination = [x,y];

	var movement = function(motion){
		if (destination[0]!=0||destination[1]!=0){
			if x>0{
				if y>0{
					moveBot({forward:1});
					setTimeout({
						stopBot();
						moveBot({strafe:1});
						setTimeout(stopBot,destination[y]);
					}
					,destination[x]);
				};
				else{
					moveBot({forward:1});
					setTimeout({
						stopBot();
						moveBot({strafe:-1});
						setTimeout(stopBot,destination[y]);
					}
					,destination[x]);
				};
			};
			else {
				if y>0{
					moveBot({forward:-1});
					setTimeout({
						stopBot();
						moveBot({strafe:1});
						setTimeout(stopBot,destination[y]);
					}
					,destination[x]);
				};
				else{
					moveBot({forward:-1});
					setTimeout({
						stopBot();
						moveBot({strafe:-1});
						setTimeout(stopBot,destination[y]);
					}
					,destination[x]);
				}; 
			};
		};
	};
});

>>>>>>> 7227afb584f6e259a28c90a5ff6d6c2cdea9cc80
