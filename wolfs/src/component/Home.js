import React, { useState, useEffect } from 'react'
import { LogOutAction } from '../actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Button, Avatar, Tooltip, Switch } from 'antd';
import io from 'socket.io-client'
import ScrollToBottom from 'react-scroll-to-bottom'
import { SettingFilled } from '@ant-design/icons'
import Drawer from './Drawer'

let socket;

const Home = () => {

    const userName = useSelector(state => state.auth.userName)
    const dispatch = useDispatch();
    const ENDPOINT = 'ylas2712.ddns.net:5000'

    const [messages, setMessages] = useState([])
    const [messageTemp, setMessageTemp] = useState('')
    const [listUser, setListUser] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false)
    const [visible, setVisible] = useState(true)
    const [darkTheme, setDarkThem] = useState('')

    useEffect(() => {
        socket = io(ENDPOINT)
        socket.emit('join', userName, (error) => {
            if (error) {
                window.alert('Please choose another Username')
                handleLogOut()
            }
        })

        return () => {
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        socket.on('message', (message) => {
            const temp = messages
            temp.push(message)
            setMessages([].concat(temp))
        })

        socket.on('getAllUser', (data) => {
            setListUser([].concat(data.user))
            if (data.admin === userName.toUpperCase()) setIsAdmin(true)
        })

        socket.on('updateUser', (data) => {
            setListUser([].concat(data.user))
            if (data.admin === userName.toUpperCase()) setIsAdmin(true)
        })

        socket.on('disconnect', () => {
            window.location.reload()
        })
        // eslint-disable-next-line
    }, [])

    const handleLogOut = () => {
        socket.emit('disconnected', userName)
        socket.off();
        const action = LogOutAction()
        dispatch(action)
        localStorage.removeItem('isLogin')
    }

    const eventSendMessage = () => {
        if (messageTemp) {
            socket.emit('sendMessage', messageTemp, () => {
            })

            setMessageTemp('')
        }
    }

    const handleChatInput = (value) => {
        setMessageTemp(value)
    }

    const closeDrawer = () => {
        setVisible(false)
    }

    const settingClick = () => {
        setVisible(true)
    }

    const handleDarkTheme = () => {
        if (darkTheme === '')
            setDarkThem('dark')
        else
            setDarkThem('')
    }

    return (
        <div className={`contentContainer ${darkTheme}`} >
            <Drawer visible={visible} onClose={closeDrawer} />
            <div className='headerName' style={{ padding: '20px', display: 'flex', flexDirection: 'row' }}>
                <h2>
                    Hello {userName}
                </h2>
                <div>
                    <Switch style={{ margin: '0 10px' }} onChange={handleDarkTheme} />
                    <Button onClick={handleLogOut}>Đăng xuất</Button>
                </div>
            </div>
            <div className='listUser'>
                <Avatar.Group maxCount={5} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                    {listUser ? listUser.map((data, index) => <Tooltip key={index} title={data.name} placement="top">
                        <Avatar style={{ backgroundColor: `${data.color}` }}>{data.name}</Avatar>
                    </Tooltip>) : <></>}

                </Avatar.Group>
                {isAdmin ? <div>
                    <Button onClick={settingClick} style={{ margin: '0 5px' }} icon={<SettingFilled />} />
                    <Button type="primary">Start</Button>
                </div> : <></>}
            </div>
            <ScrollToBottom className={'chatBox'}>
                {messages ? messages.map((data, index) => {
                    if (data.user === 'admin') {
                        return (
                            <li key={index}>
                                <div className='textMessageAdmin'>
                                    {data.text}
                                </div>
                            </li>
                        )
                    }
                    else
                        if (data.user === userName.toUpperCase()) {
                            return (
                                <li key={index}>
                                    <div className='textMessageCurrent'>
                                        {data.text}
                                    </div>
                                    <div style={{ backgroundColor: `${data.color}` }} className='userNameChatCurrent'>
                                        {data.user.substring(0, 1).toUpperCase()}
                                    </div>
                                </li>
                            )
                        }
                        else {
                            return (
                                <li key={index}>
                                    <div style={{ backgroundColor: `${data.color}` }} className='userNameChat'>
                                        {data.user.substring(0, 1).toUpperCase()}
                                    </div>
                                    <div className='textMessage'>
                                        {data.text}
                                    </div>
                                </li>
                            )
                        }
                }) : <></>}
            </ScrollToBottom>

            <div className={'chatInput'}>
                <Input
                    placeholder="Chat"
                    size="large"
                    onChange={(e) => handleChatInput(e.target.value)}
                    value={messageTemp}
                />
                <Button onClick={eventSendMessage} type="primary">Send</Button>
            </div>
        </div>
    )
}
export default Home