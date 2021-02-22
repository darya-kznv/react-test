import React from 'react';
import './character.css';

function Character(props) {
    return (
        <div className='character'>
            <div className="character__img">
                <img className='img-avatar' src={props.data.image} alt="avatar"/>
            </div>
            <div className="character__info">
                <div className="character__name">
                    { props.data.name }
                </div>
            </div>
        </div>
    )
}

export default Character;
