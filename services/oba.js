const jwt = require('jsonwebtoken');
const axios = require('axios');

const BASE_URL = 'https://zoeken.oba.nl/api/v1';

const api = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});

function createBearerToken() {
    const secret = process.env.SECRET;
    const publicKey = process.env.PUBLIC_KEY;

    const expiresInMinutes = 15;

    const expirationDate =
        Math.floor(Date.now() / 1000) + expiresInMinutes * 60;

    const payload = {
        key: publicKey,
        exp: expirationDate,
        description: 'HvA_student',
    };

    const token = jwt.sign(payload, secret);

    return `Bearer ${token}`;
}

exports.search = async function (query) {
    const token = createBearerToken();

    const response = await api.get(`/search/?q=${query}&output=json`, {
        headers: { Authorization: token },
    });

    return response.data.results;
};
