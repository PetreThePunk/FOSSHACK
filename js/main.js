"use strict";
//Globals for FossBlox Game
var FossBlox, canvas, ctx;
var tFrame = 0;

// Come on its an init function
function init() {
	//Setting up all of the game globals for FossBlox
	FossBlox = {
		stopMain: "undefined",
		state: "gameScreen",
		stateFunction: gameScreen,
		bloxArray: [],
		grid: {
			rows: 9,
			columns: 16,
			cells: []
		},
		direction: 0
	};
	
	// Set up an empty grid
	for( var i = 0; i < FossBlox.grid.rows * FossBlox.grid.columns; i++ ) {
		FossBlox.grid.cells[i] = -1;
	}
	
	//test case
	FossBlox.bloxArray.push( { falling: true, cell: 0 }, { falling: true, cell: 1 }, { falling: true, cell: 2 }, { falling: true, cell: 26 }, { falling: true, cell: 51 } );
	//FossBlox.bloxArray.push( { falling: true, cell: 0 } );
	// Set up canvas element and context
	canvas = document.querySelector("#canvas");
	ctx = canvas.getContext("2d");
	
	//Set up control events
	window.onkeydown = function(event) {
		switch( event.keyCode ) {
			case 40:
				FossBlox.direction = 0;
				break;
			case 39:
				FossBlox.direction = 1;
				break;
			case 38:
				FossBlox.direction = 2;
				break;
			case 37:
				FossBlox.direction = 3;
				break;
		}
	};
	
	main(); // start the cycle
};

/** Calls the current stateFunction
 *
 * @param tFrame : time whatever
 *
 */
function update( tFrame ) { 
	FossBlox.stateFunction( tFrame );
};

/** Checks the state and renders the screen appropriately(I CANT SPELL)
 *
 */
function render() {
	switch( FossBlox.state ) {
		case "gameScreen" :
			ctx.fillStyle = "black";
			ctx.fillRect( 0, 0, canvas.width, canvas.height );
		
			var bloxWidth = canvas.width/FossBlox.grid.columns;
			var bloxHeight = canvas.height/FossBlox.grid.rows;
			
			for( var i = 0; i < FossBlox.bloxArray.length; i++ ) {
				var drawX = ( FossBlox.bloxArray[i].cell % FossBlox.grid.columns )* bloxWidth;
				var drawY = Math.floor( FossBlox.bloxArray[i].cell / FossBlox.grid.columns ) * bloxHeight;
				
				console.log( );
				
				ctx.fillStyle = "white";
				ctx.fillRect( drawX, drawY, bloxWidth, bloxHeight );
			}
			break;
	}
};

function main() {
    FossBlox.stopMain = window.requestAnimationFrame( main );
    
    update( tFrame );
	render();
};

window.onload = init;
