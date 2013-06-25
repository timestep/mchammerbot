  //GETS Methods
$( document ).ready(function() {

	$('#draggable').draggable({
        drop: function( event, ui ) {

            // position of the draggable minus position of the droppable
            // relative to the document
            $newPosX = ui.offset.left - $(this).offset().left;
            $newPosY = ui.offset.top - $(this).offset().top;
            destination[0] = $newPosX;
            destination[1] = $newPosY;
            movement();
        };
    });

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
	
	var movement = function(){
		if (destination[0]!=0||destination[1]!=0){
			if x>0{
				if y>0{
					moveBot({forward:1});
					setTimeout({
						stopBot();
						moveBot({strafe:1});
						setTimeout(stopBot,destination[1]);
					}
					,destination[x]);
				};
				else{
					moveBot({forward:1});
					setTimeout({
						stopBot();
						moveBot({strafe:-1});
						setTimeout(stopBot,destination[1]);
					}
					,destination[0]);
				};
			};
			else {
				if y>0{
					moveBot({forward:-1});
					setTimeout({
						stopBot();
						moveBot({strafe:1});
						setTimeout(stopBot,destination[1]);
					}
					,destination[x]);
				};
				else{
					moveBot({forward:-1});
					setTimeout({
						stopBot();
						moveBot({strafe:-1});
						setTimeout(stopBot,destination[1]);
					}
					,destination[0]);
				}; 
			};
		};
		destination = 0;
	};


	
});

