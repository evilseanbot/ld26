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
	    var height = 189;
		var width = 76;
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
	}
});

Crafty.c("PickleDog", {
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
	    var size = 1.5*64;
	    this.attr({h: size, w: size, alpha: 0});
		this.darkLayer = Crafty.e("2D, Canvas, Sprite, pickleDarkLayer").attr({h: size, w:size, alpha: 1});				
		this.redLayer = Crafty.e("2D, Canvas, Sprite, pickleRedLayer, red, Lightable").attr({h: size, w:size, alpha: 0});		
		this.blueLayer = Crafty.e("2D, Canvas, Sprite, pickleBlueLayer, blue, Lightable").attr({h: size, w:size, alpha: 0});		
		this.greenLayer = Crafty.e("2D, Canvas, Sprite, pickleGreenLayer, green, Lightable").attr({h: size, w:size, alpha: 0});				
		this.outline = Crafty.e("2D, Canvas, Sprite, pickleOutline").attr({h: size, w: size, alpha: 1});				
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
			
			this.attachLayers();
			this.redLayer.reLight();
			this.blueLayer.reLight();			
			this.greenLayer.reLight();			
									
			// This is the falling physics.
			
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
			
			if (this.hit("hazard")) {
				this.darkLayer.destroy();
				this.outline.destroy();
				this.redLayer.destroy();
				this.blueLayer.destroy();				
				this.greenLayer.destroy();
			    this.destroy();
			}
			
			if (this.hit("exit")) {
			    Crafty.audio.play("rescue", 1);			
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
			
			if (this.y > 600) {
			    console.log("Dying!");
			    Crafty.audio.play("critterdies", 1);
				this.destroy();
			}
		})
	}
});