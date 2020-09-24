import React, { useEffect } from 'react'

const Test = ({ data, lessThan }) => {

    const [temp, setTemp] = useState(null);
    const [stateButton, setStateButton] = 1;

    useEffect(() => {
        const result = data.filter(t => t < lessThan);
        setTemp(result)
    }, [])

    const handleClick = () => {
        switch (stateButton) {
            case 1:
                setStateButton(2)
                break;
            case 2:
                setStateButton(3)
                break;
            case 3:
                setStateButton(1)
                break;
        }
    }

    return (
        <>
            <button onClick={handleClick}>Sort</button>
            {temp ? <div>
                {stateButton == 1 ? temp.sort((a, b) => a > b ? 1 : -1)
                    .map(data => { <span>[{data}],</span> }) :
                    (stateButton == 2 ? temp.sort((a, b) => a < b ? 1 : -1)
                        .map(data => { <span>[{data}],</span> }) :
                        temp.map(data => { <span>[{data}],</span> }))}
            </div> : <></>}
        </>
    )
}

export default Test