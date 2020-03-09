import React from 'react'
import Die from './Die'
export default function Dice() {
    const [dice, setDice] = React.useState([])
    const [sides, setSides] = React.useState('')
    const onChangeHandler = (event) => {
        setSides(event.target.value)


    }
    const onClickHandler = () => {
        let tempDice = [...dice]
        tempDice.push(sides)
        setDice(tempDice)
        


    }


    return (
        <div>
            <button onClick={onClickHandler}> add one
    
        </button>

            number of sides<input onChange={onChangeHandler} value={sides}>
            </input>
            <div>
                {
                    dice.map((roll, index)=>{
                        return(
                        <Die key={index} maxRoll = {roll}></Die>)
                    })

                }
            </div>
        </div>
    )




}