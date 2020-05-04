import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; // storeを作成するための関数
import { Provider } from 'react-redux'; // 作成したstoreを全componentに渡すための機能を持つ

import './index.css';
import reducer from './reducers';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// reducerをもとにstoreを作成
// アプリ内で唯一ののstore
// 全てのstateが集約される
const store = createStore(reducer)

ReactDOM.render(
  // アプリ内の全てのcomponentで使用できるようにする
  // 既存のcomponentをProviderでラッピングし、store属性に作成したstoreを渡す
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
