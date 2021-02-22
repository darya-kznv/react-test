import axios from "axios";

export const getCharacters = async page => {
    const characters  = await (
        await axios.get('https://rickandmortyapi.com/api/character', {
            params: {
                page: page
            }
        })
    );
    return characters.data;
};

export const getCharacterInfo = async id => {
    const characterById = await (
        await axios
            .get(`https://rickandmortyapi.com/api/character/${id}`)

    );
    return characterById.data;
};
