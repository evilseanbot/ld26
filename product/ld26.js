function loadEntity(url) {
    $.getJSON(url, function(data) {	
	    var entity = Crafty.e(data["comps"]);
	    for (i in data["atts"]) {50
		    entity[i] = data["atts"][i];
		}
	});
}

function lightAllColors() {
	for (var i = 0; i < Crafty("green").length; i++) {	 			
				Crafty(Crafty("green")[i]).reLight();
	}
	for (var i = 0; i < Crafty("red").length; i++) {	 			
				Crafty(Crafty("red")[i]).reLight();
	}
	for (var i = 0; i < Crafty("blue").length; i++) {	 			
				Crafty(Crafty("blue")[i]).reLight();
	}
	
}

$(document).mousemove(function(e){
      mouseX = e.pageX;
	  mouseY = e.pageY;
}); 

var mouseX = 0;
var mouseY = 0;
var text;
var crittersRescued = 0;
var requiredRescued = 2;

var greenAlwaysOn = false;

Crafty.c("RestartButton", {
    box: null,
	buttonText: null,
    init: function() {
	    this.x = 1100;
		this.y = 100;
		
		this.box = Crafty.e("2D, Canvas, Color").attr({h: 50, w:100, x: this.x, y:this.y}).color("#BB4444");
	    this.buttonText = Crafty.e("2D, Canvas, Text").attr({h: 30, w:200, x: this.x, y: this.y}).text("  RESTART").textColor("#FFFFFF");
		
	}
});

Crafty.c("Critter", {
    xSpeed: 1,
	redLayer: null,
	blueLayer: null,
	darkLayer: null,
	greenLayer: null,
	outline: null,
    init: function() {
	    this.attr({h: 1.5*64, w: 1.5*64, alpha: 0});
		//this.color("#FF00FF");
		
		this.darkLayer = Crafty.e("2D, Canvas, Sprite, pickleDarkLayer").attr({h: 1.5*64, w:1.5*64, alpha: 1});				
		this.redLayer = Crafty.e("2D, Canvas, Sprite, pickleRedLayer, red, Lightable").attr({h: 1.5*64, w:1.5*64, alpha: 0});		
		this.blueLayer = Crafty.e("2D, Canvas, Sprite, pickleBlueLayer, blue, Lightable").attr({h: 1.5*64, w:1.5*64, alpha: 0});		
		this.greenLayer = Crafty.e("2D, Canvas, Sprite, pickleGreenLayer, green, Lightable").attr({h: 1.5*64, w:1.5*64, alpha: 0});				
		this.outline = Crafty.e("2D, Canvas, Sprite, pickleOutline").attr({h: 1.5*64, w:1.5*64, alpha: 1});		
		
	    this.bind("EnterFrame", function() {

		    this.darkLayer.x = this.x;
			this.darkLayer.y = this.y;
		
		    this.redLayer.x = this.x;
			this.redLayer.y = this.y;
			this.redLayer.reLight();
			
		    this.blueLayer.x = this.x;
			this.blueLayer.y = this.y;
			this.blueLayer.reLight();			

		    this.greenLayer.x = this.x;
			this.greenLayer.y = this.y;
			this.greenLayer.reLight();			
			
		    this.outline.x = this.x;
			this.outline.y = this.y;
			
			if (this.redLayer.exists) {
			// This is the flying physics. 
				this.y -= 4;
				var outOfWall = false;
				while (!outOfWall) {
					var inWall = false;
					for (var i = 0; i < this.hit("solid").length; i++) {
						if (this.hit("solid")[i]["obj"].exists) {
							inWall = true;
							this.y += 1;
						}
					}				
					outOfWall = !inWall;			    
				}
			 
			} else {
			// This is the falling physics.

				this.y += 4;
				var outOfWall = false;
				while (!outOfWall) {
					var inWall = false;
					for (var i = 0; i < this.hit("solid").length; i++) {
						if (this.hit("solid")[i]["obj"].exists) {
							inWall = true;
							this.y -= 1;
						}
					}				
					outOfWall = !inWall;			    
				}
			}

			
			this.x += this.xSpeed;
			for (var i = 0; i < this.hit("solid").length; i++) {
				if (this.hit("solid")[i]["obj"].exists) {
					this.x -= (this.xSpeed*2);
					this.xSpeed = -1;
				}
			}							
			
			if (this.hit("hazard")) {
				this.darkLayer.destroy();
				this.outline.destroy();
				this.redLayer.destroy();
				this.blueLayer.destroy();				
				this.greenLayer.destroy();
			    this.destroy();
			}
			
			if (this.hit("exit")) {
			    crittersRescued++;
			    text.destroy();
	            text = Crafty.e("2D, Canvas, Text").attr({h:50, w:100, x: 1100, y: 0 }).text("Rescued: " + crittersRescued + " / " + requiredRescued).textColor("#FFFFFF");
				this.darkLayer.destroy();
				this.outline.destroy();
				this.redLayer.destroy();
				this.blueLayer.destroy();				
				this.greenLayer.destroy();
			    this.destroy();
			}
		})
	}
});

