Crafty.c("Level_PickleFlight", {
    init: function() {

	greenAlwaysOn = true;	
	    // Start of first platform.
		Crafty.e("2D, Canvas, Sprite, start").attr({x: 0, y:6*64, alpha: 1});		
		
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 0, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 1*64, y:8*64, alpha: 1});
		//Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 12*64, y:3*64, alpha: 1});
		//Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 13*64, y:3*64, alpha: 1});
		//Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 14*64, y:3*64, alpha: 1});
		//Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 15*64, y:3*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 13*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 14*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, grassBlock, solid").attr({x: 15*64, y:8*64, alpha: 1});

		
		Crafty.e("2D, Canvas, Sprite, thornHazard, hazard").attr({x: 6*64, y:8*64, alpha: 1});
		Crafty.e("2D, Canvas, Sprite, thornHazard, hazard").attr({x: 10*64, y:7*64, alpha: 1});
		
		//Crafty.e("2D, Canvas, Sprite, brickWall, red, solid, Lightable").attr({x: 11*64, y:4*64, alpha: 0});
		//Crafty.e("2D, Canvas, Sprite, brickWall, red, solid, Lightable").attr({x: 11*64, y:5*64, alpha: 0});
		
		Crafty.e("2D, Canvas, Sprite, mushroom, blue, solid, Lightable").attr({x: 5*64, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, mushroom, blue, solid, Lightable").attr({x: 6*64, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, mushroom, blue, solid, Lightable").attr({x: 11*64, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, mushroom, blue, solid, Lightable").attr({x: 12*64, y:6*64, alpha: 0});
		
		/*Crafty.e("2D, Canvas, Sprite, vines, green, solid, Lightable").attr({x: 4*64, y:7*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, vines, green, solid, Lightable").attr({x: 4*64, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, vines, green, solid, Lightable").attr({x: 8*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, vines, green, solid, Lightable").attr({x: 8*64, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, vines, green, solid, Lightable").attr({x: 8*64, y:7*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, vines, green, solid, Lightable").attr({x: 8*64, y:8*64, alpha: 0});
        */

		
		
		Crafty.e("2D, Canvas, Sprite, exit").attr({x: 14*64, y:6*64, alpha: 1});	
		
		
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
		

	        Crafty.e("2D, Canvas, Color, Collision, Critter, Pickledog").attr({y: -800, x: -400});
	        Crafty.e("2D, Canvas, Color, Collision, Critter, Pickledog").attr({y: -1600, x: -600});
	        //Crafty.e("2D, Canvas, Color, Collision, Critter, Pickledog").attr({y: -2400, x: -800});
	        Crafty.e("2D, Canvas, Color, Collision, Critter, Pickledog").attr({y: -3600, x:-1000});
	        Crafty.e("2D, Canvas, Color, Collision, Critter, Pickledog").attr({y: -4400, x:-1200});		
	        Crafty.e("2D, Canvas, Color, Collision, Critter, Pickledog").attr({y: -5200, x:-1400});					
			
	        Crafty.e("2D, Canvas, Collision, Critter, Subshark, shark").attr({y: 0, x: 1200});
			
			
		Crafty.audio.play("blue", -1);						
	}
});