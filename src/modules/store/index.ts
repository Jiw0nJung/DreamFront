import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { MODE } from '../../constants/config';

import rootReducer from '../reducer';
import rootSage from '../middlewares/saga';

// Redux Devtool Global Type 설정
type ComposeType = typeof compose;
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: ComposeType;
    }
}

// 개발 환경에선 Redux Devtool을 사용
const composeEnhancers =
    MODE === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose;

// 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();

/**
 * @description Redux Store 생성
 */
export default function configureStore() {
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(sagaMiddleware)),
    );
    sagaMiddleware.run(rootSage);

    // hot-reloading에서 Store가 다시 만들어지는 것을 방지
    if (module.hot) {
        module.hot.accept('../reducer', () =>
            // eslint-disable-next-line global-require
            store.replaceReducer(require('../reducer').default),
        );
    }

    return store;
}
