import React, { useEffect, useState } from "react";
import { getAllCharacters } from '../services/charactersService';
const Characters = () => {
    const [characters, setCharacters] = useState([]);

    const getApiResponse = async () => {
        const response = await getAllCharacters();
        const charactersApi = await response.json();
        console.log("🚀 ~ file: Characters.js ~ line 7 ~ getApiResponse ~ characters", characters)
        setCharacters(charactersApi.results);
        // catch(err => console.log(err));
    }

    useEffect(() => {
        getApiResponse();
    }, []);

    return (
        <div>
            <h1>Resultados API Rick and Morty</h1>
            {characters.map((character, i) => 
                <div key={i}>
                    <h1>{character.name}</h1>
                    <img src={character.image} alt="" />
                </div>
            )}
        </div>
    )
}

export default Characters;