import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import PATH from './constants/path';
import Footer from './components/Footer';

import * as pages from './pages';

import './styles/main.scss';

function App(): JSX.Element {
    return (
        <div className="App">
            <pages.Loading />
            <BrowserRouter>
                <Switch>
                    <Route path={PATH.store} component={pages.Store} />
                    <Route path={PATH.join} component={pages.Join} />
                    <Route path={PATH.list} component={pages.List} />
                    <Route path={PATH.login} component={pages.Login} />
                    <Route path={PATH.main} component={pages.Main} />
                    <Route path={PATH.mypage} component={pages.MyPage} />
                    <Route path={PATH.report} component={pages.Report} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
