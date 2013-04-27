function loadEntity(url) {
    $.getJSON(url, function(data) {	
	    var entity = Crafty.e(data["comps"]);
	    for (i in data["atts"]) {50
		    entity[i] = data["atts"][i];
		}
	});
}

$(document).mousemove(function(e){
      mouseX = e.pageX;
	  mouseY = e.pageY;
}); 

var redOn = true;
var greenOn = true;
var blueOn = true;
var mouseX = 0;
var mouseY = 0;

var redTimer = 1;

/*
Crafty.c("Bullet", {
    xSpeed: 0,
	ySpeed: 0,
    init: function() {
	    this.bind("EnterFrame", function() {
		    this.x+= this.xSpeed;
			this.y+= this.ySpeed;
			
			this.ySpeed += 0.6;
			if (this.hit("Torch")) {
				console.log("Lit torch");
					redOn = true;
					redTimer = 1;				
			}
			
		});				
	}
});
*/

Crafty.c("Lightable", {
    reLight: function() {
	    var light = 0;
	    for (var i = 0; i < Crafty("LightSource").length; i++) {
		    var torch = Crafty(Crafty("LightSource")[i]);
			var distance = Math.abs(this.x - torch.x) + Math.abs(this.y - torch.y);
			light += 800000.0 / Math.pow(distance, 3);
		}
		if (light > 0.25) {
		    this.alpha = light;
	    } else {
		    this.alpha = 0;
		}
	}
});

Crafty.c("LightSource", {
    lightUp: function() {
	    for (var i = 0; i < Crafty("red").length; i++) {	 			
		    Crafty(Crafty("red")[i]).reLight();
		}
	}    
});

Crafty.c("Torch", {
    init: function() {
	    this.attr({h: 30, w: 30});
	    this.color("#FF0000");
	}
}) 

Crafty.c("Cursor", {
    getAngle: function() {
	    var deltaY = this.y - Crafty("Player").y;
		var deltaX = this.x - Crafty("Player").x;
        var angleInDegrees = Math.atan2(deltaY, deltaX) * 180 / Math.PI	
		return angleInDegrees;
	},
    init: function() {
	    this.bind("EnterFrame", function() {
		    this.attr({x: mouseX-10, y: mouseY-10});
		});
		
		this.bind('MouseDown', function(e) {
		    console.log(e);
			if 
            var torch = Crafty.e("2D, Canvas, Color, LightSource, Torch").attr({x: this.x, y: this.y});
			torch.lightUp();
        })
		
		this.bind('MouseMove', function() {
		    this.lightUp();
		})
	}
});

/*
Crafty.c("Player", {
    init: function() {
	    this.bind("EnterFrame", function() {
			redTimer -= 0.01;
			
			if (redTimer <= 0.01) {
				redOn = false;
			}
			
			if (redOn) {
				for (var i = 0; i < Crafty("red").length; i++) {	 			
					Crafty(Crafty("red")[i]).attr({alpha:(1.0 * redTimer)});				
				}
			} else {
				for (var i = 0; i < Crafty("red").length; i++) {	 			
					Crafty(Crafty("red")[i]).attr({alpha:0});				
				}				
			}
		});
	
	    this.bind("KeyDown", function(e) {
		    console.log(e);
			
			if (e.key == 90) {
			   var newBullet = Crafty.e("2D, Canvas, Collision, Bullet, Color")
			       .color("#FFFFFF")
				   .attr({x: this.x, y:this.y, h: 10, w: 10});
				   
			   newBullet.xSpeed = Math.cos(Crafty("Cursor").getAngle()/ 57.2957795)*20;
			   newBullet.ySpeed = Math.sin(Crafty("Cursor").getAngle()/ 57.2957795)*20;
			}
			
			if (e.key == 49) {
				
			    if (redOn) {
					redOn = false;
				} else {
					redOn = true;
					redTimer = 1;
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
*/

