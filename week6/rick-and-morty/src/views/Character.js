import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { getSingleCharacter } from '../services/charactersService';
import styles from './Characters.module.scss';
const Character = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState()

    const getCharacterFromService = async () => {
        const characterResponse = await getSingleCharacter(id);
        console.log("🚀 ~ file: Character.js ~ line 10 ~ getCharacterFromService ~ characterResponse", characterResponse)
        setCharacter(characterResponse)
    }

    useEffect(() => {
        id && getCharacterFromService();
    }, [id]);

    return (
        <div>
            <Link to="/home">Volver</Link>

            <div className={styles.card}>
                <h1>Personaje: {character?.name}</h1>
                <img src={character?.image} alt="" />
                <h3>Especie: {character?.species}</h3>
                <h3>Status: {character?.status}</h3>
            </div>

        </div>
    )
}

export default Character;