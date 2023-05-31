import { Base_URL } from '../config/api.js';

export async function approveDecline(accessToken, id, approved) {

    const apiUrl = Base_URL + '/approveorDeclineCertificate';         
    const idQueryParam = `?userId=${id}`;
    const isApproved = `&approved=${approved}`;
    const url = apiUrl + idQueryParam + isApproved;
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
