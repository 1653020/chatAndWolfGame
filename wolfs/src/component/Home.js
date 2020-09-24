import React, { useState, useEffect } from 'react'
import { LogOutAction } from '../actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Button, Avatar, Tooltip } from 'antd';
import io from 'socket.io-client'
import ScrollToBottom from 'react-scroll-to-bottom'

let socket;

const Home = ({ setIsLogin }) => {

    const userName = useSelector(state => state.auth.userName)
    const dispatch = useDispatch();
    const ENDPOINT = 'ylas2712.ddns.net:5000'

    const [messages, setMessages] = useState([])
    const [messageTemp, setMessageTemp] = useState('')
    const [listUser, setListUser] = useState(null)

    useEffect(() => {
        socket = io(ENDPOINT)
        socket.emit('join', userName, () => {

        })

        return () => {
        }
    }, [])

    useEffect(() => {
        socket.on('message', (message) => {
            const temp = messages
            temp.push(message)
            setMessages([].concat(temp))
        })

        socket.on('getAllUser', (user) => {
            setListUser([].concat(user.user))
        })

        socket.on('updateUser', (user) => {
            setListUser([].concat(user.user))
        })
    }, [])

    useEffect(() => {
        console.log(listUser)
    }, [listUser])

    const handleLogOut = () => {
        socket.emit('disconnected', userName)
        socket.off();
        const action = LogOutAction()
        dispatch(action)
        localStorage.removeItem('isLogin')
        localStorage.removeItem('userName')
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

    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <>
            <div className='headerName' style={{ padding: '20px', display: 'flex', flexDirection: 'row' }}>
                <h2>
                    Hello {userName}
                </h2>
                <Button onClick={handleLogOut}>Đăng xuất</Button>
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
                        if (data.user === userName) {
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
                    enterButton="Search"
                    size="large"
                    onChange={(e) => handleChatInput(e.target.value)}
                    value={messageTemp}
                />
                <Button onClick={eventSendMessage} type="primary">Send</Button>
            </div>

            <div className='listUser'>
                <Avatar.Group maxCount={5} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                    {listUser ? listUser.map(data => <Tooltip title={data.name} placement="top">
                        <Avatar style={{ backgroundColor: `${data.color}` }}>{data.name}</Avatar>
                    </Tooltip>) : <></>}

                </Avatar.Group>
            </div>
        </>
    )
}
export default Home