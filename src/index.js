import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import {createStore} from 'redux'
import reducers from './store/reducer'
import Auth from './Auth'
import Comment from './Comment/Comment'
import 'antd/dist/antd.css'
import registerServiceWorker from './registerServiceWorker';
const store = createStore(reducers)

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/login' exact component={Auth}></Route>
                <Route path='/comment' component={Comment}></Route>
                <Redirect to='/login'></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
