import { Base_URL } from '../config/api.js';

export async function policeCheck(accessToken, id) {

    const apiUrl = Base_URL + '/policecheck';         
    const queryParams = `?userId=${id}`;
    const url = apiUrl + queryParams;
    const authHeader = 'Bearer ' + accessToken;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
        'Authorization': authHeader,
        'accept': '*/*'
    },
    });
    return response;
}
