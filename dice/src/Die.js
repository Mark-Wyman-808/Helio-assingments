import React from 'react'
export default function Die(props) {
    const [roll, setRoll] = React.useState(0)

    const onClickHandler = () => {

        setRoll(Math.floor(Math.random() * props.maxRoll) + 1)


    }



    return (
        <div>
            {roll}<button onClick={onClickHandler}>
                Roll
        </button>
        </div>
    )

}




