const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/**
 * @description Login Token의 유효성을 검증합니다.
 */
export function validateLoginToken(token: string | null) {
    if (!token) return false;
    return UUID.test(token);
}

/**
 * @description CSRF State의 유효성을 검증합니다.
 */
export function validateState(state: string | string[] | null) {
    if (typeof state !== 'string') return false;
    return UUID.test(state);
}

/**
 * @description Auth State의 유효성을 검증합니다.
 */
export function validateCode(code: string | string[] | null) {
    if (typeof code !== 'string') return false;
    return UUID.test(code);
}
