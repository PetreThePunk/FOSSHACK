"use strict";
//Globals for FossBlox Game
var FossBlox = {
	stopMain: "undefined",
	state: "mainMenu",
	stateFunction: gameScreen,
	bloxArray: [],
	grid: {
		rows: 10,
		columns: 10,
		cells: []
	},
	height: 20,
	width: 30,
	direction: 0
};

var tFrame = 0;

/** Calls the current stateFunction
 *
 * @param tFrame : time whatever
 *
 */
function update( tFrame ) { 
	FossBlox.stateFunction( tFrame );
};

function render() {
	
};

function main() {
    FossBlox.stopMain = window.requestAnimationFrame( main );
    
    update( tFrame );
	render();
};

main(); // Start the cycle
