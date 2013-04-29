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
			this.ySpeed -= 0.1;			 

			if (this.ySpeed < -4) {
				this.ySpeed = -4;
			}				
		} else {
			this.ySpeed += 0.1;
			
			if (this.ySpeed > 4) {
				this.ySpeed = 4;
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
    xSpeed: 1,
	ySpeed: 4,
	redLayer: null,
	blueLayer: null,
	darkLayer: null,
	greenLayer: null,
	outline: null,
	fall: function() {
		this.ySpeed += 0.1;
		
		if (this.ySpeed > 4) {
			this.ySpeed = 4;
		}
	},
    init: function() {		
		
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