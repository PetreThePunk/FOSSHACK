
var Foss2D = {
	/** Checks for blox that have reached the "bottom" and sets their falling attribute to false
	 *
	 * @param bloxArray : array of bloxen to check collisions on
	 * @param grid : the grid where all blox are located
	 * @param direction : direction or gravity
	 *
	 */
	collide: function( bloxArray, grid, direction ) {
		
		for( var i = 0; i < bloxArray.length; i++ ) {
			var falling = false;
			switch( direction ) {		

				case 0:
					for(var cell = bloxArray[i].cell;
                                            cell < grid.cells.length && falling == false; 
                                            cell += grid.columns) {
						if( grid.cells[cell] == -1 ) {
							falling = true;
						}
					}
					break;
				case 1:
					for(var cell = bloxArray[i].cell;
					    (cell % grid.columns) == 0;
					    cell++) {
						if( grid.cells[cell] == -1 ) {
							falling = true;
						}
					} 
					break;
				case 2:
					for(var cell = bloxArray[i].cell;
					    cell > grid.cells.length && falling == false;
					    cell -= grid.columns) {
						if( grid.cells[cell] == -1 ) {
							falling = true;
						}
					}
					break;
				case 3:
					for(var cell = bloxArray[i].cell;
					    (cell % grid.columns) == 0;
					    cell--) {
						if( grid.cells[cell] == -1 ) {
							falling = true;
						}
					}
					break;
			}
			bloxArray[i].falling = falling;
		}
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
		
			var blox = bloxArray[i];
			
			if( blox.falling ) {
				//Each case advances the blox one spot on the grid in the current direction of gravity
				switch( direction ) {
					// Directions relative to initial orientation
					// Down
					case 0: 
						grid.cells[blox.cell] = -1;
						blox.cell += grid.columns;
						grid.cells[blox.cell] = i;
						break;
					// Right
					case 1: 
						grid.cells[blox.cell] = -1;
						blox.cell += 1;
						grid.cells[blox.cell] = i;
						break;
					// Up
					case 2: 
						grid.cells[blox.cell] = -1;
						blox.cell -= grid.columns;
						grid.cells[blox.cell] = i;
						break;
					// Left
					case 3: 
						grid.cells[blox.cell] = -1;
						blox.cell -= 1;
						grid.cells[blox.cell] = i;
						break;
				}
			}

		}
	}
};
