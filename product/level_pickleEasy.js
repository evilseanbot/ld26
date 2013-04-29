Crafty.c("Level_PickleEasy", {
    init: function() {
	
		Crafty.e("2D, Canvas, Sprite, thirdLevelHelp").attr({x: 10*64, y:0*64, h:400*0.6, w:451*0.6, alpha: 1});						

	
	    // Start of first platform.
		Crafty.e("2D, Canvas, Sprite, start").attr({x: 0, y:6*64, alpha: 1});		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid, green, Lightable").attr({x: 0*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid, green, Lightable").attr({x: 1*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid, green, Lightable").attr({x: 2*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid, green, Lightable").attr({x: 3*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 4*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 5*64, y:8*64, alpha: 0});
		
				
		
		Crafty.e("2D, Canvas, Sprite, exit").attr({x: 16*64, y:6*64, alpha: 1});				


        	Crafty.e("2D, Canvas, Color, Collision, Critter, Pickledog").attr({y: 6*64, x: 1*64}).wakeupTime = 100;
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Pickledog").attr({y: 6*64, x: 1*64}).wakeupTime = 300;
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Pickledog").attr({y: 6*64, x: 1*64}).wakeupTime = 500;
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Pickledog").attr({y: 6*64, x: 1*64}).wakeupTime = 700;
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Pickledog").attr({y: 6*64, x: 1*64}).wakeupTime = 900;

		
	        /*Crafty.e("2D, Canvas, Color, Collision, Critter, Pickledog").attr({y: -800, x: -300});
	        Crafty.e("2D, Canvas, Color, Collision, Critter, Pickledog").attr({y: -1600, x: -500});
	        Crafty.e("2D, Canvas, Color, Collision, Critter, Pickledog").attr({y: -2400, x: -700});
	        Crafty.e("2D, Canvas, Color, Collision, Critter, Pickledog").attr({y: -3600, x:-900});
	        Crafty.e("2D, Canvas, Color, Collision, Critter, Pickledog").attr({y: -4400, x:-1100});
			*/
			

		Crafty.audio.play("red", -1);
			
	}
});