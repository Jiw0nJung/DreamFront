export const DEV_MODE = 'development';
export const PROD_MODE = 'production';
export const TEST_MODE = 'test';

type ConfigType = {
    [DEV_MODE]: string;
    [PROD_MODE]: string;
    [TEST_MODE]: string;
};

const mode = DEV_MODE;

const loginSessionKey: ConfigType = {
    [DEV_MODE]: '/login',
    [PROD_MODE]: '/login',
    [TEST_MODE]: '/login',
};

const host: ConfigType = {
    [DEV_MODE]: 'http://127.0.0.1:3000',
    [PROD_MODE]: '',
    [TEST_MODE]: '',
};

const apiServerHost: ConfigType = {
    [DEV_MODE]: 'http://118.67.135.118:5000',
    [PROD_MODE]: 'http://118.67.135.118:5000',
    [TEST_MODE]: 'http://118.67.135.118:5000',
};

const apiServerLoginUrl: ConfigType = {
    [DEV_MODE]: '/login',
    [PROD_MODE]: '/login',
    [TEST_MODE]: '/login',
};

const apiServeEmailCheckUrl: ConfigType = {
    [DEV_MODE]: '/emailCheck',
    [PROD_MODE]: '/emailCheck',
    [TEST_MODE]: '/emailCheck',
};

const apiServerUserUrl: ConfigType = {
    [DEV_MODE]: '/user',
    [PROD_MODE]: '/user',
    [TEST_MODE]: '/user',
};

const apiServerUsersReportUrl: ConfigType = {
    [DEV_MODE]: '/user/report/history',
    [PROD_MODE]: '/user/report/history',
    [TEST_MODE]: '/user/report/history',
};

const apiServerReportUrl: ConfigType = {
    [DEV_MODE]: '/report',
    [PROD_MODE]: '/report',
    [TEST_MODE]: '/report',
};

const apiReportRecommendUrl: ConfigType = {
    [DEV_MODE]: '/thrust',
    [PROD_MODE]: '/thrust',
    [TEST_MODE]: '/thrust',
};

export const MODE = process.env.NODE_ENV || mode;
export const LOGIN_SESSION_KEY = loginSessionKey[MODE];
export const HOST = host[MODE];
export const API_SERVER_HOST = apiServerHost[MODE];
export const API_LOGIN_URL = apiServerHost[MODE] + apiServerLoginUrl[MODE];
export const API_EMAILCHECK_URL =
    apiServerHost[MODE] + apiServerLoginUrl[MODE] + apiServeEmailCheckUrl[MODE];
export const API_USER_URL = apiServerHost[MODE] + +apiServerUserUrl[MODE];
export const API_USER_REPORT_URL =
    apiServerHost[MODE] + apiServerUsersReportUrl[MODE];
export const API_REPORT_URL = apiServerHost[MODE] + apiServerReportUrl[MODE];
export const API_REPORT_RECOMMEND_URL =
    apiServerHost[MODE] +
    apiServerReportUrl[MODE] +
    apiReportRecommendUrl[MODE];
