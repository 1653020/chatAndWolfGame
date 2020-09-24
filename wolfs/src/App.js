import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './component/Login'
import Home from './component/Home'
import { LoginAction } from './actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import 'antd/dist/antd.css';

function App() {

  const isLogin = useSelector(state => state.auth.isLogin)
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.localStorage.getItem('isLogin') && window.localStorage.getItem('userName')) {
      const action = LoginAction(window.localStorage.getItem('userName'))
      dispatch(action)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {isLogin ?
        <div className='mainContainer'>
          <Home />
        </div> :
        <div className='Login'>
          <Login />
        </div>
      }
    </>
  );
}

export default App;
