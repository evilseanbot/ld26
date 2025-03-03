/*function $_GET(q,s) { 
        s = s ? s : window.location.search; 
        var re = new RegExp('&'+q+'(?:=([^&]*))?(?=&|$)','i'); 
        return (s=s.replace(/^?/,'&').match(re)) ? (typeof s[1] == 'undefined' ? '' : decodeURIComponent(s[1])) : undefined; 
}*/

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

function playSlides() {
	 Crafty('obj').each(function() { this.destroy(); });
     Crafty.audio.stop();
	 Crafty.audio.play("blue", -1);
	 Crafty.e("2D, Canvas, SlideController, Mouse");
	 
	 if (slide < 6) {
         Crafty.e("2D, Canvas, Sprite, slideImg, title").attr({x: 200, y:10}); 
	 } else {
         Crafty.e("2D, Canvas, Sprite, slideImg, credits").attr({x: 400, y:100}); 	 	 
	 }
}

function startLevel() {
    if (level == 6) {
	    slide = 6;
		playSlides();
		return;
	}

    console.log("Level started");

	crittersRescued = 0;
    requiredRescued = 2;
	
	torchesUsed = 0;
	maxTorches = 4;
	greenAlwaysOn = false;
	blueAlwaysOn = false;
	simpleMode = false;

    //Crafty("*").destroy();
	Crafty('obj').each(function() { this.destroy(); });
	Crafty.audio.stop();
		
	text = Crafty.e("2D, Canvas, Text").attr({h: 50, w:200, x: 1100, y: 0}).text("Rescued: " + crittersRescued + " / " + requiredRescued).textColor("#FFFFFF");
	torchText = Crafty.e("2D, Canvas, Text").attr({h: 25, w:200, x: 1100, y: 0}).text("Torches Used:: " + torchesUsed + " / " + maxTorches).textColor("#FFFFFF");
		
	if (level == 0) {
        Crafty.e("Level_StraightWalk");
		simpleMode = true;
	} else if (level == 1) {
        Crafty.e("Level_BrickPen");				
	} else if (level == 2) {
        Crafty.e("Level_ThornValley");		
	} else if (level == 3) {
        Crafty.e("Level_PickleEasy");			
	} else if (level == 4) {
        Crafty.e("Level_SkeletonHurdles");			
	} else if (level == 5) {
        Crafty.e("Level_PickleFlight");		
    }			
		
	lightAllColors();
	Crafty.e("2D, Canvas, Collision, LightSource, Cursor, Sprite").attr({h: 20, w: 20, x: 20, y:20});	
	Crafty.e("2D, Canvas, Mouse, MouseScreen").attr({x: 0, y: 0, h: screenHeight, w:screenWidth});
	Crafty.e("2D, Canvas, RestartButton, Mouse").attr({h: 50, w:100});	
	
	if (simpleMode) {
	    Crafty("Cursor").mode = -1;
		Crafty("Cursor").modes = 1;
    	Crafty("Cursor").changeMode();
	} else {
    	Crafty("Cursor").changeMode();	
	}
	
}


