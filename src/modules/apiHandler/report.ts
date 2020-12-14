/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';

import {
    API_WRITE_REPORT_URL,
    API_VIEW_REPORT_URL,
    API_REPORT_LIST_URL,
    API_REPORT_RECOMMEND_URL,
    API_REPORT_SUPPORT_URL,
} from '../../constants/config';
import { REPORT_ERROR } from '../../constants/error';
import { ServerResponse, errorHandler } from './server';

export function reportWriteHandler(
    title: string,
    content: string,
    image1: string,
    image2: string,
    image3: string,
    category: string,
    owner: string,
) {
    const data = {
        title,
        content,
        image1,
        image2,
        image3,
        category,
        owner,
    };

    return axios
        .post<ServerResponse>(API_WRITE_REPORT_URL, data)
        .then(res => res.status)
        .catch(error => errorHandler(error, REPORT_ERROR));
}

export function reportSupportHandler(index: string) {
    const url = API_REPORT_SUPPORT_URL + '?index=' + index;

    return axios
        .post(url)
        .then(res => res.data)
        .catch(error => errorHandler(error, REPORT_ERROR));
}

export function reportEmpathyHandler(index: string) {
    const url = API_REPORT_RECOMMEND_URL + '?index=' + index;

    return axios
        .post(url)
        .then(res => res.data)
        .catch(error => errorHandler(error, REPORT_ERROR));
}

export function reportViewHandler(index: string) {
    const url = API_VIEW_REPORT_URL + '?index=' + index;

    return axios
        .get(url)
        .then(res => res.data)
        .catch(error => errorHandler(error, REPORT_ERROR));
}

export function reportListHandler(category: string) {
    const url = API_REPORT_LIST_URL + '?category=' + category;

    return axios
        .get(url)
        .then(res => res.data.reports)
        .catch(error => errorHandler(error, REPORT_ERROR));
}
