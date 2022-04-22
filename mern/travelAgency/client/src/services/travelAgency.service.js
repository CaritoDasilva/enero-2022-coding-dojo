import axios from "axios";

export const createNewTravelAgency = async (data) => {
    console.log('toy pasando', data)
    const response = await axios.post('http://localhost:8000/api/agency/new', { data });
    return response.data;
}