$(document).mousemove(function(e){
      if (!smallScreen) {
		  mouseX = e.pageX;
		  mouseY = e.pageY;
	  } else {
	      mouseX = e.pageX*2;
		  mouseY = e.pageY*2;
	  }
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
var level = 0;
var slide = 0;
var simpleMode = false;
var smallScreen = false;

var greenAlwaysOn = false;
var blueAlwaysOn = false;

Crafty.c("SlideController", {
    init: function() {
	    this.attr({x: 0, y:0, h: screenHeight, w: screenWidth});
	    this.bind("Click", function() {
		    slide++;
			
			if (slide == 1) {
			    Crafty("slideImg").addComponent("dialog1").attr({x: 400, y:100});
			} else if (slide == 2) {
			    Crafty("slideImg").addComponent("dialog2");
			} else if (slide == 3) {
			    Crafty("slideImg").addComponent("dialog3");
			} else if (slide == 4) {
			    Crafty("slideImg").addComponent("dialog4");
			} else if (slide == 5) {
		        startLevel();
			} 
		});
	}
});

Crafty.c("RestartButton", {
    box: null,
	buttonText: null,
	changed: false,
    init: function() {
	    this.x = 1100;
		this.y = 100;
		
		this.box = Crafty.e("2D, Canvas, Color").attr({h: 50, w:100, x: this.x, y:this.y}).color("#BB4444");
	    this.buttonText = Crafty.e("2D, Canvas, Text").attr({h: 30, w:200, x: this.x, y: this.y}).text("  RESTART").textColor("#FFFFFF");
		
		if (smallScreen) {
		    this.x = this.x/2;
		    this.y = this.y/2;
			this.h = this.h/2;
			this.w = this.w/2;
		}
		
		this.bind("EnterFrame", function() {
		    if (crittersRescued >= requiredRescued && !this.changed) {
    			this.box.color("44BB44");
				this.attr({h: 100, w:200, x: 1000})
				this.box.attr({h: 100, w:200, x:this.x});
    			this.buttonText.destroy();
    	        this.buttonText = Crafty.e("2D, Canvas, Text").attr({h: 30, w:200, x: this.x+75, y: this.y+30}).text("  NEXT LEVEL").textColor("#FFFFFF");
                this.changed = true;				
				
				if (smallScreen) {
					this.x = this.x/2;
					this.y = this.y/2;
					this.h = this.h/2;
					this.w = this.w/2;
				}
				
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
					if (distance < 200) {
					    light += 3000.0 / Math.pow(distance, 2);
					}
					
			    }
			}
		}
		if (light > 0.1) {
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
			            Crafty.audio.play("torchin", 1);					
						var torch = Crafty.e("2D, Canvas, Sprite, redLight, LightSource, redLightSource, Torch").attr({x: cursor.x, y: cursor.y});
						torch.lightColor = "red";
						torch.lightUp();
						torchesUsed++;
					}
				} else if (cursor.mode == 1) {   				    
				    if (cursor.hit("Torch")) {
    				    cursor.hit("Torch")[0]["obj"].destroy();					
					    torchesUsed--;
					    Crafty.audio.play("torchout", 1);					
					}
				} else if (cursor.mode == 2) {
				    if (torchesUsed < maxTorches) {				
			            Crafty.audio.play("torchin", 1);										
						var torch = Crafty.e("2D, Canvas, Sprite, blueLight, LightSource, blueLightSource, Torch").attr({x: cursor.x, y: cursor.y});
						torch.lightColor = "blue";
						torch.lightUp();				
						torchesUsed++;
					}					
				} else if (cursor.mode == 3) {
				    if (torchesUsed < maxTorches) {				
			            Crafty.audio.play("torchin", 1);										
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

	Crafty.sprite(64, 64, "mushroom.png", {
	    mushroom: [0, 0]
	});
	
	Crafty.sprite(64, 64, "grassBlock.png", {
	    grassBlock: [0, 0]
	});

		Crafty.sprite(64, 64, "thornHazard.png", {
	    thornHazard: [0, 0]
	});

	
	Crafty.sprite(64, 64, "guardRail.png", {
	    guardRail: [0, 0]
	});

	Crafty.sprite(128, 128, "enter.png", {
	    start: [0, 0]
	});

	Crafty.sprite(128, 128, "exit.png", {
	    exit: [0, 0]
	});
	
	Crafty.sprite(128, 128, "pickledogRedLayer.png", {
	    pickledogRedLayer: [0, 0]
	});
	
	Crafty.sprite(128, 128, "pickledogBlueLayer.png", {
	    pickledogBlueLayer: [0, 0]
	});
	
	Crafty.sprite(128, 128, "pickledogGreenLayer.png", {
	    pickledogGreenLayer: [0, 0]
	});

	Crafty.sprite(128, 128, "pickledogOutline.png", {
	    pickledogOutline: [0, 0]
	});
	
	Crafty.sprite(128, 128, "pickledogDarkLayer.png", {
	    pickledogDarkLayer: [0, 0]
	});

	Crafty.sprite(128, 128, "pickledogRedLayer2.png", {
	    pickledogRedLayer2: [0, 0]
	});
	
	Crafty.sprite(128, 128, "pickledogBlueLayer2.png", {
	    pickledogBlueLayer2: [0, 0]
	});
	
	Crafty.sprite(128, 128, "pickledogGreenLayer2.png", {
	    pickledogGreenLayer2: [0, 0]
	});

	Crafty.sprite(128, 128, "pickledogOutline2.png", {
	    pickledogOutline2: [0, 0]
	});
	
	Crafty.sprite(128, 128, "pickledogDarkLayer2.png", {
	    pickledogDarkLayer2: [0, 0]
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
	
	Crafty.sprite(58, 93, "headRedLayer2.png", {
	    headRedLayer2: [0, 0]
	});
	
	Crafty.sprite(58, 93, "headBlueLayer2.png", {
	    headBlueLayer2: [0, 0]
	});
	
	Crafty.sprite(58, 93, "headGreenLayer2.png", {
	    headGreenLayer2: [0, 0]
	});

	Crafty.sprite(58, 93, "headOutline2.png", {
	    headOutline2: [0, 0]
	});
	
	Crafty.sprite(58, 93, "headDarkLayer2.png", {
	    headDarkLayer2: [0, 0]
	});

	
	

	Crafty.sprite(77, 188, "skeletonRedLayer.png", {
	    skeletonRedLayer: [0, 0]
	});
	
	Crafty.sprite(77, 188, "skeletonBlueLayer.png", {
	    skeletonBlueLayer: [0, 0]
	});
	
	Crafty.sprite(77, 188, "skeletonGreenLayer.png", {
	    skeletonGreenLayer: [0, 0]
	});

	Crafty.sprite(77, 188, "skeletonOutline.png", {
	    skeletonOutline: [0, 0]
	});
	
	Crafty.sprite(77, 188, "skeletonDarkLayer.png", {
	    skeletonDarkLayer: [0, 0]
	});

	Crafty.sprite(77, 188, "skeletonRedLayer2.png", {
	    skeletonRedLayer2: [0, 0]
	});
	
	Crafty.sprite(77, 188, "skeletonBlueLayer2.png", {
	    skeletonBlueLayer2: [0, 0]
	});
	
	Crafty.sprite(77, 188, "skeletonGreenLayer2.png", {
	    skeletonGreenLayer2: [0, 0]
	});

	Crafty.sprite(77, 188, "skeletonOutline2.png", {
	    skeletonOutline2: [0, 0]
	});
	
	Crafty.sprite(77, 188, "skeletonDarkLayer2.png", {
	    skeletonDarkLayer2: [0, 0]
	});

	Crafty.sprite(189, 114, "subsharkRedLayer.png", {
	    subsharkRedLayer: [0, 0]
	});
	
	Crafty.sprite(189, 114, "subsharkBlueLayer.png", {
	    subsharkBlueLayer: [0, 0]
	});
	
	Crafty.sprite(189, 114, "subsharkGreenLayer.png", {
	    subsharkGreenLayer: [0, 0]
	});

	Crafty.sprite(189, 114, "subsharkOutline.png", {
	    subsharkOutline: [0, 0]
	});
	
	Crafty.sprite(189, 114, "subsharkDarkLayer.png", {
	    subsharkDarkLayer: [0, 0]
	});
	
	Crafty.sprite(64, 100, "hatbirdRedLayer.png", {
	    hatbirdRedLayer: [0, 0]
	});
	
	Crafty.sprite(64, 100, "hatbirdBlueLayer.png", {
	    hatbirdBlueLayer: [0, 0]
	});
	
	Crafty.sprite(64, 100, "hatbirdGreenLayer.png", {
	    hatbirdGreenLayer: [0, 0]
	});

	Crafty.sprite(64, 100, "hatbirdOutline.png", {
	    hatbirdOutline: [0, 0]
	});
	
	Crafty.sprite(64, 100, "hatbirdDarkLayer.png", {
	    hatbirdDarkLayer: [0, 0]
	});	

	Crafty.sprite(64, 100, "hatbirdRedLayer2.png", {
	    hatbirdRedLayer2: [0, 0]
	});
	
	Crafty.sprite(64, 100, "hatbirdBlueLayer2.png", {
	    hatbirdBlueLayer2: [0, 0]
	});
	
	Crafty.sprite(64, 100, "hatbirdGreenLayer2.png", {
	    hatbirdGreenLayer2: [0, 0]
	});

	Crafty.sprite(64, 100, "hatbirdOutline2.png", {
	    hatbirdOutline2: [0, 0]
	});
	
	Crafty.sprite(64, 100, "hatbirdDarkLayer2.png", {
	    hatbirdDarkLayer2: [0, 0]
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

	Crafty.sprite(783, 580, "title.png", {
	    title: [0, 0]
	});

	Crafty.sprite(451, 400, "dialogbox1.png", {
	    dialog1: [0, 0]
	});

	Crafty.sprite(451, 400, "dialogbox2.png", {
	    dialog2: [0, 0]
	});

	Crafty.sprite(451, 400, "dialogbox3.png", {
	    dialog3: [0, 0]
	});

	Crafty.sprite(451, 400, "dialogbox4.png", {
	    dialog4: [0, 0]
	});

	Crafty.sprite(451, 400, "dialogbox5.png", {
	    secondLevelHelp: [0, 0]
	});

	Crafty.sprite(451, 400, "credits.png", {
	    credits: [0, 0]
	});

	Crafty.sprite(451, 400, "firstLevelHelp.png", {
	    firstLevelHelp: [0, 0]
	});

	Crafty.sprite(451, 400, "thirdLevelHelp.png", {
	    thirdLevelHelp: [0, 0]
	});
	
	
	Crafty.audio.add({
      rescue: ["rescue.ogg"],
      torchin: ["torchin.ogg"],
      torchout: ["torchout.ogg"],
      critterdies: ["critterdies.ogg"], 
      red: ["redSlow.ogg"],
	  green: ["greenSlow.ogg"],
	  blue: ["blueSlow.ogg"]
	  
  });  
	
	var size = $.getURLParam("size");
	
	if (size == "small") {
        Crafty.init(screenWidth, screenHeight);
        Crafty.canvas.init(); 				

		$("#cr-stage").css("width", "600px");
		$("#cr-stage").css("height", "300px");				
		$("canvas").css("width", "600px");
		$("canvas").css("height", "300px");	
        smallScreen = true;
		
	} else {
        Crafty.init(screenWidth, screenHeight);
        Crafty.canvas.init(); 				
    }
	
	Crafty.background('#000000');	
	
	playSlides();	
	
	//level = 2;
	//startLevel();
});