Crafty.c("Lightable", {
    reLight: function() {
	
	    if (this.has("green") && greenAlwaysOn) {
		    this.alpha = 1;
			this.exists = true;
			return;
		}
	
	    var light = 0;		
	    for (var i = 0; i < Crafty("LightSource").length; i++) {
		    var source = Crafty(Crafty("LightSource")[i]);
			if (source.lit) {
			    if ((source.lightColor == "red" && this.has("red")) || (source.lightColor == "blue" && this.has("blue")) || (source.lightColor == "green" && this.has("green"))) {

    				var xCenter = this.x + (this.w/2);
					var yCenter = this.y + (this.h/2);
					
					var xSourceCenter = source.x + (source.w/2);
					var ySourceCenter = source.y + (source.h/2);
				
    				var distance = Math.abs(xCenter - xSourceCenter) + Math.abs(yCenter - ySourceCenter);
	    			light += 1200000.0 / Math.pow(distance, 3);
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

	Crafty.sprite(64, 64, "brickWall.png", {
	    brickWall: [0, 0]
	});

	Crafty.sprite(64, 64, "sky.png", {
	    sky: [0, 0]
	});

	Crafty.sprite(64, 64, "guardRail.png", {
	    guardRail: [0, 0]
	});

	Crafty.sprite(128, 128, "start.png", {
	    start: [0, 0]
	});

	Crafty.sprite(128, 128, "exit.png", {
	    exit: [0, 0]
	});
	
	Crafty.sprite(192, 192, "pickleRedLayer.png", {
	    pickleRedLayer: [0, 0]
	});
	
	Crafty.sprite(192, 192, "pickleBlueLayer.png", {
	    pickleBlueLayer: [0, 0]
	});
	
	Crafty.sprite(192, 192, "pickleGreenLayer.png", {
	    pickleGreenLayer: [0, 0]
	});

	Crafty.sprite(192, 192, "pickleOutline.png", {
	    pickleOutline: [0, 0]
	});
	
	Crafty.sprite(192, 192, "pickleDarkLayer.png", {
	    pickleDarkLayer: [0, 0]
	});

	Crafty.sprite(32, 32, "redLight.png", {
	    redLight: [0, 0]
	});
	
	
	
    Crafty.init(screenWidth, screenHeight);	
    Crafty.canvas.init(); 
	Crafty.background('#000000');	
	//Crafty.background('#FFFFFF');	


	text = Crafty.e("2D, Canvas, Text").attr({h: 50, w:200, x: 1100, y: 0}).text("Rescued: " + crittersRescued + " / " + requiredRescued).textColor("#FFFFFF");
	Crafty.e("2D, Canvas, RestartButton");
//	text.attr({x: -200});

    
	
//    Crafty.e("Level_BrickPen");
//    Crafty.e("Level_StraightWalk");
    Crafty.e("Level_SteelDoors");
	
	lightAllColors();

	
	Crafty.e("2D, Canvas, Color, Collision, LightSource, Cursor, Sprite, redLight").attr({h: 20, w: 20, x: 20, y:20}).color("#FF0000");	
	Crafty.e("2D, Canvas, Mouse, MouseScreen").attr({x: 0, y: 0, h: screenHeight, w:screenWidth});
});