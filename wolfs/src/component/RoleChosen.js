import React from 'react'
import { Card } from 'antd';
import { LeftOutlined, RightOutlined, CloseOutlined } from '@ant-design/icons'

const RoleChosen = ({ data, increaseAmount, decreaseAmount }) => {
    const buttonIncrease = (data) => {
        if (data.title === 'Dân Làng' || data.title === 'Sói Thường')
            return (<RightOutlined onClick={() => increaseAmount(data)} />)
    }

    const buttonDelete = (data) => {
        if ((data.title === 'Dân Làng' || data.title === 'Sói Thường') && data.amount > 1)
            return <LeftOutlined onClick={() => decreaseAmount(data)} />
        else return <CloseOutlined onClick={() => decreaseAmount(data)} />
    }

    return (
        <div className='cardChosenContainer'>
            {(data && data.length) ? data.map((data, index) =>
                <Card
                    className='cardChosen'
                    key={index}
                    hoverable
                    style={{ width: 150 }}
                    cover={<img alt="example" src={data.image} />}
                    actions={[
                        buttonDelete(data),
                        <h3>{data.amount}</h3>,
                        buttonIncrease(data)
                    ]}
                />
            ) : <></>}
        </div>
    )
}

export default RoleChosen