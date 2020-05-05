import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        'Authorization': 'Client-ID gZMtafzwziczIFgnGVG5ueG2N5DvZlX5shyoWg9mpNw'
    }
})