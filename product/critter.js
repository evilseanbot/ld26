Crafty.c("Subshark", {
    init: function() {
	    var height = 114;
		var width = 189;
	    this.attr({h: height, w: width, alpha: 0});
		this.darkLayer = Crafty.e("2D, Canvas, Sprite, subsharkDarkLayer").attr({h: height, w:width, alpha: 1});				
		this.greenLayer = Crafty.e("2D, Canvas, Sprite, subsharkGreenLayer, green, Lightable").attr({h: height, w:width, alpha: 0});						
		this.redLayer = Crafty.e("2D, Canvas, Sprite, subsharkRedLayer, red, Lightable").attr({h: height, w:width, alpha: 0});		
		this.blueLayer = Crafty.e("2D, Canvas, Sprite, subsharkBlueLayer, blue, Lightable").attr({h: height, w:width, alpha: 0});		
		this.outline = Crafty.e("2D, Canvas, Sprite, subsharkOutline").attr({h: height, w: width, alpha: 1});				
	}, 
	walk: function() {
        this.x -= 3;
        if (this.x < - this.w) {
            this.x = screenWidth + this.w;
        }		
	},
	animate: function() {
	    
	}
});

Crafty.c("Skeleton", {
    tall: true,
	attachLayers: function() {
	    if (this.tall) {
			this.darkLayer.x = this.x;
			this.darkLayer.y = this.y;
			this.redLayer.x = this.x;
			this.redLayer.y = this.y;
			this.blueLayer.x = this.x;
			this.blueLayer.y = this.y;
			this.greenLayer.x = this.x;
			this.greenLayer.y = this.y;
			this.outline.x = this.x;
			this.outline.y = this.y;
		} else {
			this.darkLayer.x = this.x;
			this.darkLayer.y = this.y-125;
			this.redLayer.x = this.x;
			this.redLayer.y = this.y-125;
			this.blueLayer.x = this.x;
			this.blueLayer.y = this.y-125;
			this.greenLayer.x = this.x;
			this.greenLayer.y = this.y-125;
			this.outline.x = this.x;
			this.outline.y = this.y-125;		
		}
	},
	
    init: function() {
	    var height = 188;
		var width = 77;
	    this.attr({h: height, w: width, alpha: 0});
		this.darkLayer = Crafty.e("2D, Canvas, Sprite, skeletonDarkLayer").attr({h: height, w:width, alpha: 1});				
		this.redLayer = Crafty.e("2D, Canvas, Sprite, skeletonRedLayer, red, Lightable").attr({h: height, w:width, alpha: 0});		
		this.blueLayer = Crafty.e("2D, Canvas, Sprite, skeletonBlueLayer, blue, Lightable").attr({h: height, w:width, alpha: 0});		
		this.greenLayer = Crafty.e("2D, Canvas, Sprite, skeletonGreenLayer, green, Lightable").attr({h: height, w:width, alpha: 0});				
		this.outline = Crafty.e("2D, Canvas, Sprite, skeletonOutline").attr({h: height, w: width, alpha: 1});				
		
		this.bind("EnterFrame", function() {
		    if ( (this.redLayer.exists) && (!this.tall) ) {
			    this.tall = true;
				this.attr({h: 189, y: this.y-125});
			} else if ( (!this.redLayer.exists) && (this.tall) ) {
			    this.tall = false;
				this.attr({h: 62, y: this.y+125});
			}
		}); 
	},
	animate: function() {
        if (this.frame == 0) {
		    this.darkLayer.addComponent("skeletonDarkLayer");
		    this.redLayer.addComponent("skeletonRedLayer");
		    this.greenLayer.addComponent("skeletonGreenLayer");
		    this.blueLayer.addComponent("skeletonBlueLayer");
		    this.outline.addComponent("skeletonOutline");
        } else if (this.frame == 1) {
		    this.darkLayer.addComponent("skeletonDarkLayer2");
		    this.redLayer.addComponent("skeletonRedLayer2");
		    this.greenLayer.addComponent("skeletonGreenLayer2");
		    this.blueLayer.addComponent("skeletonBlueLayer2");
		    this.outline.addComponent("skeletonOutline2"); 
        }		
	}	
});

