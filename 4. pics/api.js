import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID NyHYrVe67X6nUPhZ8CPhfjQW-R2N6Q9p1YWs9ozrCQM'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export default searchImages;