Crafty.c("Level_SkeletonHurdles", {
    init: function() {

	blueAlwaysOn = true;	
	  
		Crafty.e("2D, Canvas, Sprite, start").attr({x: 0, y:0*64, alpha: 1});		
		
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 0, y:2*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 0, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 1*64, y:2*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 2*64, y:2*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 3*64, y:2*64, alpha: 1});
		
		
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 1*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 2*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 3*64, y:8*64, alpha: 1});
		//Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 4*64, y:3*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 4*64, y:4*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 4*64, y:5*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 4*64, y:6*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 4*64, y:8*64, alpha: 1});
		//Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 5*64, y:3*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 5*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 6*64, y:2*64, alpha: 1});
		//Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 6*64, y:8*64, alpha: 1});
		
		// The first hanging mushrooms
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 8*64, y:0*64, alpha: 1});
		
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 7*64, y:2*64, alpha: 1});
		//Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 7*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 8*64, y:2*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 8*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 9*64, y:2*64, alpha: 1});
		//Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 9*64, y:7*64, alpha: 1});	
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 9*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 10*64, y:2*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 10*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 11*64, y:2*64, alpha: 1});	
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 11*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 12*64, y:2*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 12*64, y:8*64, alpha: 1});
		//Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 13*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 14*64, y:6*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 14*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 15*64, y:6*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 15*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 16*64, y:0*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 16*64, y:2*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 16*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 17*64, y:2*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 17*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 2*64, y:5*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 3*64, y:5*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 14*64, y:7*64, alpha: 1});

		//Mushroom ceiling at the end that allows you to turn them around.
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 16*64, y:3*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, mushroom, solid").attr({x: 16*64, y:4*64, alpha: 1});
		
		
		Crafty.e("2D, Canvas, Sprite, blueSpike, blue, hazard, Lightable").attr({x: 2*64, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, blueSpike, blue, hazard, Lightable").attr({x: 3*64, y:3*64, alpha: 0});
		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 13*64, y:2*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 14*64, y:2*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 15*64, y:2*64, alpha: 0});
		
		Crafty.e("2D, Canvas, Sprite, brickWall, red, solid, Lightable").attr({x: 9*64, y:2*64, alpha: 0});
		
		// The opening bricks
		Crafty.e("2D, Canvas, Sprite, brickWall, red, solid, Lightable").attr({x: 4*64, y:2*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, red, solid, Lightable").attr({x: 5*64, y:2*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, red, solid, Lightable").attr({x: 6*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, red, solid, Lightable").attr({x: 7*64, y:8*64, alpha: 0});
		
		
		Crafty.e("2D, Canvas, Sprite, exit").attr({x: 0*64, y:6*64, alpha: 1}).flip("X");	
		
		
		/*
		for (var mapX = 0; mapX < 19; mapX++) {
			for (var mapY = 0; mapY < 2; mapY++) {
				Crafty.e("2D, Canvas, Sprite, sky, blue, Lightable").attr({x: mapX*64, y: mapY*64, alpha: 0});
			}
		}
		*/
		
	for (var i = 0; i < Crafty("mushroom").length; i++) {	 			
	    Crafty(Crafty("mushroom")[i]).exists = true;
	}

        	Crafty.e("2D, Canvas, Color, Collision, Critter, Skeleton").attr({y: 0*64, x: 1*64}).wakeupTime = 100;
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Skeleton").attr({y: 0*64, x: 1*64}).wakeupTime = 300;
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Skeleton").attr({y: 0*64, x: 1*64}).wakeupTime = 500;
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Skeleton").attr({y: 0*64, x: 1*64}).wakeupTime = 700;
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Skeleton").attr({y: 0*64, x: 1*64}).wakeupTime = 900;
	
	        /*
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Skeleton").attr({y: -800, x: -200});
	        Crafty.e("2D, Canvas, Color, Collision, Critter, Skeleton").attr({y: -1600, x: -400});
	        Crafty.e("2D, Canvas, Color, Collision, Critter, Skeleton").attr({y: -2400, x: -600});
	        Crafty.e("2D, Canvas, Color, Collision, Critter, Skeleton").attr({y: -3200, x: -800});
	        Crafty.e("2D, Canvas, Color, Collision, Critter, Skeleton").attr({y: -4000, x:-1000});		
			*/
			
		Crafty.audio.play("green", -1);			
	}
});