import React from 'react'
import { uriBase, api } from '../const'
export default function SignUp(props) {

    let [message, setMessage] = React.useState(props.initalMessage)
    let [fName, setfName] = React.useState("")
    let [lName, setlName] = React.useState("")
    let [userName, setUserName] = React.useState("")
    let [password, setPassword] = React.useState("")



    const onClickHandler = (event) => {
        event.preventDefault()

        let formData = new FormData()
        formData.append('fName', fName)
        formData.append('lName', lName)
        formData.append('userName', userName)
        formData.append('password', password)


        fetch(`${uriBase}${api}/user/signup`, {
            method: "POST",
            body: formData

        })
            .then(HttpRequest => {
                if (!HttpRequest.ok) {
                    throw new Error('could not find user')
                }
                return HttpRequest.json()
            })
            .then(user => {
                //ToDo handle useer
                setMessage('welcome')
            })
            .catch(error => {
                console.log(error)
            })

        setMessage("Welcome")
    }
    const onChangeHandler = (event) => {
        switch (event.target.name) {
            case 'fName':
                setfName(event.target.value)
                break
            case 'lName':
                setlName(event.target.value)
                break
            case 'userName':
                setUserName(event.target.value)
                break
            case 'password':
                setPassword(event.target.value)
                break
            default:
        }
    }

    return (
        <div>
            <h1>{message}</h1>
            <form>
                <div>

                    First name<input onChange={onChangeHandler} name="fName" value={fName}></input>
                    Last name<input onChange={onChangeHandler} name="lName" value={lName}></input> <br/>
                    User name<input onChange={onChangeHandler} name="userName" value={userName}></input>
                    Password<input onChange={onChangeHandler} name="password" value={password}></input>
                    <div>
                        Sign Up <input type="submit" onClick={onClickHandler}></input>
                    </div>

                </div>
            </form>
        </div>
    )
}