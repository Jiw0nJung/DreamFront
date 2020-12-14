export const REPORT_ID = 'report_id';

export const PATH = {
    main: '/',
    join: '/join',
    list: '/list',
    login: '/login',
    mypage: '/mypage',
    store: '/store',
    reportdetail: `/report/:${REPORT_ID}`,
    report: `/report`,
    writereport: `/writereport`,
};

export default PATH;
