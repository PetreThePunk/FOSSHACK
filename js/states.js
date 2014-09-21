function mainMenu( tFrame ) {
	console.log( "main" );
};

function gameScreen( tFrame ) {
	
	Foss2D.collide( FossBlox.bloxArray, FossBlox.grid, FossBlox.direction );
	
	Foss2D.applyPhysics( FossBlox.bloxArray, FossBlox.grid, FossBlox.direction );
	
	var stuff = checkForMatches( FossBlox);
	if(stuff !== 0) {
	
		for( var i = 0; i < stuff.length; i++) {
			FossBlox.bloxArray =  FossBlox.bloxArray.splice( grid.cells[stuff[i]], 1);
			console.log('h');
		}
	}
	
	Foss2D.fixGrid( FossBlox.bloxArray, FossBlox.grid );
	
	
	
};

function optionMenu( tFrame ) {
	console.log( "option" );
};

function gameOver( tFrame ) {
	console.log( "over" );
};