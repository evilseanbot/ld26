Crafty.c("Level_BrickPen", {
    init: function() {
	
		Crafty.e("2D, Canvas, Sprite, secondLevelHelp").attr({x: 11*64, y:0*64, h:400*0.6, w:451*0.6, alpha: 1});							
	
	    // Start of first platform.
		Crafty.e("2D, Canvas, Sprite, start").attr({x: 0, y:1*64, alpha: 1});		
		
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 0, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 1*64, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 2*64, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 3*64, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 4*64, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 5*64, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 6*64, y:3*64, alpha: 0});

		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 0, y:2*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 1*64, y:2*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 2*64, y:2*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 3*64, y:2*64, alpha: 0});		
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 4*64, y:2*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 5*64, y:2*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 6*64, y:2*64, alpha: 0});
		
		
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 7*64, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 7*64, y:2*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 7*64, y:1*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 7*64, y:0*64, alpha: 0});
		
        // End of first platform.
		
		
		// Start of second platform
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 3*64, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 4*64, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 5*64, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 6*64, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 7*64, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 8*64, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 9*64, y:6*64, alpha: 0});

		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 10*64, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 10*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 10*64, y:4*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 10*64, y:3*64, alpha: 0});

		
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 3*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 4*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 5*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 7*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 9*64, y:5*64, alpha: 0});
		// End of second platform
		
		// Third platform
		Crafty.e("2D, Canvas, Sprite, exit").attr({x: 16*64, y:6*64, alpha: 1});				
		
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 6*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 7*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 8*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 9*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 10*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 11*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 12*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 13*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 14*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 15*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 16*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 17*64, y:8*64, alpha: 0});	
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 18*64, y:8*64, alpha: 0});	
		
		/*
		for (var mapX = 0; mapX < 19; mapX++) {
			for (var mapY = 0; mapY < 2; mapY++) {
				Crafty.e("2D, Canvas, Sprite, sky, blue, Lightable").attr({x: mapX*64, y: mapY*64, alpha: 0});
			}
		}
		*/
		
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Head").attr({y: 1*64, x: 1*64}).wakeupTime = 100;
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Head").attr({y: 1*64, x: 1*64}).wakeupTime = 300;
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Head").attr({y: 1*64, x: 1*64}).wakeupTime = 500;
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Head").attr({y: 1*64, x: 1*64}).wakeupTime = 700;
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Head").attr({y: 1*64, x: 1*64}).wakeupTime = 900;
		
            /*
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Head").attr({y: -800, x: -200});
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Head").attr({y: -1600, x: -400});			
	        Crafty.e("2D, Canvas, Color, Collision, Critter, Head").attr({y: -2400, x: -600});
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Head").attr({y: -3200, x: -800});						
	        Crafty.e("2D, Canvas, Color, Collision, Critter, Head").attr({y: -4000, x:-1000});		
			*/
			
		Crafty.audio.play("green", 1);
	}
});