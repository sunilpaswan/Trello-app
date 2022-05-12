import React, { useState } from 'react'
import './App.css'
import Board from './Components/Board/Board'
import Editable from './Components/Editable/Editable'




function App() {
  const [boards, setBoards]= useState(
  [
    {
    id: Date.now() + Math.random()*2,
    title: "To Do",
    cards : [{
      id: Date.now() +Math.random(),
      title: "Card 1",
      tasks: [],
      labels : [{
        text:"frontend",
        color : "blue"
      },
    ],
      desc: "This is the new project please checkout"
     
     

    },
  ],
},
]
  [{
    id: Date.now() + Math.random()*2,
    title: "To Do",
    cards : [{
      id: Date.now() +Math.random(),
      title: "Card 1",
      tasks: [],
      labels : [{
        text:"Backend",
        color : "brown"
      },
    ],
      desc: "This is the new project please checkout"
     

    },
  ],
}]
  );

  return (
    <div className='app'>
      <div className='app_navbar'>
        <h2>Trello</h2>
      </div>

      <div className='app_outer'>
        <div className='app_boards'>
          {
            boards.map((item)=><Board key={item.id}/>)
          }
          <Board/>
          <Board/>
          <div className='app_boards_board'>
          <Editable 
          displayclass="app_boards_board_add"
          text="Add Board"
          placeholder="Enter Board Title"/>
          </div>
          
          
          
          
        </div>
      </div>
    </div>
  


  )
}

export default App