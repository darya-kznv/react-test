import React, { useEffect, useState } from 'react';
import { getCharacterInfo } from '../../api/API';

import './character-info.css';

function CharacterInfo(props) {
    let [item, setItem] = useState({});
    let [location, setLocation] = useState('');
    let itemId = props.match.params.id;

    useEffect(() => {
       let addCharacterInfo = async() => {
           const item = await getCharacterInfo(itemId);
           const location = item.location;
           setItem(item);
           setLocation(location);
       }
        addCharacterInfo();
    }, []);

    if (Object.keys(item).length === 0) {
        return <div className="character-info__no-data">No data by id: { itemId }</div>
    } else {
        return (
            <div className="character-info">
                <div className="container">
                    <div className="character-info__inner">
                        <div className="character-info__head">
                            <div className="character-info__name">
                                {item.name}
                            </div>
                        </div>
                        <div className="character-info__body">
                            <div className="character-info__img">
                                <img
                                    src={item.image}
                                    className="img-avatar"
                                    alt={'character_' + item.id}
                                />
                            </div>
                            <div className="character-info__text">
                                <div className="character-info__item">
                                    Gender: <span> {item.gender} </span>
                                </div>
                                <div
                                    className="character-info__item"
                                    data-status={item.status}
                                >
                                    <span> {item.status} </span>
                                </div>
                                <div className="character-info__item">
                                    Location: <span> {location.name} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CharacterInfo;
