import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
const [turn, setTurn] = useState("X")

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
  setSquares(array)

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