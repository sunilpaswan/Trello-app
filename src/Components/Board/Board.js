import React from 'react'
import { MoreHorizontal } from 'react-feather'
import Card from '../Card/Card'
import './Board.css'
import Editable from '../Editable/Editable'
import  Dropdown  from '../Dropdown/Dropdown'

function Board() {
    return (
        <div className='Board'>
        <div className='board_top'>
            <p className='board_top_title'>To Do <span>   2</span></p>
            <div className='board_top_more'>
            <MoreHorizontal/>
            <Dropdown>
                <div className='board_dropdown'>
                <p>Delete Board</p>
                </div>
            </Dropdown>
            </div>
        </div>
        <div className='board_cards'>
            <Card/>
            <Card/>
            
            
            <Editable 
            displayclass="board_cards_add"
            text="Add Card"
            placeholder="Enter Card Title"/>
            



        </div>
        </div>
    )
}

export default Board