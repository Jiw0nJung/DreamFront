/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AxiosError } from 'axios';

import { MODE } from '../../constants/config';
import {
    HandlingCase,
    ERROR_NAME,
    DEFAULT_MESSAGE,
} from '../../constants/error';

export interface ServerResponse {
    status: number;
    data: object;
}

export interface ServerError extends Error {
    status: number;
    code: number;
}

/**
 * @description ServerError Interface를 상속한 타입인지 확인합니다.
 */
export function isServerError(error: any): error is ServerError {
    return (
        typeof error.status === 'number' &&
        typeof error.code === 'number' &&
        typeof error.message === 'string'
    );
}

/**
 * Unknwon Error를 생성합니다.
 */
export function createUnknowError() {
    const unknwonError = new Error() as ServerError;
    unknwonError.status = 500;
    unknwonError.code = 50000;
    unknwonError.name = ERROR_NAME.unknwon;
    unknwonError.message = DEFAULT_MESSAGE.unknwon;

    return unknwonError;
}

/**
 * @description Server Error가 아니면 Unknow Error를 반환하고, 맞으면 파라미터를 그대로 반환합니다.
 */
export function parseServerError(error: Error) {
    if (isServerError(error)) return error;
    return createUnknowError();
}

/**
 * @description Axoios에서 발생한 Error를 처리합니다.
 */
export function errorHandler(error: AxiosError, handling: HandlingCase) {
    if (MODE !== 'production') console.log(error);

    const networkError = new Error() as ServerError;
    networkError.name = ERROR_NAME.network;

    if (error.response) {
        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
        const { code, status } = error.response.data as ServerError;
        networkError.status = status || 500;
        networkError.code = code || 50000;
        networkError.message = handling[code] || DEFAULT_MESSAGE.unknwon;
    } else {
        // 요청이 이루어 졌으나 응답을 받지 못했습니다.
        networkError.status = 500;
        networkError.code = 50000;
        networkError.message = DEFAULT_MESSAGE.network;
    }

    throw networkError;
}
