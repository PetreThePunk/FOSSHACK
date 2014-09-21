function mainMenu( tFrame ) {
	console.log( "main" );
};

function gameScreen( tFrame ) {
	console.log( "game" );
	Foss2D.collide( FossBlox.bloxArray, grid, direction );
	Foss2D.applyPhysics( FossBlox.bloxArray, grid, direction );
};

function optionMenu( tFrame ) {
	console.log( "option" );
};

function gameOver( tFrame ) {
	console.log( "over" );
};