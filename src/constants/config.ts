export const DEV_MODE = 'development';
export const PROD_MODE = 'production';
export const TEST_MODE = 'test';

type ConfigType = {
    [DEV_MODE]: string;
    [PROD_MODE]: string;
    [TEST_MODE]: string;
};

const mode = DEV_MODE;

const host: ConfigType = {
    [DEV_MODE]: 'http://127.0.0.1:3000',
    [PROD_MODE]: '',
    [TEST_MODE]: '',
};

const apiServerHost: ConfigType = {
    [DEV_MODE]: 'http://ec2-3-129-211-5.us-east-2.compute.amazonaws.com',
    [PROD_MODE]: 'http://ec2-3-129-211-5.us-east-2.compute.amazonaws.com',
    [TEST_MODE]: 'http://ec2-3-129-211-5.us-east-2.compute.amazonaws.com',
};

const apiServerLoginUrl: ConfigType = {
    [DEV_MODE]: '/login',
    [PROD_MODE]: '/login',
    [TEST_MODE]: '/login',
};

const apiServeEmailCheckUrl: ConfigType = {
    [DEV_MODE]: '/email-status',
    [PROD_MODE]: '/email-status',
    [TEST_MODE]: '/email-status',
};

const apiJoinUrl: ConfigType = {
    [DEV_MODE]: '/join',
    [PROD_MODE]: '/join',
    [TEST_MODE]: '/join',
};

const apiWriteReportUrl: ConfigType = {
    [DEV_MODE]: '/regist',
    [PROD_MODE]: '/regist',
    [TEST_MODE]: '/regist',
};

const apiServerReportUrl: ConfigType = {
    [DEV_MODE]: '/report',
    [PROD_MODE]: '/report',
    [TEST_MODE]: '/report',
};

const apiServerReportsUrl: ConfigType = {
    [DEV_MODE]: '/reports',
    [PROD_MODE]: '/reports',
    [TEST_MODE]: '/reports',
};

const apiEmpathyReportUrl: ConfigType = {
    [DEV_MODE]: '/empathy',
    [PROD_MODE]: '/empathy',
    [TEST_MODE]: '/empathy',
};
const apiSupportReportUrl: ConfigType = {
    [DEV_MODE]: '/support',
    [PROD_MODE]: '/support',
    [TEST_MODE]: '/support',
};

export const MODE = process.env.NODE_ENV || mode;
export const HOST = host[MODE];
export const API_SERVER_HOST = apiServerHost[MODE];
export const API_LOGIN_URL = apiServerHost[MODE] + apiServerLoginUrl[MODE];
export const API_EMAILCHECK_URL =
    apiServerHost[MODE] + apiServeEmailCheckUrl[MODE];
export const API_JOIN_URL = apiServerHost[MODE] + apiJoinUrl[MODE];
export const API_VIEW_REPORT_URL =
    apiServerHost[MODE] + apiServerReportUrl[MODE];
export const API_REPORT_LIST_URL =
    apiServerHost[MODE] + apiServerReportsUrl[MODE];
export const API_WRITE_REPORT_URL =
    apiServerHost[MODE] + apiWriteReportUrl[MODE];
export const API_REPORT_RECOMMEND_URL =
    apiServerHost[MODE] + apiEmpathyReportUrl[MODE];
export const API_REPORT_SUPPORT_URL =
    apiServerHost[MODE] + apiSupportReportUrl[MODE];
