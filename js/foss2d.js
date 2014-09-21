
var Foss2D = {
	/** Checks for blox that have reached the "bottom" and sets their falling attribute to false
	 *
	 * @param bloxArray : array of bloxen to check collisions on
	 * @param grid : the grid where all blox are located
	 * @param direction : direction or gravity
	 *
	 */
	collide: function( bloxArray, grid, direction ) {
		
	},
	/** Moves each blox in the proper direction if they are falling
	 *
	 * @param bloxArray : array of bloxen to check collisions on
	 * @param grid : the grid where all blox are located
	 * @param direction : direction or gravity
	 *
	 */
	applyPhysics: function( bloxArray, grid, direction ) {
	
		for( var i = 0; i < bloxArray.length; i++ ) {
		
			var currentBlox = bloxArray[i];
			
			if( currentBlox.falling ) {
				//Each case advances the blox one spot on the grid in the current direction of gravity
				switch( direction ) {
					// Directions relative to initial orientation
					// Down
					case 0: 
						blox.y += 1;
						grid.cells[blox.cell] = -1;
						blox.cell += grid.columns;
						grid.cells[blox.cell] = i;
						break;
					// Right
					case 1: 
						blox.x += 1;
						grid.cells[blox.cell] = -1;
						blox.cell += grid.columns;
						grid.cells[blox.cell] = i;
						break;
					// Up
					case 2: 
						blox.y -= 1;
						grid.cells[blox.cell] = -1;
						blox.cell -= grid.rows;
						grid.cells[blox.cell] = i;
						break;
					// Left
					case 3: 
						blox.x -= 1;
						grid.cells[blox.cell] = -1;
						blox.cell -= grid.rows;
						grid.cells[blox.cell] = i;
						break;
				}
			}

		}
	}
};