$(document).ready(function() {
	$.ajaxSetup({
	    async: false
	});
	
	var screenWidth = 1200;
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

	Crafty.sprite(800, 200, "redSky.png", {
	    redSky: [0, 0]
	});

	Crafty.sprite(800, 200, "blueSky.png", {
	    blueSky: [0, 0]
	});	

	Crafty.sprite(800, 200, "greenSky.png", {
	    greenSky: [0, 0]
	});

	Crafty.sprite(64, 64, "brickWall.png", {
	    brickWall: [0, 0]
	});
	

    Crafty.init(screenWidth, screenHeight);
    Crafty.canvas.init(); 
	Crafty.background('#000000');	

	//Crafty.e("2D, Canvas, Color, redTorch, Torch").attr({h: 50, w: 50, x: 600, y:500}).color("#FF0000");
	
	//Crafty.e("2D, Canvas, Color, Multiway, Player").attr({h: 50, w: 50, x: 50, y:400}).color("#0000FF").multiway({x:10, y:10}, {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180});
	Crafty.e("2D, Canvas, Color, Mouse, LightSource, Cursor").attr({h: 20, w: 20, x: 20, y:20}).color("#FF0000");

	
	Crafty.e("2D, Canvas, Sprite, redFace, red, Lightable").attr({x: 400, y:200, alpha: 0});	
	Crafty.e("2D, Canvas, Sprite, blueFace, blue, Lightable").attr({x: 400, y:200, alpha: 0});		
	Crafty.e("2D, Canvas, Sprite, greenFace, green, Lightable").attr({x: 400, y:200, alpha: 0});

	Crafty.e("2D, Canvas, Sprite, redSky, red, Lightable").attr({x: 0, y:0, alpha: 0});	
	Crafty.e("2D, Canvas, Sprite, blueSky, blue, Lightable").attr({x: 0, y:0, alpha: 0});		
	Crafty.e("2D, Canvas, Sprite, greenSky, green, Lightable").attr({x: 0, y:0, alpha: 0});

	/*
	Crafty.e("2D, Canvas, Sprite, redFace, red, Lightable").attr({x: 450, y:200, alpha: 0});	
	Crafty.e("2D, Canvas, Sprite, redFace, red, Lightable").attr({x: 500, y:200, alpha: 0});	
	Crafty.e("2D, Canvas, Sprite, redFace, red, Lightable").attr({x: 550, y:200, alpha: 0});	
	Crafty.e("2D, Canvas, Sprite, redFace, red, Lightable").attr({x: 600, y:200, alpha: 0});	
	Crafty.e("2D, Canvas, Sprite, redFace, red, Lightable").attr({x: 650, y:200, alpha: 0});	
	Crafty.e("2D, Canvas, Sprite, redFace, red, Lightable").attr({x: 700, y:200, alpha: 0});	
	Crafty.e("2D, Canvas, Sprite, redFace, red, Lightable").attr({x: 750, y:200, alpha: 0});	
	Crafty.e("2D, Canvas, Sprite, redFace, red, Lightable").attr({x: 800, y:200, alpha: 0});	
    */
	
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 0, y:3*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 1*64, y:3*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 2*64, y:3*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 3*64, y:3*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 4*64, y:3*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 5*64, y:3*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 6*64, y:3*64, alpha: 0});

	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 7*64, y:3*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 7*64, y:2*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 7*64, y:1*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 7*64, y:0*64, alpha: 0});

	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 3*64, y:6*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 4*64, y:6*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 5*64, y:6*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 6*64, y:6*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 7*64, y:6*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 8*64, y:6*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 9*64, y:6*64, alpha: 0});

	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 10*64, y:6*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 10*64, y:5*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 10*64, y:4*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 10*64, y:3*64, alpha: 0});
	
	
	
	Crafty.e("2D, Canvas, Sprite, redBlood, red, Lightable").attr({x: 400, y:200, alpha: 0});
});