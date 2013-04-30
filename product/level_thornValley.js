Crafty.c("Level_ThornValley", {
    init: function() {

	greenAlwaysOn = true;	
	    // Start of first platform.
		Crafty.e("2D, Canvas, Sprite, start").attr({x: 0, y:0*64, alpha: 1});		
		/*
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 0, y:2*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 0, y:4*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 0*64, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 0*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 1*64, y:2*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 1*64, y:4*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 1*64, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 1*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 2*64, y:2*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 2*64, y:4*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 2*64, y:6*64, alpha: 0});	
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 2*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 3*64, y:4*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 3*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 4*64, y:2*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 4*64, y:4*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 4*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 5*64, y:2*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 5*64, y:4*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 5*64, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 5*64, y:8*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 6*64, y:4*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 6*64, y:6*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 6*64, y:8*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 7*64, y:4*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 7*64, y:6*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 7*64, y:8*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 8*64, y:2*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 8*64, y:8*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 9*64, y:2*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 9*64, y:8*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 10*64, y:2*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 10*64, y:6*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 10*64, y:8*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 11*64, y:2*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 11*64, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 11*64, y:8*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 12*64, y:2*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 12*64, y:6*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 12*64, y:8*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 13*64, y:2*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 13*64, y:4*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 13*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 13*64, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 13*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 14*64, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 14*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 15*64, y:6*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 16*64, y:0*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 16*64, y:0*64, alpha: 0});			
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 16*64, y:1*64, alpha: 0});			
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 16*64, y:2*64, alpha: 0});			
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 16*64, y:3*64, alpha: 0});			
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 16*64, y:4*64, alpha: 0});			
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 16*64, y:5*64, alpha: 0});			
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 16*64, y:6*64, alpha: 0});			
        */
		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 0, y:2*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 0, y:4*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 0*64, y:6*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 0*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 1*64, y:2*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 1*64, y:4*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 1*64, y:6*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 1*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 2*64, y:2*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 2*64, y:4*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 2*64, y:6*64, alpha: 1});	
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 2*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 3*64, y:4*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 3*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 4*64, y:2*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 4*64, y:4*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 4*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 5*64, y:2*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 5*64, y:4*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 5*64, y:6*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 5*64, y:8*64, alpha: 1});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 6*64, y:4*64, alpha: 1});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 6*64, y:6*64, alpha: 1});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 6*64, y:8*64, alpha: 1});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 7*64, y:4*64, alpha: 1});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 7*64, y:6*64, alpha: 1});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 7*64, y:8*64, alpha: 1});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 8*64, y:2*64, alpha: 1});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 8*64, y:8*64, alpha: 1});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 9*64, y:2*64, alpha: 1});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 9*64, y:8*64, alpha: 1});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 10*64, y:2*64, alpha: 1});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 10*64, y:6*64, alpha: 1});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 10*64, y:8*64, alpha: 1});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 11*64, y:2*64, alpha: 1});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 11*64, y:6*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 11*64, y:8*64, alpha: 1});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 12*64, y:2*64, alpha: 1});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 12*64, y:6*64, alpha: 1});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 12*64, y:8*64, alpha: 1});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 13*64, y:2*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 13*64, y:4*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 13*64, y:5*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 13*64, y:6*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 13*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 14*64, y:6*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 14*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 15*64, y:6*64, alpha: 1});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 16*64, y:0*64, alpha: 1});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 16*64, y:0*64, alpha: 1});			
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 16*64, y:1*64, alpha: 1});			
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 16*64, y:2*64, alpha: 1});			
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 16*64, y:3*64, alpha: 1});			
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 16*64, y:4*64, alpha: 1});			
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 16*64, y:5*64, alpha: 1});			
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 16*64, y:6*64, alpha: 1});			
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 3*64, y:2*64, alpha: 1});			
		
		
		
		Crafty.e("2D, Canvas, Sprite, thornHazard, green, hazard, Lightable").attr({x: 0*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, thornHazard, green, hazard, Lightable").attr({x: 0*64, y:7*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, thornHazard, green, hazard, Lightable").attr({x: 6*64, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, thornHazard, green, hazard, Lightable").attr({x: 7*64, y:3*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, thornHazard, green, hazard, Lightable").attr({x: 14*64, y:5*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, thornHazard, green, hazard, Lightable").attr({x: 15*64, y:5*64, alpha: 0});		
		
		
		
		Crafty.e("2D, Canvas, Sprite, mushroom, blue, solid, Lightable").attr({x: 1*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, mushroom, blue, solid, Lightable").attr({x: 3*64, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, mushroom, blue, solid, Lightable").attr({x: 4*64, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, mushroom, blue, solid, Lightable").attr({x: 6*64, y:2*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, mushroom, blue, solid, Lightable").attr({x: 7*64, y:2*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, mushroom, blue, solid, Lightable").attr({x: 8*64, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, mushroom, blue, solid, Lightable").attr({x: 8*64, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, mushroom, blue, solid, Lightable").attr({x: 9*64, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, mushroom, blue, solid, Lightable").attr({x: 10*64, y:1*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, mushroom, blue, solid, Lightable").attr({x: 11*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, mushroom, blue, solid, Lightable").attr({x: 11*64, y:7*64, alpha: 0});
        Crafty.e("2D, Canvas, Sprite, mushroom, blue, solid, Lightable").attr({x: 14*64, y:2*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, mushroom, blue, solid, Lightable").attr({x: 14*64, y:4*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, mushroom, blue, solid, Lightable").attr({x: 15*64, y:2*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, mushroom, blue, solid, Lightable").attr({x: 15*64, y:4*64, alpha: 0});			
		
		Crafty.e("2D, Canvas, Sprite, exit").attr({x: 15*64, y:7*64, alpha: 1});	
		
		
		/*
		for (var mapX = 0; mapX < 19; mapX++) {
			for (var mapY = 0; mapY < 2; mapY++) {
				Crafty.e("2D, Canvas, Sprite, sky, blue, Lightable").attr({x: mapX*64, y: mapY*64, alpha: 0});
			}
		}
		*/
		
	for (var i = 0; i < Crafty("grassBlock").length; i++) {	 			
	    Crafty(Crafty("grassBlock")[i]).exists = true;
	}
	for (var i = 0; i < Crafty("thornHazard").length; i++) {	 			
	    Crafty(Crafty("thornHazard")[i]).exists = true;
	}
	
	
	
	
		
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Hatbird").attr({y: 0, x: 1*64}).wakeupTime = 100;
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Hatbird").attr({y: 0, x: 1*64}).wakeupTime = 300;
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Hatbird").attr({y: 0, x: 1*64}).wakeupTime = 500;
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Hatbird").attr({y: 0, x: 1*64}).wakeupTime = 700;
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Hatbird").attr({y: 0, x: 1*64}).wakeupTime = 900;

/*	        Crafty.e("2D, Canvas, Color, Collision, Critter, MiniHead").attr({y: -1600, x: -200});
	        Crafty.e("2D, Canvas, Color, Collision, Critter, MiniHead").attr({y: -2400, x: -400});
	        Crafty.e("2D, Canvas, Color, Collision, Critter, MiniHead").attr({y: -3200, x: -600});
	        Crafty.e("2D, Canvas, Color, Collision, Critter, MiniHead").attr({y: -4000, x:-800});		*/

	Crafty.audio.play("blue", -1);
			
			
	}
	
});