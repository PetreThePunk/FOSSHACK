function checkForMatches() {
	if( FossBlox.state == "gameScreen" ) {
		var toRemove = [];
		var checked = [];
		var grid = FossBlox.grid;
		
		for( var i = 0; i < FossBlox.bloxArray.length; i++ ) {
			var alreadyChecked = alreadyCheckedAt( i );
			
			if( !alreadyChecked ) {
				var matchedBlox = 0;
				
				matchedBlox += checkMatchesAt[ i ];
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
	var blox = FossBlox.bloxArray[ i ];
	var bloxCell = blox.cell;
	if( !blox.falling ) {
		var matchedBlox = 0;
		var bloxColor = blox.color;
		
		var leftBloxMatch = false;
		var rightBloxMatch = false;
		var upBloxMatch = false;
		var downBloxMatch = false;
		
		if( bloxCell % grid.columns != 0 ) {
			var leftBlox = grid.cells[ bloxCell - 1 ];
			if( leftBlox != -1 )
			{
				var leftBloxColor = leftBlox.color;
				
				if( leftBloxColor == bloxColor ) {
					leftBloxMatch = true;
					matchedBlox++;
					checked.push( bloxCell - 1 );
				}
			}
		}
		
		if( bloxCell % grid.columns != grid.columns - 1 ) {
			var rightBlox = grid.cells[ bloxCell + 1 ];
			if( rightBlox != -1 )
			{
				var rightBloxColor = rightBlox.color;
				
				if( rightBloxColor == bloxColor ) {
					rightBloxMatch = true;
					matchedBlox++;
					checked.push( bloxCell + 1 );
				}
			}
		}
		
		if( bloxCell >= grid.columns ) {
			var upBlox = FossBlox.bloxArray[ bloxCell - grid.columns ];
			if( upBlox != -1 )
			{
				var upBloxColor = upBlox.color;
				
				if( upBloxColor == bloxColor ) {
					upBloxMatch = true;
					matchedBlox++;
					checked.push( bloxCell - grid.columns );
				}
			}
		}
		
		if( bloxCell <= ( ( grid.rows * grid.columns ) - grid.columns ) ) {
			var downBlox = FossBlox.bloxArray[ bloxCell + grid.columns ];
			if( downBlox != -1 )
			{
				var downBloxColor = downBlox.color;
				
				if( downBloxColor == bloxColor ) {
					downBloxMatch = true;
					matchedBlox++;
					checked.push( bloxCell + grid.columns );
				}
			}
		}
	}
}