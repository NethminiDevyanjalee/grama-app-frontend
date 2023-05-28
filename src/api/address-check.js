import { Base_URL } from '../config/api.js';

export async function addressCheck(accessToken, id, address) {

    const apiUrl = Base_URL + '/addresscheck';         
    const idQueryParam = `?userId=${id}`;
    const addressQueryParam = `&address=${address}`;
    const url = apiUrl + idQueryParam + addressQueryParam;
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
