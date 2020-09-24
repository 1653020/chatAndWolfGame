import React from 'react'
import { Drawer, Button } from 'antd';

const DrawerComponent = ({ visible, onClose }) => {

    const saveSetting = () => {
        console.log('Save Setting!')
        onClose()
    }

    return (
        <Drawer
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

        </Drawer>
    )
}

export default DrawerComponent