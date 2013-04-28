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

var mouseX = 0;
var mouseY = 0;

Crafty.c("Critter", {
    xSpeed: 1,
    init: function() {
	    this.attr({h: 126, w: 62});
		this.color("#FF00FF");
	    this.bind("EnterFrame", function() {
		    this.x += this.xSpeed;
			if (this.hit("brickWall") && this.hit("brickWall")[0]["obj"].exists) {
			    this.x -= (this.xSpeed*2);
				this.xSpeed = -1;
			}
			
			//var falling = true;
			
			this.y += 4;
			var outOfWall = false;
			while (!outOfWall) {
			    var inWall = false;
				for (var i = 0; i < this.hit("brickWall").length; i++) {
				    if (this.hit("brickWall")[i]["obj"].exists) {
					    inWall = true;
						this.y -= 1;
					}
				}				
				outOfWall = !inWall;			    
			}
			
			/*
			for (var i = 0; i < this.hit("brickWall").length; i++) {
			    while 
			}
			
			this.attr({y: this.y+4});
		    if (this.hit("brickWall") {
			    var inWall = false;
				for (var i = 0; i < this.hit("brickWall").length; i++) {
				    if (this.hit("brickWall")[i]["obj"].exists) {
					    inWall = true;
					}
				}
				if (inWall = true) {
			    this.y -=1;
				
				}				
			}
			*/
		})
	}
});

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
			this.exists = true;
	    } else {
		    this.alpha = 0;
			this.exists = false;
		}
	}
});

Crafty.c("LightSource", {
    lit: true,
	lightColor: "red",
	exists: false,
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

	Crafty.e("2D, Canvas, Color, Collision, LightSource, Cursor").attr({h: 20, w: 20, x: 20, y:20}).color("#FF0000");
	
    Crafty.e("Level1");
	
	Crafty.e("2D, Canvas, Color, Collision, Critter").attr({y: -800, x: 0});
	Crafty.e("2D, Canvas, Color, Collision, Critter").attr({y: -1600, x: -200});
	Crafty.e("2D, Canvas, Color, Collision, Critter").attr({y: -2400, x: -400});
	Crafty.e("2D, Canvas, Color, Collision, Critter").attr({y: -3200, x: -600});
	Crafty.e("2D, Canvas, Color, Collision, Critter").attr({y: -4000, x:-800});
	
	
	Crafty.e("2D, Canvas, Mouse, MouseScreen").attr({x: 0, y: 0, h: screenHeight, w:screenWidth});
});