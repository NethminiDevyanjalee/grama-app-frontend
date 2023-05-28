import { Base_URL } from '../config/api.js';

export async function sendMessage(accessToken, message) {

    const apiUrl = Base_URL + '/sendMessage';         
    const queryParams = `?user_message=${encodeURIComponent(message)}`;
    const url = apiUrl + queryParams;
    const authHeader = 'Bearer ' + accessToken;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
        'Authorization': authHeader,
        'accept': 'text/plain'
    },
    });
    return response;
}