Crafty.c("MiniHead", {
    init: function() {
	    var height = 93/2;
		var width = 58/2;
	    this.attr({h: height, w: width, alpha: 0});
		this.darkLayer = Crafty.e("2D, Canvas, Sprite, headDarkLayer").attr({h: height, w:width, alpha: 1});				
		this.redLayer = Crafty.e("2D, Canvas, Sprite, headRedLayer, red, Lightable").attr({h: height, w:width, alpha: 0});		
		this.blueLayer = Crafty.e("2D, Canvas, Sprite, headBlueLayer, blue, Lightable").attr({h: height, w:width, alpha: 0});		
		this.greenLayer = Crafty.e("2D, Canvas, Sprite, headGreenLayer, green, Lightable").attr({h: height, w:width, alpha: 0});				
		this.outline = Crafty.e("2D, Canvas, Sprite, headOutline").attr({h: height, w: width, alpha: 1});				
	},
	animate: function() {
	
	    var height = 93/2;
		var width = 58/2;
		
        if (this.frame == 0) {
		    this.darkLayer.addComponent("headDarkLayer").attr({h: height, w: width});
		    this.redLayer.addComponent("headRedLayer").attr({h: height, w: width});
		    this.greenLayer.addComponent("headGreenLayer").attr({h: height, w: width});
		    this.blueLayer.addComponent("headBlueLayer").attr({h: height, w: width});
		    this.outline.addComponent("headOutline").attr({h: height, w: width});
        } else if (this.frame == 1) {
		    this.darkLayer.addComponent("headDarkLayer2").attr({h: height, w: width});
		    this.redLayer.addComponent("headRedLayer2").attr({h: height, w: width});
		    this.greenLayer.addComponent("headGreenLayer2").attr({h: height, w: width});
		    this.blueLayer.addComponent("headBlueLayer2").attr({h: height, w: width});
		    this.outline.addComponent("headOutline2").attr({h: height, w: width}); 
        }		
	}
});


Crafty.c("Head", {
    init: function() {
	    var height = 93;
		var width = 58;
	    this.attr({h: height, w: width, alpha: 0});
		this.darkLayer = Crafty.e("2D, Canvas, Sprite, headDarkLayer").attr({h: height, w:width, alpha: 1});				
		this.redLayer = Crafty.e("2D, Canvas, Sprite, headRedLayer, red, Lightable").attr({h: height, w:width, alpha: 0});		
		this.blueLayer = Crafty.e("2D, Canvas, Sprite, headBlueLayer, blue, Lightable").attr({h: height, w:width, alpha: 0});		
		this.greenLayer = Crafty.e("2D, Canvas, Sprite, headGreenLayer, green, Lightable").attr({h: height, w:width, alpha: 0});				
		this.outline = Crafty.e("2D, Canvas, Sprite, headOutline").attr({h: height, w: width, alpha: 1});				
	},
	animate: function() {
        if (this.frame == 0) {
		    this.darkLayer.addComponent("headDarkLayer");
		    this.redLayer.addComponent("headRedLayer");
		    this.greenLayer.addComponent("headGreenLayer");
		    this.blueLayer.addComponent("headBlueLayer");
		    this.outline.addComponent("headOutline");
        } else if (this.frame == 1) {
		    this.darkLayer.addComponent("headDarkLayer2");
		    this.redLayer.addComponent("headRedLayer2");
		    this.greenLayer.addComponent("headGreenLayer2");
		    this.blueLayer.addComponent("headBlueLayer2");
		    this.outline.addComponent("headOutline2"); 
        }		
	}
});

Crafty.c("Pickledog", {
    fall: function() {
		if (this.redLayer.exists) {
			this.ySpeed -= 0.15;			 

			if (this.ySpeed < -6) {
				this.ySpeed = -6;
			}				
		} else {
			this.ySpeed += 0.15;
			
			if (this.ySpeed > 6) {
				this.ySpeed = 6;
			}
		}		
	},
    init: function() {
	    var size = 2*64;
	    this.attr({h: size, w: size, alpha: 0});
		this.darkLayer = Crafty.e("2D, Canvas, Sprite, pickledogDarkLayer").attr({h: size, w:size, alpha: 1});				
		this.redLayer = Crafty.e("2D, Canvas, Sprite, pickledogRedLayer, red, Lightable").attr({h: size, w:size, alpha: 0});		
		this.blueLayer = Crafty.e("2D, Canvas, Sprite, pickledogBlueLayer, blue, Lightable").attr({h: size, w:size, alpha: 0});		
		this.greenLayer = Crafty.e("2D, Canvas, Sprite, pickledogGreenLayer, green, Lightable").attr({h: size, w:size, alpha: 0});				
		this.outline = Crafty.e("2D, Canvas, Sprite, pickledogOutline").attr({h: size, w: size, alpha: 1});				
	},
	animate: function() {
        if (this.frame == 0) {
		    this.darkLayer.addComponent("pickledogDarkLayer");
		    this.redLayer.addComponent("pickledogRedLayer");
		    this.greenLayer.addComponent("pickledogGreenLayer");
		    this.blueLayer.addComponent("pickledogBlueLayer");
		    this.outline.addComponent("pickledogOutline");
        } else if (this.frame == 1) {
		    this.darkLayer.addComponent("pickledogDarkLayer2");
		    this.redLayer.addComponent("pickledogRedLayer2");
		    this.greenLayer.addComponent("pickledogGreenLayer2");
		    this.blueLayer.addComponent("pickledogBlueLayer2");
		    this.outline.addComponent("pickledogOutline2"); 
        }		
	}
});

