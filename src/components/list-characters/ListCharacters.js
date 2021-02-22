import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Character from '../character/Character';
import { getCharacters } from '../../api/API';

import './list-characters.css';

export default function() {
    let [listCharacters, setListCharacters] = useState([]);
    let [page, setPage] = useState(1);
    let [loading, setLoading] = useState(true);

    const handleScroll = (event) => {
        // typeScript
        let { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

        if (page !== 34) {
            if (scrollHeight - scrollTop <= clientHeight + 5) {
                setPage(next => next + 1);
            }
        } else {
            event.stopPropagation();
        }
    };

    useEffect(() => {
        let addCharacters = async()  => {
            let  setCharacters = await getCharacters(page);
            setLoading(true);
            setListCharacters(next => [...next, ...setCharacters.results]);
            setLoading(false);
        };
        addCharacters();
    }, [page]);

    let dataListCharacters = listCharacters.map((item, i) => {
        return (
            <li
                className="list-characters__item"
                key={i}
            >
                <Link
                    to={ `/character-info/${item.id}`}
                    className="list-characters__link-item"
                >
                    <Character
                        data={item}
                    ></Character>
                </Link>
            </li>
        )
    });

    return (
        <div className="characters" onScroll={handleScroll}>
            <div className="container">
                <ul className="characters__list-characters list-characters">
                    { dataListCharacters }
                </ul>
            </div>
            { loading && <div className="characters__loading">Загрузка...</div> }
        </div>
    )
}
