import React, { useState } from 'react'
import { Drawer, Button } from 'antd';
import DataWolf from '../data/wolfdata'
import { Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import RoleChosen from './RoleChosen'

const { Meta } = Card;

const DrawerComponent = ({ visible, onClose }) => {

    const [setting, setSetting] = useState([])

    const saveSetting = () => {
        console.log('Save Setting!')
        onClose()
    }

    const searchPosition = (temp, data) => {
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].title === data.title) return i
        }
        return false
    }

    const handleAddRole = (data) => {
        let temp = setting
        if (temp.length > 0) {
            let position = searchPosition(temp, data)
            if (position !== false) temp[position].amount += 1;
            else temp.push({
                title: data.title,
                amount: 1,
                image: data.image
            })
        }
        else temp.push({
            title: data.title,
            amount: 1,
            image: data.image
        })
        setSetting([].concat(temp))
    }

    const increaseAmount = (data) => {
        handleAddRole(data)
    }

    const decreaseAmount = (data) => {
        let temp = setting
        if (temp.length > 0) {
            let position = searchPosition(temp, data)
            if (position !== false) {
                if (temp[position].amount > 1)
                    temp[position].amount -= 1
                else {
                    if (temp[position].amount === 1)
                        temp.splice(position, 1)
                }
            }
        }
        setSetting([].concat(temp))
        console.log(setting)
    }

    return (
        <Drawer
            className='drawerSetting'
            title="Wolf"
            placement="right"
            closable={true}
            onClose={onClose}
            visible={visible}
            keyboard={false}
            width={'100%'}
            footer={<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button onClick={saveSetting} type='primary'>Save</Button>
            </div>}
        >
            <h2>Các role đã chọn</h2>
            <RoleChosen data={setting} increaseAmount={increaseAmount} decreaseAmount={decreaseAmount} />
            <h2>Phe Dân</h2>
            <div className='danLang'>
                {DataWolf.phedan.map((data, index) => <Card
                    key={index}
                    hoverable
                    style={{ width: 150 }}
                    cover={<img alt="example" src={data.image} />}
                    actions={[
                        <PlusOutlined onClick={() => handleAddRole(data)} /> //add role
                    ]}
                >
                    <Meta title={data.title} description={data.description} />
                </Card>)}
            </div>
        </Drawer>
    )
}

export default DrawerComponent