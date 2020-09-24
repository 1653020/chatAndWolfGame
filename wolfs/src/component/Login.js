import React, { useState, useEffect } from 'react'
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { LoginAction } from '../actions/auth'
import { useDispatch } from 'react-redux'
import { Avatar, Button } from 'antd';
import Particles from 'react-particles-js';

const Login = () => {

    const [userName, setUserName] = useState(null)
    const dispatch = useDispatch()

    const loginHandle = () => {
        if (userName !== '' && userName) {
            const action = LoginAction(userName)
            dispatch(action)
            localStorage.setItem('isLogin', true)
            localStorage.setItem('userName', userName)
        }
        else window.alert('Please input UserName!')
    }

    const handleOnChangeUserName = (value) => {
        setUserName(value)
    }

    return (
        <>
            <div className='background' />
            <Particles style={{ width: '100%', height: '100%' }}
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} />
            <div className='loginForm'>
                <Avatar size={64} icon={<UserOutlined />} />
                <h1>ĐMM ĐẠT</h1>

                <h2>Login</h2>
                <div>
                    <Input placeholder="Name" prefix={<UserOutlined />} onChange={(e) => handleOnChangeUserName(e.target.value)} onPressEnter={loginHandle} />
                </div>
                <Button size='large' onClick={loginHandle} type="primary">Go</Button>
            </div>
        </>
    )
}

export default Login