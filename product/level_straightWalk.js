Crafty.c("Level_StraightWalk", {
    init: function() {
	
	    // Start of first platform.
		Crafty.e("2D, Canvas, Sprite, start").attr({x: 0, y:3*64, alpha: 1});		
		
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 0, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 1*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 2*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 3*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 4*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 5*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 6*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 7*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 8*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 9*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 10*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 11*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 12*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 13*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 14*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 15*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 16*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 17*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, brickWall, solid, red, Lightable").attr({x: 18*64, y:5*64, alpha: 0});

		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 1*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 2*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 3*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 4*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 5*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 6*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 7*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 8*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 9*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 10*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 11*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 12*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 13*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 14*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 15*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 16*64, y:5*64, alpha: 0});
		Crafty.e("2D, Canvas, Sprite, guardRail, red, Lightable").attr({x: 17*64, y:5*64, alpha: 0});
		
		
		
		Crafty.e("2D, Canvas, Sprite, exit").attr({x: 16*64, y:3*64, alpha: 1});				
				
        	Crafty.e("2D, Canvas, Color, Collision, Critter, Head").attr({y: -800, x: 0});
	        Crafty.e("2D, Canvas, Color, Collision, Critter, Head").attr({y: -1600, x: -200});
	        Crafty.e("2D, Canvas, Color, Collision, Critter, Head").attr({y: -2400, x: -400});
	        Crafty.e("2D, Canvas, Color, Collision, Critter, Head").attr({y: -3200, x: -600});
	        Crafty.e("2D, Canvas, Color, Collision, Critter, Head").attr({y: -4000, x:-800});		
	}
});