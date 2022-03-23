import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getAllCharacters } from '../services/charactersService';
import styles from './Characters.module.scss';
const Characters = () => {
    const [characters, setCharacters] = useState([]);

    const getApiResponse = async () => {
        const response = await getAllCharacters();
        console.log("🚀 ~ file: Characters.js ~ line 8 ~ getApiResponse ~ response", response)
        // const charactersApi = await response.json();
        // console.log("🚀 ~ file: Characters.js ~ line 7 ~ getApiResponse ~ characters", characters)
        setCharacters(response.results);
        // catch(err => console.log(err));
    }

    useEffect(() => {
        getApiResponse();
    }, []);

    return (
        <div>
            <h1>Resultados API Rick and Morty</h1>
            {characters.map((character, i) => 
                <Link key={i} to={`/character/${character.id}`}>
                    <div className={styles.card}>
                            <h1>{character.name}</h1>
                            <img src={character.image} alt="" />                        
                    </div>
                </Link>
            )}
        </div>
    )
}

export default Characters;