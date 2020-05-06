import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware } from 'redux'; // storeを作成するための関数,redux-thunkを使うための関数
import { Provider } from 'react-redux'; // 作成したstoreを全componentに渡すための機能を持つ
import thunk from 'redux-thunk' // ミドルウェア
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './index.css';
import reducer from './reducers';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import * as serviceWorker from './serviceWorker';

// デバッグの設定
const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
// reducerをもとにstoreを作成
// アプリ内で唯一ののstore
// 全てのstateが集約される
const store = createStore(reducer , enhancer)

ReactDOM.render(

  // material-uiを使えるようにする
  <MuiThemeProvider>
    {/* アプリ内の全てのcomponentでstoreを使用できるようにする
        既存のcomponentをProviderでラッピングし、store属性に作成したstoreを渡す */}
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* ルーティングの設定 */}
          <Route path="/events/new" component={EventsNew} />
          <Route path="/events/:id" component={EventsShow} />
          <Route exact path="/" component={EventsIndex} />
          <Route exact path="/events" component={EventsIndex} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
