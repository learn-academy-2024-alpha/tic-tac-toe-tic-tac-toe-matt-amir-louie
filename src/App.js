import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
const [turn, setTurn] = useState("X")
const [winner, setWinner] =useState()


const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]




//we need player1s click to be an x. next click after must be player2 with o
const handleGamePlay = (currentSquare) =>{
  if(squares[currentSquare] !== null) return;
    
  let array = [...squares];
  if(turn === "X"){
    array[currentSquare] = "X";
    setTurn("O")
  } else{
    array[currentSquare] = "O"
    setTurn("X")
  }
  checkForWinningCombo(array)
  setSquares(array)

}
  const checkForWinningCombo = (array) => {
  }
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='squares'>
     {squares.map((square, index) => {
       return <Square key={index}
                      square={square} 
                      index={index}
                handleGamePlay={handleGamePlay}
                      />
      })}
    </div>
    </>
  )
}

export default App