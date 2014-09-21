"use strict";

var FossBlox = {
	stopMain: "undefined",
	state: "mainMenu",
	stateFunction: mainMenu,
	bloxArray: [],
	grid: []
};

function update( tFrame ) { 
	FossBlox.stateFunction( tFrame );
};

function render() {

};

function main() {
    MyGame.stopMain = window.requestAnimationFrame( main );
    
    update( tFrame );
	render();
};

main(); // Start the cycle
