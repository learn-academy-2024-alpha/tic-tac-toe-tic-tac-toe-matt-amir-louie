import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [turn, setTurn] = useState("X");
	const [winner, setWinner] = useState(null);
	const [checkForWinner, setCheckForWinner] = useState(false);
	
	const winningCombos = [
	    [0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	const checkForWinningCombo = () => {
		winningCombos.forEach((combo) => {
			const [a, b, c] = combo;
			if (squares[a] === "X" && 
          squares[b] === "X" && 
          squares[c] === "X") 
          {			  
				//setWinner("X");
				alert(`X is the winner`)
				restartButt()

			} else if (
				squares[a] === "O" &&
				squares[b] === "O" &&
				squares[c] === "O")
         {			 
				//setWinner("O");
				alert(`O is the winner`)
				restartButt()
			} 
		});
	};
	console.log(winner);
	
	const handleGamePlay = (currentSquare) => {
		if (squares[currentSquare] !== null) return;

		if (turn === "X") {
			squares[currentSquare] = "X";
			setTurn("O");
		} else {
			squares[currentSquare] = "O";
			setTurn("X");
		}
		setSquares(squares);
		checkForWinningCombo();
		checkForWin();
	};

	const checkForWin = () => {
		//check the use state winner 
		//if winner contains value
		//we need it to update our check for win use state
		if (winner !== null){
			setTurn()
			setCheckForWinner(true)
			//alert(`${winner} is the winner`)
			 document.querySelector(".squares").removeAttribute("onClick")}
			// ("squares").addClass("disabledbutton");
	}
	const restartButt = () => {
		setSquares(Array(9).fill(null))
		setTurn("X")
		setWinner(null)
		setCheckForWinner(false)
	}
			
			
			
		





	return (
		<>
			<h1>Tic Tac Toe</h1>
			<div className="squares">
				{squares.map((square, index) => {
					return (
						<Square
							key={index}
							square={square}
							index={index}
							handleGamePlay={handleGamePlay}
							checkForWin={checkForWin}
						/>
						);
					})}
					<button onClick={restartButt}>Restart Game</button>
			</div>
		</>
	);
};

export default App;
