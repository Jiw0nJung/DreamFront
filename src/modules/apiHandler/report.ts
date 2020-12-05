/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';

import { API_REPORT_URL } from '../../constants/config';
import { REPORT_ERROR } from '../../constants/error';
import { ServerResponse, errorHandler } from './server';

export default function reportHandler(
    user_name: string,
    title: string,
    content: string,
    image: string,
    category: string,
    process: string,
) {
    const data = { user_name, title, content, image, category, process };

    return axios
        .post<ServerResponse>(API_REPORT_URL, data)
        .then(res => res.data.data)
        .catch(error => errorHandler(error, REPORT_ERROR));
}
