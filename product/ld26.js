function loadEntity(url) {
    $.getJSON(url, function(data) {	
	    var entity = Crafty.e(data["comps"]);
	    for (i in data["atts"]) {50
		    entity[i] = data["atts"][i];
		}
	});
}

var redOn = true;
var greenOn = true;
var blueOn = true;

Crafty.c("Player", {
    init: function() {
	    this.bind("KeyDown", function(e) {
		    console.log(e);
			
			if (e.key == 49) {
				
			    if (redOn) {
				    for (var i = 0; i < Crafty("red").length; i++) {
					    Crafty(Crafty("red")[i]).attr({alpha:1});
					}
					redOn = false;
				} else {
				    for (var i = 0; i < Crafty("red").length; i++) {
					    Crafty(Crafty("red")[i]).attr({alpha:0});
					}
					redOn = true;
				}
			}

			if (e.key == 50) {
				console.log("Switching green");
			    if (greenOn) {
				    for (var i = 0; i < Crafty("green").length; i++) {
					    Crafty(Crafty("green")[i]).attr({alpha:0.4});
					}
					greenOn = false;
				} else {
				    for (var i = 0; i < Crafty("green").length; i++) {
					    Crafty(Crafty("green")[i]).attr({alpha:0});
					}
					greenOn = true;
				}
			}

			if (e.key == 51) {
				console.log("Switching green");
			    if (blueOn) {
				    for (var i = 0; i < Crafty("blue").length; i++) {
					    Crafty(Crafty("blue")[i]).attr({alpha:0.6});
					}
					blueOn = false;
				} else {
				    for (var i = 0; i < Crafty("blue").length; i++) {
					    Crafty(Crafty("blue")[i]).attr({alpha:0});
					}
					blueOn = true;
				}
			}
			
			
		})
	}
});

$(document).ready(function() {
	$.ajaxSetup({
	    async: false
	});
	
	var screenWidth = 800;
	var screenHeight = 600;
	
	Crafty.sprite(100, 100, "greenFace.png", {
	    greenFace: [0, 0]
	});
	
	Crafty.sprite(100, 100, "redFace.png", {
	    redFace: [0, 0]
	});

	Crafty.sprite(100, 100, "blueFace.png", {
	    blueFace: [0, 0]
	});
	

	Crafty.sprite(100, 100, "redBlood.png", {
	    redBlood: [0, 0]
	});
	

    Crafty.init(screenWidth, screenHeight);
    Crafty.canvas.init(); 
	Crafty.background('#000000');	
	
	Crafty.e("2D, Canvas, Color, Multiway, Player").attr({h: 50, w: 50, x: 50, y:400}).color("#0000FF").multiway({x:10, y:10}, {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180});
	
	Crafty.e("2D, Canvas, Sprite, redFace, red").attr({x: 400, y:200});	
	Crafty.e("2D, Canvas, Sprite, blueFace, blue").attr({x: 400, y:200});		
	Crafty.e("2D, Canvas, Sprite, greenFace, green").attr({x: 400, y:200});
	Crafty.e("2D, Canvas, Sprite, redBlood, red").attr({x: 400, y:200});
});