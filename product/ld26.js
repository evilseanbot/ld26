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

function startLevel() {
	crittersRescued = 0;
    requiredRescued = 2;
	
	torchesUsed = 0;
	maxTorches = 3;
	greenAlwaysOn = false;
	blueAlwaysOn = false;

    //Crafty("*").destroy();
	Crafty('obj').each(function() { this.destroy(); });
	text = Crafty.e("2D, Canvas, Text").attr({h: 50, w:200, x: 1100, y: 0}).text("Rescued: " + crittersRescued + " / " + requiredRescued).textColor("#FFFFFF");
	torchText = Crafty.e("2D, Canvas, Text").attr({h: 25, w:200, x: 1100, y: 0}).text("Torches Used:: " + torchesUsed + " / " + maxTorches).textColor("#FFFFFF");
		
	if (level == 0) {
        Crafty.e("Level_StraightWalk");
	} else if (level == 1) {
        Crafty.e("Level_BrickPen");	
	} else if (level == 2) {
        Crafty.e("Level_ThornValley");		
	} else if (level == 3) {
        Crafty.e("Level_SkeletonHurtles");			
	}
		
	lightAllColors();
	Crafty.e("2D, Canvas, Collision, LightSource, Cursor, Sprite").attr({h: 20, w: 20, x: 20, y:20});	
	Crafty.e("2D, Canvas, Mouse, MouseScreen").attr({x: 0, y: 0, h: screenHeight, w:screenWidth});
	Crafty.e("2D, Canvas, RestartButton, Mouse").attr({h: 50, w:100});	
	Crafty("Cursor").changeMode();
}

$(document).mousemove(function(e){
      mouseX = e.pageX;
	  mouseY = e.pageY;
}); 

var mouseX = 0;
var mouseY = 0;
var text;
var torchText;
var torchesUsed = 0;
var maxTorches = 4;
var crittersRescued = 0;
var requiredRescued = 2;
var screenWidth = 1200;
var screenHeight = 600;
var level = 2;

var greenAlwaysOn = false;
var blueAlwaysOn = false;

Crafty.c("RestartButton", {
    box: null,
	buttonText: null,
    init: function() {
	    this.x = 1100;
		this.y = 100;
		
		this.box = Crafty.e("2D, Canvas, Color").attr({h: 50, w:100, x: this.x, y:this.y}).color("#BB4444");
	    this.buttonText = Crafty.e("2D, Canvas, Text").attr({h: 30, w:200, x: this.x, y: this.y}).text("  RESTART").textColor("#FFFFFF");
		
		this.bind("EnterFrame", function() {
		    if (crittersRescued >= requiredRescued) {
			this.box.color("44BB44");
			this.buttonText.destroy();
	        this.buttonText = Crafty.e("2D, Canvas, Text").attr({h: 30, w:200, x: this.x, y: this.y}).text("  NEXT LEVEL").textColor("#FFFFFF");			
			}
			
         	torchText.destroy();
	        torchText = Crafty.e("2D, Canvas, Text").attr({h: 25, w:200, x: 1100, y: 0}).text("Torches Used:: " + torchesUsed + " / " + maxTorches).textColor("#FFFFFF");

			
		});		
		
		this.bind("Click", function() {
		    if (crittersRescued >= requiredRescued) {
			    level++;
    		    startLevel();
			} else {
			    startLevel();
			}
		});
	}
});

