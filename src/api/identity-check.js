import { Base_URL } from '../config/api.js';

export async function identityCheck(accessToken, id) {

    const apiUrl = Base_URL + '/identitycheck';         
    const queryParams = `?userId=${id}`;
    const url = apiUrl + queryParams;
    const authHeader = 'Bearer ' + accessToken;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
        'Authorization': authHeader,
        'Accept': '*/*'
    },
    });
    return response;
}
