const axios = require('axios');

export const getAllBranchOffices = async () => {
    try {

        const response = await axios.get('/api/branchoffice');
        return response.data;

    } catch(err) {
        return err;
    }
} 

export const createNewBranchOffice = async (data) => {
    try {
        console.log('toy pasando', data)
        const response = await axios.post('/api/branchoffice/new', { data });
        return response.data;

    } catch(err) {
        return err;
    }
}

export const getOneBranchOffice = async (id) => {
     try {

        const response = await axios.get(`/api/branchoffice/${id}`);
        return response.data;

    } catch(err) {
        return err;
    }
}

export const deleteOneBranchOffice = async (id) => {
    try {

        const response = await axios.delete(`/api/branchoffice/delete/${id}`);
        return response.data;

    } catch(err) {
        return err;
    }
}

export const editOneBranchOffice = async (id, data) => {
console.log("🚀 ~ file: branchOfficeService.js ~ line 48 ~ editOneBranchOffice ~ data", data)
    try {

        const response = await axios.put(`/api/branchoffice/update/${id}`, { data });
        return response.data;

    } catch(err) {
        return err;
    }
}