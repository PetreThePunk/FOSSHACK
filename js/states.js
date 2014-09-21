function mainMenu( tFrame ) {
	console.log( "main" );
};

function gameScreen( tFrame ) {
	Foss2D.collide( FossBlox.bloxArray, FossBlox.grid, FossBlox.direction );
	Foss2D.applyPhysics( FossBlox.bloxArray, FossBlox.grid, FossBlox.direction );
};

function optionMenu( tFrame ) {
	console.log( "option" );
};

function gameOver( tFrame ) {
	console.log( "over" );
};