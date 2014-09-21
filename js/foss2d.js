
var Foss2D = {
	collide: function( blox, grid, direction ) {

	},
	//Applies gravity in the correct direction
	applyPhysics: function( bloxArray, grid, direction ) {
	
		for( var i = 0; i < bloxArray.length; i++ ) {
		
			var currentBlox = bloxArray[i];
			
			if( currentBlox.falling ) {
				switch( direction ) {
					case 0: 
						blox.y += 1;
						grid.cells[blox.cell] = -1;
						blox.cell += grid.columns;
						grid.cells[] = i;
						break;
					case 1: 
						
						break;
					case 2: 
						
						break;
					case 3: 
						
						break;
				}
			}
		}
	}
};