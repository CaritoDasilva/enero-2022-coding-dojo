const axios = require('axios');

const getAllBranchOffices = async () => {
    try {

        const response = await axios.get('http://localhost:8000/api/branchoffice');
        return response.data;

    } catch(err) {
        return err;
    }
} 

const createNewBranchOffice = async (data) => {
    try {
        console.log('toy pasando', data)
        const response = await axios.post('http://localhost:8000/api/branchoffice/new', { data });
        return response.data;

    } catch(err) {
        return err;
    }
}

const getOneBranchOffice = async (id) => {
     try {

        const response = await axios.get(`http://localhost:8000/api/branchoffice/${id}`);
        return response.data;

    } catch(err) {
        return err;
    }
}

const deleteOneBranchOffice = async (id) => {
    try {

        const response = await axios.delete(`http://localhost:8000/api/branchoffice/delete/${id}`);
        return response.data;

    } catch(err) {
        return err;
    }
}

module.exports = {
    getAllBranchOffices,
    createNewBranchOffice,
    getOneBranchOffice,
    deleteOneBranchOffice,
}