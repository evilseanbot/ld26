Crafty.c("Level_steelDoors2", {
    init: function() {
	
	Crafty.sprite(64, 64, "grassBlock.png", {
	    grassBlock: [0, 0]
	});

		Crafty.sprite(64, 64, "thornHazard.png", {
	    thornHazard: [0, 0]
	});

		Crafty.sprite(64, 64, "steelWall.png", {
	    steelWall: [0, 0]
	});

	blueAlwaysOn = true;	
	  
		Crafty.e("2D, Canvas, Sprite, start, red, Lightable, LightSource").attr({x: 0, y:1*64, alpha: 0});		
		
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 0, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 0, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 1, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 1, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 2, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 2, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 3, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 3, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 4, y:2*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 4, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 4, y:4*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 4, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 4, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 4, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 5, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 5, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 6, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 6, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 7, y:0*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 7, y:1*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 7, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 7, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 8, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 8, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 9, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 9, y:7*64, alpha: 0});	
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 9, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 10, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 10, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 11, y:3*64, alpha: 0});	
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 11, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 12, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 12, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 13, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 14, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 14, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 15, y:6*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 15, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 16, y:0*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 16, y:1*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 16, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 16, y:8*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 17, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, steelWall, blue, solid, Lightable").attr({x: 17, y:8*64, alpha: 0});
	
		
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 13*64, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 14*64, y:3*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, grassBlock, green, solid, Lightable").attr({x: 15*64, y:3*64, alpha: 0});
		
		Crafty.e("2D, Canvas, Sprite, brickWall, red, solid, Lightable").attr({x: 9*64, y:2*64, alpha: 0});
		
		Crafty.e("2D, Canvas, Sprite, exit, red, Lightable, LightSource").attr({x: 0*64, y:6*64, alpha: 0});	
		
		/*
		for (var mapX = 0; mapX < 19; mapX++) {
			for (var mapY = 0; mapY < 2; mapY++) {
				Crafty.e("2D, Canvas, Sprite, sky, blue, Lightable").attr({x: mapX*64, y: mapY*64, alpha: 0});
			}
		}
		*/

        	Crafty.e("2D, Canvas, Color, Collision, Critter").attr({y: -800, x: 0});
	        Crafty.e("2D, Canvas, Color, Collision, Critter").attr({y: -1600, x: -200});
	        Crafty.e("2D, Canvas, Color, Collision, Critter").attr({y: -2400, x: -400});
	        Crafty.e("2D, Canvas, Color, Collision, Critter").attr({y: -3200, x: -600});
	        Crafty.e("2D, Canvas, Color, Collision, Critter").attr({y: -4000, x:-800});		
	}
});