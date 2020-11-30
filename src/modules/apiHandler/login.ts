/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';

import { API_LOGIN_URL } from '../../constants/config';
import { LOGIN_ERROR } from '../../constants/error';
import { ServerResponse, errorHandler } from './server';

export interface LoginResponse {
    token: string;
}

export default function loginHandler(email: string, password: string) {
    const data = { email, password };

    return axios
        .post<ServerResponse>(API_LOGIN_URL, data)
        .then(res => res.data.data as LoginResponse)
        .catch(error => errorHandler(error, LOGIN_ERROR));
}
