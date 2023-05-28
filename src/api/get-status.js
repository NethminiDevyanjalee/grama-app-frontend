import { Base_URL } from '../config/api.js';

export async function getStatus(accessToken, id, address) {

    const apiUrl = Base_URL + '/getStatus';         
    const queryParam = `?userId=${id}`;
    const url = apiUrl + queryParam;
    const authHeader = 'Bearer ' + accessToken;
    
    const response = await fetch(url, {
        method: 'GET',
        headers: {
        'Authorization': authHeader,
        'accept': 'text/plain'
    },
    });
    return response;
}
