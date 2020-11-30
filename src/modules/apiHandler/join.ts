/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';

import { API_USER_URL, API_EMAILCHECK_URL } from '../../constants/config';
import { JOIN_ERROR } from '../../constants/error';
import { ServerResponse, errorHandler } from './server';

export function joinHandler(
    user_name: string,
    email: string,
    password: string,
    birth: string,
    phone: string,
    school: string,
    address: string,
) {
    const data = { user_name, email, password, birth, phone, school, address };

    return axios
        .post<ServerResponse>(API_USER_URL, data)
        .then(res => res.data.data)
        .catch(error => errorHandler(error, JOIN_ERROR));
}

export function emailCheckHandler(email: string) {
    const data = { email };

    return axios
        .post<ServerResponse>(API_EMAILCHECK_URL, data)
        .then(res => res.data.data)
        .catch(error => errorHandler(error, JOIN_ERROR));
}
