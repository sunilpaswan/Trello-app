import React from 'react'
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather'
import Chip from '../Chip/Chip'
import './Card.css'

function Card() {
    return (
        <div className=' card'>
            <div className='card_top'>
                <div className='card_top_labels'>
                    <Chip text="Front-end" color='green'/>
                    

                </div>
                <MoreHorizontal/>
            </div>
            <div className='card_title'>
                hello i am working 
            </div>
            <div className='card_footer'>
                <p><Clock/>10 may</p>
                <p>
                    <CheckSquare/>
                    1/4
                </p>
            </div>
        </div>
    )
}

export default Card