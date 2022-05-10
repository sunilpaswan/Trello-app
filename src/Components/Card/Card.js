import React from 'react'
import { MoreHorizontal } from 'react-feather'
import Chip from '../Chip/Chip'
import './Card.css'

function Card() {
    return (
        <div className=' card'>
            <div className='card_top'>
                <div className='card_labels'>
                    <Chip text="Front-end" color='green'/>
                    

                </div>
                <MoreHorizontal/>
            </div>
        </div>
    )
}

export default Card