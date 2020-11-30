export type ServerError = {
    network: string;
    unknwon: string;
};

export const ERROR_NAME: ServerError = {
    network: 'Network Error',
    unknwon: 'Unknown Error',
};

export const DEFAULT_MESSAGE: ServerError = {
    network: '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
    unknwon: '알 수 없는 오류가 발생했습니다.',
};

/* ------------------------- */
/* API Server Erorr Response */
/* ------------------------- */

export type HandlingCase = { [errorCode: number]: string };

export const LOGIN_ERROR: HandlingCase = {
    40100: '아이디 혹은 비밀번호가 정확하지 않습니다.',
};

export const JOIN_ERROR: HandlingCase = {
    40100: '회원가입 실패다.',
};

export const STATE_ERROR: HandlingCase = {};

export const VERIFY_ERROR: HandlingCase = {
    40100: '인증에 실패했습니다.',
    40401: '잘못된 인증 요청입니다.',
};

export const REWARD_ERROR: HandlingCase = {
    40100: '현재 사용하고 계신 계정이 다른 곳에서 로그인되었습니다.',
    40401: '이벤트에 참여하지 않은 유저입니다.',
    40900: '이미 보상을 수령했습니다.',
};

export const TOKEN_ERROR: HandlingCase = {
    40100: '현재 사용하고 계신 계정이 다른 곳에서 로그인되었습니다.',
};
