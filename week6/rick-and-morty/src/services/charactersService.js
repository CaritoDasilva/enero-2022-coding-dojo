const getAllCharacters = async () => {
    try {
        let characters = await fetch('https://rickandmortyapi.com/api/character');
        return characters;

    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    getAllCharacters,
}