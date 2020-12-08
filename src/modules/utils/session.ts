/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * @description Session Storage에 data를 저장합니다.
 */
function saveSessionStorage(key: string, data: string) {
    const item = JSON.stringify(data);
    window.sessionStorage.setItem(key, item);
}

/**
 * @description Session Storage에서 data를 가져옵니다.
 */
function loadSessionStorage(key: string): null | string {
    const item = window.sessionStorage.getItem(key);
    return item && JSON.parse(item);
}

/**
 * @description Session Storage에서 data를 지웁니다.
 */
function deleteSessionStorage(key: string) {
    window.sessionStorage.removeItem(key);
}

/**
 * @description Login Token을 Session Storage에 저장합니다.
 * @param token Login Token
 */
export function saveLoginToken(token: string) {
    saveSessionStorage('dream_login_session', token);
}

/**
 * @description Login Token을 Session Storage에서 가져옵니다.
 */
export function loadLoginToken(): null | string {
    return loadSessionStorage('dream_login_session');
}

/**
 * @description Login Token을 Session Storage에서 삭제합니다.
 */
export function deleteLoginToken() {
    deleteSessionStorage('dream_login_session');
}
