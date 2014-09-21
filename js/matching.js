function checkForMatches() {
	if( FossBlox.state == "gameScreen" ) {
		var toRemove = [];
		var checked = [];
		var grid = FossBlox.grid;
		
		for( var i = 0; i < grid.columns * grid.rows; i++ ) {
			var alreadyChecked = alreadyCheckedAt( i );
			
			if( !alreadyChecked ) {
				var matchedBlox = 0;
				
				matchedBlox += checkMatchesAt( i );
			}
		}
		
		return toRemove;
	}
};

function alreadyCheckedAt( i ) {
	var alreadyChecked = false;
	for( var j = 0; j < checked.length; j++ ) {
		if( checked[ j ] == i ) {
			alreadyChecked = true;
		}
	}
	
	return alreadyChecked;
}

function checkMatchesAt( i ) {
	var matchedBlox = 0;
	var bloxCell = i;
	checked.push( bloxCell );
	if( grid.cells[ i ] != -1 ) {
		var bloxColor = blox.color;
		
		var leftBloxMatch = false;
		var rightBloxMatch = false;
		var upBloxMatch = false;
		var downBloxMatch = false;
		
		if( bloxCell % grid.columns != 0 ) {
			var alreadyCheckedLeft = alreadyCheckedAt( bloxCell - 1 );
			if( !alreadyCheckedLeft )
			{
				var leftBlox = grid.cells[ bloxCell - 1 ];
				if( leftBlox != -1 ) {
					var leftBloxColor = leftBlox.color;
					
					if( leftBloxColor == bloxColor ) {
						leftBloxMatch = true;
						matchedBlox++;
						matchedBlox += checkMatchesAt( bloxCell - 1 );
					}
				}
			}
		}
		
		if( bloxCell % grid.columns != grid.columns - 1 ) {
			var alreadyCheckedRight = alreadyCheckedAt( bloxCell + 1 );
			if( !alreadyCheckedRight ) {
				var rightBlox = grid.cells[ bloxCell + 1 ];
				if( rightBlox != -1 ) {
					var rightBloxColor = rightBlox.color;
					
					if( rightBloxColor == bloxColor ) {
						rightBloxMatch = true;
						matchedBlox++;
						matchedBlox += checkMatchesAt( bloxCell + 1 );
					}
				}
			}
		}
		
		if( bloxCell >= grid.columns ) {
			var alreadyCheckedUp = alreadyCheckedAt( bloxCell - grid.columns );
			if( !alreadyCheckedUp ) {
				var upBlox = FossBlox.bloxArray[ bloxCell - grid.columns ];
				if( upBlox != -1 ) {
					var upBloxColor = upBlox.color;
					
					if( upBloxColor == bloxColor ) {
						upBloxMatch = true;
						matchedBlox++;
						matchedBlox += checkMatchesAt( bloxCell - grid.columns );
					}
				}
			}
		}
		
		if( bloxCell <= ( ( grid.rows * grid.columns ) - grid.columns ) ) {
			var alreadyCheckedDown = alreadyCheckedAt( bloxCell + grid.columns );
			if( !alreadyCheckedDown ) {
				var downBlox = FossBlox.bloxArray[ bloxCell + grid.columns ];
				if( downBlox != -1 ) {
					var downBloxColor = downBlox.color;
					
					if( downBloxColor == bloxColor ) {
						downBloxMatch = true;
						matchedBlox++;
						matchedBlox += checkMatchesAt( bloxCell + grid.columns );
					}
				}
			}
		}
	}
	
	return matchedBlox;
}