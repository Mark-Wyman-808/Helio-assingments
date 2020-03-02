import React from "react"
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';
export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: props.initalMessage,
            fName: "",
            lName: ""
        }
        this.onClickHandler = this.onClickHandler.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }//end of constructor function

    onClickHandler() {
        this.setState({ name: "Log me in" })
    }

    onChangeHandler(event) {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state)
    }

    render() {

        return (
            <div>
                <h1>{this.state.name}</h1>
                <Button variant="contained" color="primary" onClick={this.onClickHandler} >Sign Up</Button>
                First name<input onChange={this.onChangeHandler} name="fName" value={this.state.fName}></input>
                Last name<input onChange={this.onChangeHandler} name="lName" value={this.state.lName}></input>
                <Link to="/">MainPage</Link>
            </div>

        )
    }


}