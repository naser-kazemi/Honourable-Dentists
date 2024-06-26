import axios from 'axios';

const API_URL = 'http://localhost:8000/mymodels/';

export const fetchMyModels = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
        throw error;
    }
};
