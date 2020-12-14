/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';

import { API_JOIN_URL, API_EMAILCHECK_URL } from '../../constants/config';
import { JOIN_ERROR } from '../../constants/error';
import { ServerResponse, errorHandler } from './server';

export function joinHandler(
    name: string,
    email: string,
    password: string,
    birth: string,
    phone: string,
    school: string,
    address: string,
    detailAddress: string,
) {
    const data = {
        name,
        email,
        password,
        birth,
        phone,
        school,
        address,
        detailAddress,
    };

    return axios
        .post<ServerResponse>(API_JOIN_URL, data)
        .then(res => res.status)
        .catch(error => errorHandler(error, JOIN_ERROR));
}

export function emailCheckHandler(email: string) {
    const url = API_EMAILCHECK_URL + '?email=' + email;

    return axios
        .get(url)
        .then(res => res.data)
        .catch(error => errorHandler(error, JOIN_ERROR));
}
