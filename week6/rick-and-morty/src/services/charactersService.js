const axios = require('axios');

const getAllCharacters = async () => {
    try {
        let characters = await axios.get('https://rickandmortyapi.com/api/character');
        return characters.data;

    } catch(err) {
        console.log(err);
    }
}

const getSingleCharacter = async (id) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        return response.data;
    } catch(err) {
        return err;
    }
}

module.exports = {
    getAllCharacters,
    getSingleCharacter,
}