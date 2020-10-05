var pieces = ["one","two","three","four","rook","queen","bishop","knight", "wildcard"];
var button, sizeNum, layersNum, tile, layer1s = 0, layer2s = 0, layer3s = 0, remainingTiles = 0, score = 0;
function createBoard(){
	score = 0;
	sizeNum = parseInt(document.getElementById("sizeSlider").value, 10);
	layersNum = parseInt(document.getElementById("layersSlider").value, 10);
	remainingTiles = sizeNum * sizeNum * layersNum;
	layer1s = sizeNum * sizeNum;
	if(layersNum > 1){
		layer2s = layer1s;
	}
	if(layersNum == 3){
		layer3s = layer1s;
	}
	board = document.getElementById("board");
	board.innerHTML = "<p>Tiles Remaining: </p>";
	remainingTilesText = document.createElement("p");
	remainingTilesText.id = "remainingTiles";
	board.appendChild(remainingTilesText);
	remainingTilesText.innerHTML = remainingTiles;
	for(i = 1; i <= sizeNum; i++){
		for(j = 1; j <= sizeNum; j++){
			tile = "button" + i + j;
			button = document.createElement("button");
			button.id = tile;
			assignTile();
			board.appendChild(button);
		}
		board.appendChild(document.createElement("br"));
	}
	showGame();
}
function assignTile(){
	var valid = false;
	var valueIndex = (Math.floor(Math.random() * 8));
	while(!valid){
		tileValue = pieces[valueIndex];
		if(tileValue == "one"){
			tileNum = 1;
		}
		if(tileValue == "two"){
			tileNum = 2;
		}
		if(tileValue == "three"){
			tileNum = 3;
		}
		if(tileValue == "four"){
			tileNum = 4;
		}
		if(valueIndex < 4 	&& (parseInt(tile.substring(6,7),10)) + tileNum > sizeNum 
							&& (parseInt(tile.substring(6,7),10)) - tileNum < 1 
							&& (parseInt(tile.substring(7,8),10)) + tileNum > sizeNum 
							&& (parseInt(tile.substring(7,8),10)) - tileNum < 1 
							&& Math.floor(sizeNum/2) < tileNum){
			valueIndex = (Math.floor(Math.random() * 8));
		}
		else if(oneOff(tileValue, (parseInt(tile.substring(6,7),10)), (parseInt(tile.substring(7,8),10)))){
			valueIndex = (Math.floor(Math.random() * 8));
		}
		else{
			button.innerHTML = pieces[valueIndex];
			button.className = button.innerHTML + layersNum;
			assignImage(button);
			valid = true;
		}
	}
}
function assignImage(button){

	if(button.className.substring(button.className.length - 1, button.className.length) == "1"){
		if(button.innerHTML == "one"){
			button.className == "one1";
		}
		else if(button.innerHTML == "two"){
			button.className == "two1";
		}
		else if(button.innerHTML == "three"){
			button.className == "three1";
		}
		else if(button.innerHTML == "four"){
			button.className == "four1";
		}
		else if(button.innerHTML == "rook"){
			button.className == "rook1";
		}
		else if(button.innerHTML == "queen"){
			button.className == "queen1";
		}
		else if(button.innerHTML == "bishop"){
			button.className == "bishop1";
		}
		else if(button.innerHTML == "knight"){
			button.className == "knight1";
		}
		else{
			button.className == "wildcard1";
		}
	}

	if(button.className.substring(button.className.length - 1, button.className.length) == "2"){
		if(button.innerHTML == "one"){
			button.className == "one2";
		}
		else if(button.innerHTML == "two"){
			button.className == "two2";
		}
		else if(button.innerHTML == "three"){
			button.className == "three2";
		}
		else if(button.innerHTML == "four"){
			button.className == "four2";
		}
		else if(button.innerHTML == "rook"){
			button.className == "rook2";
		}
		else if(button.innerHTML == "queen"){
			button.className == "queen2";
		}
		else if(button.innerHTML == "bishop"){
			button.className == "bishop2";
		}
		else if(button.innerHTML == "knight"){
			button.className == "knight2";
		}
		else{
			button.className == "wildcard2";
		}
	}

	if(button.className.substring(button.className.length - 1, button.className.length) == "3"){
		if(button.innerHTML == "one"){
			button.className == "one3";
		}
		else if(button.innerHTML == "two"){
			button.className == "two3";
		}
		else if(button.innerHTML == "three"){
			button.className == "three3";
		}
		else if(button.innerHTML == "four"){
			button.className == "four3";
		}
		else if(button.innerHTML == "rook"){
			button.className == "rook3";
		}
		else if(button.innerHTML == "queen"){
			button.className == "queen3";
		}
		else if(button.innerHTML == "bishop"){
			button.className == "bishop3";
		}
		else{
			button.className == "knight3";
		}
	}
}
function reassignTile(buttonNum){
	var valid = false;
	var valueIndex = (Math.floor(Math.random() * 8));
	while(!valid){
		tileValue = pieces[valueIndex];
		if(tileValue == "one"){
			tileNum = 1;
		}
		if(tileValue == "two"){
			tileNum = 2;
		}
		if(tileValue == "three"){
			tileNum = 3;
		}
		if(tileValue == "four"){
			tileNum = 4;
		}
		if((valueIndex < 4	&& (parseInt(buttonNum.id.substring(6,7),10)) + tileNum > sizeNum 
							&& (parseInt(buttonNum.id.substring(6,7),10)) - tileNum < 1 
							&& (parseInt(buttonNum.id.substring(7,8),10)) + tileNum > sizeNum 
							&& (parseInt(buttonNum.id.substring(7,8),10)) - tileNum < 1 
							&& Math.floor(sizeNum/2) < tileNum)
							|| tileValue == buttonNum.innerHTML 
			){
			valueIndex = (Math.floor(Math.random() * 8));
		}
		else{
			buttonNum.innerHTML = pieces[valueIndex];
			valid = true;
			remainingTiles -= 1;
			if(buttonNum.className.substring(buttonNum.className.length - 1, buttonNum.className.length) == "3"){
				layer3s -= 1;
				if(layer3s == 0){
					buttonNum.innerHTML = pieces[8];
				}
			}
			else if(buttonNum.className.substring(buttonNum.className.length - 1, buttonNum.className.length) == "2"){
				layer2s -= 1;
				if(layer2s == 0){
					buttonNum.innerHTML = pieces[8];
				}
			}
			else{
				layer1s -= 1;
			}
			decreaseLayer(buttonNum);
			document.getElementById("remainingTiles").innerHTML = remainingTiles;
		}
	}
}
function oneOff(value, row, col){
	//alert(value + " " + row + " " + col);
	numberOfMoves = 0;
	if(value == "bishop"){
		//alert("bishop");
		if((row == 1 && col == 1) || (row == 1 && col == sizeNum) || (row == sizeNum && col == 1) || (row == sizeNum && col == sizeNum)){
			//alert("nope!");
			return true;
		}
	}
	if(value == "three" || value == "four"){
		if(value == "three"){
			tileNum = 3;
		}
		else{
			tileNum = 4;
		}
		if(row - tileNum >= 1){
			numberOfMoves++;
		}
		if(row + tileNum <= sizeNum){
			numberOfMoves++;
		}
		if(col - tileNum >= 1){
			numberOfMoves++;
		}
		if(col + tileNum <= sizeNum){
			numberOfMoves++;
		}
	}
	if(numberOfMoves == 1){
		return true;
	}
	else{
		return false;
	}
}
function determineMoves(buttonClicked){
	validMoves(buttonClicked,sizeNum);
}
function determineIfGameOver(){
	gameOver = true;
	for(i = 1; i <= sizeNum; i++){
		for(j = 1; j <= sizeNum; j++){
			if(document.getElementById("button" + i + j).disabled == false){
				gameOver = false;
				break;
			}
		}
	}
	if(gameOver == true){
		if(remainingTiles == 0){
			alert("You win!")
		}
		else{
			alert("Game over, you finished with " + remainingTiles + " tiles remaining.");
		}
	}
}