Crafty.c("Lightable", {
    reLight: function() {
	
	    if ((this.has("green") && greenAlwaysOn) || (this.has("blue") && blueAlwaysOn)) {
		    this.alpha = 1;
			this.exists = true;
			return;
		}
	
	    var light = 0;		
		var lightSources;
		if (this.has("green")) {
		    lightSources = Crafty("greenLightSource");
		} else if (this.has("red")) {
		    lightSources = Crafty("redLightSource");
		} else if (this.has("blue")) {
		    lightSources = Crafty("blueLightSource");
		}
		
		
	    for (var i = 0; i < lightSources.length; i++) {
		    var source = Crafty(lightSources[i]);
			if (source.lit) {
			    if ((source.lightColor == "red" && this.has("red")) || (source.lightColor == "blue" && this.has("blue")) || (source.lightColor == "green" && this.has("green"))) {
                    
    				var xCenter = this.x + (this.w/2);
					var yCenter = this.y + (this.h/2);
					
					var xSourceCenter = source.x + (source.w/2);
					var ySourceCenter = source.y + (source.h/2);
				
    				var distance = Math.abs(xCenter - xSourceCenter) + Math.abs(yCenter - ySourceCenter);
	    			//light += 1200000.0 / Math.pow(distance, 3);
					light += 6000.0 / Math.pow(distance, 2);
					
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
				    if (torchesUsed < maxTorches) {
						var torch = Crafty.e("2D, Canvas, Sprite, redLight, LightSource, redLightSource, Torch").attr({x: cursor.x, y: cursor.y});
						torch.lightColor = "red";
						torch.lightUp();
						torchesUsed++;
					}
				} else if (cursor.mode == 1) {   				    
				    if (cursor.hit("Torch")) {
    				    cursor.hit("Torch")[0]["obj"].destroy();					
					    torchesUsed--;
					}
				} else if (cursor.mode == 2) {
				    if (torchesUsed < maxTorches) {				
						var torch = Crafty.e("2D, Canvas, Sprite, blueLight, LightSource, blueLightSource, Torch").attr({x: cursor.x, y: cursor.y});
						torch.lightColor = "blue";
						torch.lightUp();				
						torchesUsed++;
					}					
				} else if (cursor.mode == 3) {
				    if (torchesUsed < maxTorches) {				
						var torch = Crafty.e("2D, Canvas, Sprite, greenLight, LightSource, greenLightSource, Torch").attr({x: cursor.x, y: cursor.y});
						torch.lightColor = "green";
						torch.lightUp();				
						torchesUsed++;
					}					
				}
				
				
			} else if (e.mouseButton == Crafty.mouseButtons.RIGHT) {
			    cursor.changeMode();
			}
			
			lightAllColors();			
        });
		
		this.bind('MouseMove', function() {
		    var cursor = Crafty("Cursor");		
		    cursor.lightUp();
		});
	}
});

Crafty.c("Cursor", {
    mode: 0,
	modes: 4,
	setLightSource: function(color) {
	    this.removeComponent("redLightSource");
		this.removeComponent("blueLightSource");
		this.removeComponent("greenLightSource");
		
		this.addComponent(color);
	},
	changeMode: function() {
	    this.mode++;
		if (this.mode >= this.modes) {
		    this.mode = 0;
		}
		
		if (this.mode == 0) {
			this.addComponent("redLight");
			this.lit = true;
			this.lightColor = "red";
			this.setLightSource("redLightSource");
		} else if (this.mode == 1) {
			this.addComponent("remove");
			this.lit = false;
		} else if (this.mode == 2) {
			this.addComponent("blueLight");
			this.lit = true;
			this.lightColor = "blue";
			this.setLightSource("blueLightSource");			
		} else if (this.mode == 3) {
			this.addComponent("greenLight");
			this.lit = true;
			this.lightColor = "green";
			this.setLightSource("greenLightSource");			
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
	
	Crafty.sprite(58, 93, "headRedLayer.png", {
	    headRedLayer: [0, 0]
	});
	
	Crafty.sprite(58, 93, "headBlueLayer.png", {
	    headBlueLayer: [0, 0]
	});
	
	Crafty.sprite(58, 93, "headGreenLayer.png", {
	    headGreenLayer: [0, 0]
	});

	Crafty.sprite(58, 93, "headOutline.png", {
	    headOutline: [0, 0]
	});
	
	Crafty.sprite(58, 93, "headDarkLayer.png", {
	    headDarkLayer: [0, 0]
	});

	Crafty.sprite(76, 189, "skeletonRedLayer.png", {
	    skeletonRedLayer: [0, 0]
	});
	
	Crafty.sprite(76, 189, "skeletonBlueLayer.png", {
	    skeletonBlueLayer: [0, 0]
	});
	
	Crafty.sprite(76, 189, "skeletonGreenLayer.png", {
	    skeletonGreenLayer: [0, 0]
	});

	Crafty.sprite(76, 189, "skeletonOutline.png", {
	    skeletonOutline: [0, 0]
	});
	
	Crafty.sprite(76, 189, "skeletonDarkLayer.png", {
	    skeletonDarkLayer: [0, 0]
	});
	

	Crafty.sprite(32, 32, "redLight.png", {
	    redLight: [0, 0]
	});
	
	Crafty.sprite(32, 32, "blueLight.png", {
	    blueLight: [0, 0]
	});

	Crafty.sprite(32, 32, "greenLight.png", {
	    greenLight: [0, 0]
	});
	
	Crafty.sprite(32, 32, "remove.png", {
	    remove: [0, 0]
	});
	
    Crafty.init(screenWidth, screenHeight);	
    Crafty.canvas.init(); 
	Crafty.background('#000000');	
	startLevel();
});