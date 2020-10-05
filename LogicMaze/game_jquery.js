$(document).ready(function(){
	$(document).on("click", ".tiles button", function(){
		determineMoves(this);
		reassignTile(this);
		$(this).addClass("selected");
		determineIfGameOver();
	});
	$("#instructionsButton").click(function(){
		document.getElementById("board").style.display = "none";
		if(document.getElementById("instructions").style.display != "block"){
			$("#instructions").slideDown("slow");
			document.getElementById("instructionsButton").value = "Back to Game";
		}
		else{
			$("#instructions").slideUp("slow");
			$("#board").slideDown("slow");
			document.getElementById("instructionsButton").value = "Instructions";
		}
	});
});
function showGame(){
	$("#board").slideDown("slow");
	if(document.getElementById("instructions").style.display == "block"){
		$("#instructions").slideUp("slow");
	}
}
function validMoves(button,boardSize){
	var row = parseInt(button.id.substring(6,7),10);
	var col = parseInt(button.id.substring(7,8),10);

	$(".tiles button").prop("disabled", true);
	$(".tiles button").removeClass("valid");
	$(".tiles button").removeClass("selected");

	// for 1
	if(button.innerHTML == "one"){
		if(row - 1 > 0){
			if(col - 1 > 0 && $(document.getElementById("button" + (row - 1) + (col - 1))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 1) + (col - 1))).prop("disabled", false);
				$(document.getElementById("button" + (row - 1) + (col - 1))).addClass("valid");
			}
			if($(document.getElementById("button" + (row - 1) + col)).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 1) + col)).prop("disabled", false);
				$(document.getElementById("button" + (row - 1) + col)).addClass("valid");
			}
			if(col + 1 <= boardSize && $(document.getElementById("button" + (row - 1) + (col + 1))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 1) + (col + 1))).prop("disabled", false);
				$(document.getElementById("button" + (row - 1) + (col + 1))).addClass("valid");
			}
		}
		if(col - 1 > 0 && $(document.getElementById("button" + row + (col - 1))).hasClass("layer0") == false){
			$(document.getElementById("button" + row + (col - 1))).prop("disabled", false);
			$(document.getElementById("button" + row + (col - 1))).addClass("valid");
		}
		if(col + 1 <= boardSize && $(document.getElementById("button" + row + (col + 1))).hasClass("layer0") == false){
			$(document.getElementById("button" + row + (col + 1))).prop("disabled", false);
			$(document.getElementById("button" + row + (col + 1))).addClass("valid");
		}
		if(row + 1 <= boardSize){
			if(col - 1 > 0 && $(document.getElementById("button" + (row + 1) + (col - 1))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 1) + (col - 1))).prop("disabled", false);
				$(document.getElementById("button" + (row + 1) + (col - 1))).addClass("valid");
			}
			if($(document.getElementById("button" + (row + 1) + col)).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 1) + col)).prop("disabled", false);
				$(document.getElementById("button" + (row + 1) + col)).addClass("valid");
			}
			if(col + 1 <= boardSize && $(document.getElementById("button" + (row + 1) + (col + 1))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 1) + (col + 1))).prop("disabled", false);
				$(document.getElementById("button" + (row + 1) + (col + 1))).addClass("valid");
			}
		}
	}

	// for 2
	if(button.innerHTML == "two"){
		if(row - 2 > 0){
			if(col - 2 > 0 && $(document.getElementById("button" + (row - 2) + (col - 2))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 2) + (col - 2))).prop("disabled", false);
				$(document.getElementById("button" + (row - 2) + (col - 2))).addClass("valid");
			}
			if($(document.getElementById("button" + (row - 2) + col)).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 2) + col)).prop("disabled", false);
				$(document.getElementById("button" + (row - 2) + col)).addClass("valid");
			}
			if(col + 2 <= boardSize && $(document.getElementById("button" + (row - 2) + (col + 2))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 2) + (col + 2))).prop("disabled", false);
				$(document.getElementById("button" + (row - 2) + (col + 2))).addClass("valid");
			}
		}
		if(col - 2 > 0 && $(document.getElementById("button" + row + (col - 2))).hasClass("layer0") == false){
			$(document.getElementById("button" + row + (col - 2))).prop("disabled", false);
			$(document.getElementById("button" + row + (col - 2))).addClass("valid");
		}
		if(col + 2 <= boardSize && $(document.getElementById("button" + row + (col + 2))).hasClass("layer0") == false){
			$(document.getElementById("button" + row + (col + 2))).prop("disabled", false);
			$(document.getElementById("button" + row + (col + 2))).addClass("valid");
		}
		if(row + 2 <= boardSize){
			if(col - 2 > 0 && $(document.getElementById("button" + (row + 2) + (col - 2))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 2) + (col - 2))).prop("disabled", false);
				$(document.getElementById("button" + (row + 2) + (col - 2))).addClass("valid");
			}
			if($(document.getElementById("button" + (row + 2) + col)).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 2) + col)).prop("disabled", false);
				$(document.getElementById("button" + (row + 2) + col)).addClass("valid");
			}
			if(col + 2 <= boardSize && $(document.getElementById("button" + (row + 2) + (col + 2))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 2) + (col + 2))).prop("disabled", false);
				$(document.getElementById("button" + (row + 2) + (col + 2))).addClass("valid");
			}
		}
	}

	// for 3
	if(button.innerHTML == "three"){
		if(row - 3 > 0){
			if(col - 3 > 0 && $(document.getElementById("button" + (row - 3) + (col - 3))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 3) + (col - 3))).prop("disabled", false);
				$(document.getElementById("button" + (row - 3) + (col - 3))).addClass("valid");
			}
			if($(document.getElementById("button" + (row - 3) + col)).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 3) + col)).prop("disabled", false);
				$(document.getElementById("button" + (row - 3) + col)).addClass("valid");
			}
			if(col + 3 <= boardSize && $(document.getElementById("button" + (row - 3) + (col + 3))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 3) + (col + 3))).prop("disabled", false);
				$(document.getElementById("button" + (row - 3) + (col + 3))).addClass("valid");
			}
		}
		if(col - 3 > 0 && $(document.getElementById("button" + row + (col - 3))).hasClass("layer0") == false){
			$(document.getElementById("button" + row + (col - 3))).prop("disabled", false);
			$(document.getElementById("button" + row + (col - 3))).addClass("valid");
		}
		if(col + 3 <= boardSize && $(document.getElementById("button" + row + (col + 3))).hasClass("layer0") == false){
			$(document.getElementById("button" + row + (col + 3))).prop("disabled", false);
			$(document.getElementById("button" + row + (col + 3))).addClass("valid");
		}
		if(row + 3 <= boardSize){
			if(col - 3 > 0 && $(document.getElementById("button" + (row + 3) + (col - 3))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 3) + (col - 3))).prop("disabled", false);
				$(document.getElementById("button" + (row + 3) + (col - 3))).addClass("valid");
			}
			if($(document.getElementById("button" + (row + 3) + col)).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 3) + col)).prop("disabled", false);
				$(document.getElementById("button" + (row + 3) + col)).addClass("valid");
			}
			if(col + 3 <= boardSize && $(document.getElementById("button" + (row + 3) + (col + 3))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 3) + (col + 3))).prop("disabled", false);
				$(document.getElementById("button" + (row + 3) + (col + 3))).addClass("valid");
			}
		}
	}

	// for 4
	if(button.innerHTML == "four"){
		if(row - 4 > 0){
			if(col - 4 > 0 && $(document.getElementById("button" + (row - 4) + (col - 4))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 4) + (col - 4))).prop("disabled", false);
				$(document.getElementById("button" + (row - 4) + (col - 4))).addClass("valid");
			}
			if($(document.getElementById("button" + (row - 4) + col)).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 4) + col)).prop("disabled", false);
				$(document.getElementById("button" + (row - 4) + col)).addClass("valid");
			}
			if(col + 4 <= boardSize && $(document.getElementById("button" + (row - 4) + (col + 4))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 4) + (col + 4))).prop("disabled", false);
				$(document.getElementById("button" + (row - 4) + (col + 4))).addClass("valid");
			}
		}
		if(col - 4 > 0 && $(document.getElementById("button" + row + (col - 4))).hasClass("layer0") == false){
			$(document.getElementById("button" + row + (col - 4))).prop("disabled", false);
			$(document.getElementById("button" + row + (col - 4))).addClass("valid");
		}
		if(col + 4 <= boardSize && $(document.getElementById("button" + row + (col + 4))).hasClass("layer0") == false){
			$(document.getElementById("button" + row + (col + 4))).prop("disabled", false);
			$(document.getElementById("button" + row + (col + 4))).addClass("valid");
		}
		if(row + 4 <= boardSize){
			if(col - 4 > 0 && $(document.getElementById("button" + (row + 4) + (col - 4))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 4) + (col - 4))).prop("disabled", false);
				$(document.getElementById("button" + (row + 4) + (col - 4))).addClass("valid");
			}
			if($(document.getElementById("button" + (row + 4) + col)).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 4) + col)).prop("disabled", false);
				$(document.getElementById("button" + (row + 4) + col)).addClass("valid");
			}
			if(col + 4 <= boardSize && $(document.getElementById("button" + (row + 4) + (col + 4))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 4) + (col + 4))).prop("disabled", false);
				$(document.getElementById("button" + (row + 4) + (col + 4))).addClass("valid");
			}
		}
	}

	// for Knight
	if(button.innerHTML == "knight"){
		if(row - 2 > 0){
			if(col - 1 > 0 && $(document.getElementById("button" + (row - 2) + (col - 1))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 2) + (col - 1))).prop("disabled", false);
				$(document.getElementById("button" + (row - 2) + (col - 1))).addClass("valid");
			}
			if(col + 1 <= boardSize && $(document.getElementById("button" + (row - 2) + (col + 1))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 2) + (col + 1))).prop("disabled", false);
				$(document.getElementById("button" + (row - 2) + (col + 1))).addClass("valid");
			}
		}
		if(row - 1 > 0){
			if(col - 2 > 0 && $(document.getElementById("button" + (row - 1) + (col - 2))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 1) + (col - 2))).prop("disabled", false);
				$(document.getElementById("button" + (row - 1) + (col - 2))).addClass("valid");
			}
			if(col + 2 <= boardSize && $(document.getElementById("button" + (row - 1) + (col + 2))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row - 1) + (col + 2))).prop("disabled", false);
				$(document.getElementById("button" + (row - 1) + (col + 2))).addClass("valid");
			}
		}
		if(row + 1 > 0){
			if(col - 2 > 0 && $(document.getElementById("button" + (row + 1) + (col - 2))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 1) + (col - 2))).prop("disabled", false);
				$(document.getElementById("button" + (row + 1) + (col - 2))).addClass("valid");
			}
			if(col + 2 <= boardSize && $(document.getElementById("button" + (row + 1) + (col + 2))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 1) + (col + 2))).prop("disabled", false);
				$(document.getElementById("button" + (row + 1) + (col + 2))).addClass("valid");
			}
		}
		if(row + 2 > 0){
			if(col - 1 > 0 && $(document.getElementById("button" + (row + 2) + (col - 1))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 2) + (col - 1))).prop("disabled", false);
				$(document.getElementById("button" + (row + 2) + (col - 1))).addClass("valid");
			}
			if(col + 1 <= boardSize && $(document.getElementById("button" + (row + 2) + (col + 1))).hasClass("layer0") == false){
				$(document.getElementById("button" + (row + 2) + (col + 1))).prop("disabled", false);
				$(document.getElementById("button" + (row + 2) + (col + 1))).addClass("valid");
			}
		}
	}

	// for Rook
	if(button.innerHTML == "rook"){
		if($(document.getElementById("button1" + col)).hasClass("layer0") == false){
			$(document.getElementById("button1" + col)).prop("disabled", false);
			$(document.getElementById("button1" + col)).addClass("valid");
		}
		if($(document.getElementById("button" + boardSize + col)).hasClass("layer0") == false){
			$(document.getElementById("button" + boardSize + col)).prop("disabled", false);
			$(document.getElementById("button" + boardSize + col)).addClass("valid");
		}
		if($(document.getElementById("button" + row + "1")).hasClass("layer0") == false){
			$(document.getElementById("button" + row + "1")).prop("disabled", false);
			$(document.getElementById("button" + row + "1")).addClass("valid");
		}
		if($(document.getElementById("button" + row + boardSize)).hasClass("layer0") == false){
			$(document.getElementById("button" + row + boardSize)).prop("disabled", false);
			$(document.getElementById("button" + row + boardSize)).addClass("valid");
		}
	}

	// for Bishop
	if(button.innerHTML == "bishop"){
		findDiagMoves(boardSize, row, col);
	}

	// for Queen
	if(button.innerHTML == "queen"){
		findDiagMoves(boardSize, row, col);
		if($(document.getElementById("button1" + col)).hasClass("layer0") == false){
			$(document.getElementById("button1" + col)).prop("disabled", false);
			$(document.getElementById("button1" + col)).addClass("valid");
		}
		if($(document.getElementById("button" + boardSize + col)).hasClass("layer0") == false){
			$(document.getElementById("button" + boardSize + col)).prop("disabled", false);
			$(document.getElementById("button" + boardSize + col)).addClass("valid");
		}
		if($(document.getElementById("button" + row + "1")).hasClass("layer0") == false){
			$(document.getElementById("button" + row + "1")).prop("disabled", false);
			$(document.getElementById("button" + row + "1")).addClass("valid");
		}
		if($(document.getElementById("button" + row + boardSize)).hasClass("layer0") == false){
			$(document.getElementById("button" + row + boardSize)).prop("disabled", false);
			$(document.getElementById("button" + row + boardSize)).addClass("valid");
		}
		
	}

	// for Wildcard
	if(button.innerHTML == "wildcard"){
		for(i = 1; i <= boardSize; i++){
			for(j = 1; j <= boardSize; j++){
				if($(document.getElementById("button" + i + j)).hasClass("layer0") == false){
					$(document.getElementById("button" + i + j)).prop("disabled", false);
					$(document.getElementById("button" + i + j)).addClass("valid");
				}
			}
		}
	}

	$(document.getElementById(button.id)).prop("disabled", true);
	$(document.getElementById(button.id)).removeClass("valid");
}
function findDiagMoves(boardSize, rowNum, colNum){
	var rowInc = 1;
	var colInc = 1;

	// top-left tile
	if(rowNum != 1 && colNum != 1){
		while(rowNum - rowInc >= 1 && colNum - colInc >= 1){
			if(rowNum - rowInc == 1){
				if($(document.getElementById("button1" + (colNum - colInc))).hasClass("layer0") == false){
					$(document.getElementById("button1" + (colNum - colInc))).prop("disabled", false);
					$(document.getElementById("button1" + (colNum - colInc))).addClass("valid");
				}
			}
			else if(colNum - colInc == 1){
				if($(document.getElementById("button" + (rowNum - rowInc) + "1")).hasClass("layer0") == false){
					$(document.getElementById("button" + (rowNum - rowInc) + "1")).prop("disabled", false);
					$(document.getElementById("button" + (rowNum - rowInc) + "1")).addClass("valid");
				}
			}
			rowInc++;
			colInc++;
		}
	}
	rowInc = 1;
	colInc = 1;
	// top-right tile
	if(rowNum != 1 && colNum != boardSize){
		while(rowNum - rowInc >= 1 && colNum + colInc <= boardSize){
			if(rowNum - rowInc == 1){
				if($(document.getElementById("button1" + (colNum + colInc))).hasClass("layer0") == false){
					$(document.getElementById("button1" + (colNum + colInc))).prop("disabled", false);
					$(document.getElementById("button1" + (colNum + colInc))).addClass("valid");
				}
			}
			else if(colNum + colInc == boardSize){
				if($(document.getElementById("button" + (rowNum - rowInc) + boardSize)).hasClass("layer0") == false){
					$(document.getElementById("button" + (rowNum - rowInc) + boardSize)).prop("disabled", false);
					$(document.getElementById("button" + (rowNum - rowInc) + boardSize)).addClass("valid");
				}
			}
			rowInc++;
			colInc++;
		}
	}
	rowInc = 1;
	colInc = 1;
	// bottom-left tile
	if(rowNum != boardSize && colNum != 1){
		while(rowNum + rowInc <= boardSize && colNum - colInc >= 1){
			if(rowNum + rowInc == boardSize){
				if($(document.getElementById("button" + boardSize + (colNum - colInc))).hasClass("layer0") == false){
					$(document.getElementById("button" + boardSize + (colNum - colInc))).prop("disabled", false);
					$(document.getElementById("button" + boardSize + (colNum - colInc))).addClass("valid");
				}
			}
			else if(colNum - colInc == 1){
				if($(document.getElementById("button" + (rowNum + rowInc) + "1")).hasClass("layer0") == false){
					$(document.getElementById("button" + (rowNum + rowInc) + "1")).prop("disabled", false);
					$(document.getElementById("button" + (rowNum - rowInc) + "1")).addClass("valid");
				}
			}
			rowInc++;
			colInc++;
		}
	}
	rowInc = 1;
	colInc = 1;
	// bottom-right tile
	if(rowNum != boardSize && colNum != boardSize){
		while(rowNum + rowInc <= boardSize && colNum + colInc <= boardSize){
			if(rowNum + rowInc == boardSize){
				if($(document.getElementById("button" + boardSize + (colNum + colInc))).hasClass("layer0") == false){
					$(document.getElementById("button" + boardSize + (colNum + colInc))).prop("disabled", false);
					$(document.getElementById("button" + boardSize + (colNum + colInc))).addClass("valid");
				}
			}
			else if(colNum + colInc == boardSize){
				if($(document.getElementById("button" + (rowNum + rowInc) + boardSize)).hasClass("layer0") == false){
					$(document.getElementById("button" + (rowNum + rowInc) + boardSize)).prop("disabled", false);
					$(document.getElementById("button" + (rowNum + rowInc) + boardSize)).addClass("valid");
				}
			}
			rowInc++;
			colInc++;
		}
	}
}
function decreaseLayer(button){
	if(button.className.substring(button.className.length - 1, button.className.length) == "1"){
		button.className = "layer0";
	}
	if(button.className.substring(button.className.length - 1, button.className.length) == "2"){
		button.className = button.innerHTML + "1";
	}
	if(button.className.substring(button.className.length - 1, button.className.length) == "3"){
		button.className = button.innerHTML + "2";
	}
}
