import React from 'react'
import './App.css'
import Board from './Components/Board/Board'




function App() {
  return (
    <div className='app'>
      <div className='app_navbar'>
        <h2>Trello</h2>
      </div>

      <div className='app_outer'>
        <div className='app_boards'>
          <Board/>
          <Board/>
          <Board/>
          <Board/>
          
        </div>
      </div>
    </div>
  


  )
}

export default App