Crafty.c("Critter", {
    xSpeed: 1.5,
	ySpeed: 6,
	redLayer: null,
	blueLayer: null,
	darkLayer: null,
	greenLayer: null,
	outline: null,
	exists: true,
	animTimer: 0,
	animTimerChange: 8,
	frame: 0,
	walk: function() {
			this.fall();

			this.y += this.ySpeed;
			var outOfWall = false;
			var stopped = false;
			while (!outOfWall) {
				var inWall = false;
				for (var i = 0; i < this.hit("solid").length; i++) {
					if (this.hit("solid")[i]["obj"].exists) {
						inWall = true;
						this.y -= this.ySpeed;
						stopped = true;
					}
				}				
				outOfWall = !inWall;			    
			}
			if (stopped == true) {
				this.ySpeed = 0;
			}
			

			
			this.x += this.xSpeed;
			for (var i = 0; i < this.hit("solid").length; i++) {
				if (this.hit("solid")[i]["obj"].exists) {
					this.x -= (this.xSpeed*2);
					this.xSpeed = -this.xSpeed;
					
					if (this.xSpeed < 0) {
						this.redLayer.flip("X");
						this.blueLayer.flip("X");
						this.greenLayer.flip("X");
						this.darkLayer.flip("X");
						this.outline.flip("X");
					} else {
						this.redLayer.unflip("X");
						this.blueLayer.unflip("X");
						this.greenLayer.unflip("X");
						this.darkLayer.unflip("X");
						this.outline.unflip("X");					
					}
					
				}
			}		
	},
	blinkOut: function() {
		this.darkLayer.attr({x: -1000, y:0});
		this.outline.attr({x: -1000, y: 0});
		this.redLayer.attr({x: -1000, y: 0});
		this.blueLayer.attr({x: -1000, y: 0});				
		this.greenLayer.attr({x: -1000, y: 0});

		this.redLayer.removeComponent("Lightable");
		this.redLayer.removeComponent("red");
		this.greenLayer.removeComponent("Lightable");
		this.greenLayer.removeComponent("green");
		this.blueLayer.removeComponent("Lightable");
		this.blueLayer.removeComponent("blue");
				
	    this.exists = false;
		console.log("Blinked out!");
	},
	fall: function() {
		this.ySpeed += 0.15;
		
		if (this.ySpeed > 6) {
			this.ySpeed = 6;
		}
	},
	attachLayers: function() {
		this.darkLayer.x = this.x;
		this.darkLayer.y = this.y;
		this.redLayer.x = this.x;
		this.redLayer.y = this.y;
		this.blueLayer.x = this.x;
		this.blueLayer.y = this.y;
		this.greenLayer.x = this.x;
		this.greenLayer.y = this.y;
		this.outline.x = this.x;
		this.outline.y = this.y;
	
	},
    init: function() {		
		
	    this.bind("EnterFrame", function() {
		    if (!this.exists) {
			    return;
			}
			
			this.animTimer++;
			
			if (this.animTimer > this.animTimerChange) {
			    this.animTimer = 0;
				this.frame++;
				if (this.frame > 1) {
				    this.frame = 0;
				}
				this.animate();
			}
			
			this.attachLayers();
			this.redLayer.reLight();
			this.blueLayer.reLight();			
			this.greenLayer.reLight();			

			if (this.hit("hazard") || (this.hit("shark") )) {
				Crafty.audio.play("critterdies", 1);
				this.blinkOut();				
			}
			
			// This is the falling physics.
			
			this.walk();
			
						
			

			
			if (this.hit("exit")) {
				Crafty.audio.play("rescue", 1);			
				crittersRescued++;
				text.destroy();
				text = Crafty.e("2D, Canvas, Text").attr({h:50, w:100, x: 1100, y: 0 }).text("Rescued: " + crittersRescued + " / " + requiredRescued).textColor("#FFFFFF");					
				this.blinkOut();
			}
			
			if (this.y > 600) {
				Crafty.audio.play("critterdies", 1);
				this.blinkOut();
			}
		})
	}
});