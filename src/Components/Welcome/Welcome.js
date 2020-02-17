import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Welcome.css'
class Welcome extends Component {
    constructor() {
        super();
        this.nameRef = React.createRef();
    }

    state = {
        username: "",
        disabled: true
    }
    setName = (event) => {
        let newName = event.target.value.trim();
        if (newName === "") {
            this.setState({
                username:newName,
                disabled: true
            })
        }
        else {
            this.setState({
                username: newName,
                disabled: false
            })
        }

    }

    componentDidMount = () => {
        this.nameRef.current.focus();
    }

    render() {
        return (
            <div className="jumbotron welcome text-center ">

                <h1>Hey there!!</h1>
                <form>
                    <input type="text"
                        placeholder="Enter your name"
                        onChange={this.setName}
                        value={this.state.username}
                        ref={this.nameRef} />

                    <Link to={{
                        pathname: "/dollar-jar",
                        username: this.state.username
                    }}>
                        <input type="submit" disabled={this.state.disabled} className="btn btn-primary" value="submit" />

                    </Link>
                </form>

            </div>)
    }

}

export default Welcome;