import React from 'react'
import { Card } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const RoleChosen = ({ data, increaseAmount, decreaseAmount }) => {
    console.log('chosen: ', data)
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
                        <LeftOutlined onClick={() => decreaseAmount(data)} />,
                        <h3>{data.amount}</h3>,
                        <RightOutlined onClick={() => increaseAmount(data)} />
                    ]}
                />
            ) : <></>}
        </div>
    )
}

export default RoleChosen