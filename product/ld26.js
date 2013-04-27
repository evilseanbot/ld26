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
		    var source = Crafty(Crafty("LightSource")[i]);
			if (source.lit) {
			    if ((source.lightColor == "red" && this.has("red")) || (source.lightColor == "blue" && this.has("blue"))) {
    				var distance = Math.abs(this.x - source.x) + Math.abs(this.y - source.y);
	    			light += 800000.0 / Math.pow(distance, 3);
			    }
			}
		}
		if (light > 0.25) {
		    this.alpha = light;
	    } else {
		    this.alpha = 0;
		}
	}
});

Crafty.c("LightSource", {
    lit: true,
	lightColor: "red",
    lightUp: function() {
	    for (var i = 0; i < Crafty(this.lightColor).length; i++) {	 			
		    Crafty(Crafty(this.lightColor)[i]).reLight();
		}
	}    
});

Crafty.c("Torch", {
    init: function() {
	    this.attr({h: 30, w: 30});
	}
}) 

Crafty.c("MouseScreen", {
    init: function() {
	    this.bind('MouseDown', function(e) {
		    var cursor = Crafty("Cursor");
		
			if(e.mouseButton == Crafty.mouseButtons.LEFT) {
			    if (cursor.mode == 0) {
					var torch = Crafty.e("2D, Canvas, Color, LightSource, Torch").attr({x: cursor.x, y: cursor.y});
					torch.color("#FF4444");
					torch.lightColor = "red";
					torch.lightUp();
				} else if (cursor.mode == 1) {   				    
				    console.log(cursor.hit("Torch")[0]["obj"][0]);
				    cursor.hit("Torch")[0]["obj"].destroy();
				} else if (cursor.mode == 2) {
					var torch = Crafty.e("2D, Canvas, Color, LightSource, Torch").attr({x: cursor.x, y: cursor.y});
					torch.color("#4444FF");
					torch.lightColor = "blue";
					torch.lightUp();				
				}
				
			} else if (e.mouseButton == Crafty.mouseButtons.RIGHT) {
			    cursor.changeMode();
			}
        });
		
		this.bind('MouseMove', function() {
		    var cursor = Crafty("Cursor");		
		    cursor.lightUp();
		});
	}
});

Crafty.c("Cursor", {
    mode: 0,
	modes: 3,
    getAngle: function() {
	    var deltaY = this.y - Crafty("Player").y;
		var deltaX = this.x - Crafty("Player").x;
        var angleInDegrees = Math.atan2(deltaY, deltaX) * 180 / Math.PI	
		return angleInDegrees;
	},
	changeMode: function() {
	    this.mode++;
		if (this.mode >= this.modes) {
		    this.mode = 0;
		}
		
		if (this.mode == 0) {
		    this.color("#FF0000");
			this.lit = true;
			this.lightColor = "red";
		} else if (this.mode == 1) {
		    this.color("#FFFFFF");
			this.lit = false;
		} else if (this.mode ==2) {
		    this.color("#0000FF");
			this.lit = true;
			this.lightColor = "blue";
		}
	},
    init: function() {
	    this.bind("EnterFrame", function() {
		    this.attr({x: mouseX-10, y: mouseY-10});
		});
	}
});

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

	Crafty.sprite(64, 64, "sky.png", {
	    sky: [0, 0]
	});
	

    Crafty.init(screenWidth, screenHeight);
    Crafty.canvas.init(); 
	Crafty.background('#000000');	

	//Crafty.e("2D, Canvas, Color, redTorch, Torch").attr({h: 50, w: 50, x: 600, y:500}).color("#FF0000");
	
	//Crafty.e("2D, Canvas, Color, Multiway, Player").attr({h: 50, w: 50, x: 50, y:400}).color("#0000FF").multiway({x:10, y:10}, {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180});
	Crafty.e("2D, Canvas, Color, Collision, LightSource, Cursor").attr({h: 20, w: 20, x: 20, y:20}).color("#FF0000");

	
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

	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 6*64, y:8*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 7*64, y:8*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 8*64, y:8*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 9*64, y:8*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 10*64, y:8*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 11*64, y:8*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 12*64, y:8*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 13*64, y:8*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 14*64, y:8*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 15*64, y:8*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 16*64, y:8*64, alpha: 0});
	Crafty.e("2D, Canvas, Sprite, brickWall, red, Lightable").attr({x: 17*64, y:8*64, alpha: 0});	
	
	Crafty.e("2D, Canvas, Sprite, redBlood, red, Lightable").attr({x: 400, y:200, alpha: 0});
	
	for (var mapX = 0; mapX < 18; mapX++) {
	    for (var mapY = 0; mapY < 2; mapY++) {
		    Crafty.e("2D, Canvas, Sprite, sky, blue, Lightable").attr({x: mapX*64, y: mapY*64, alpha: 0});
		}
	}
	
	
	Crafty.e("2D, Canvas, Mouse, MouseScreen").attr({x: 0, y: 0, h: screenHeight, w:screenWidth});
});