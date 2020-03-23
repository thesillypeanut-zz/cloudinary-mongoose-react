import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// Importing actions/required methods
import { updateLoginForm, login } from "../../actions/user";

import "./../../App.css";
import "./styles.css";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.props.history.push("/login");
    }

    // login form state
    state = {
        email: "",
        password: ""
    }

    render() {
        const { app } = this.props

        return (
            <div className="login__bg-image center">
                <div className="login__card center">
                    <h2>Student API</h2>

                    <TextField
                        name="email"
                        label="Email"
                        className="login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateLoginForm(this, e.target)}
                    />

                    <TextField
                        name="password"
                        label="Password"
                        type="password"
                        className="login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateLoginForm(this, e.target)}
                    />

                    <Button
                        className="login__button app__horizontal-center"
                        onClick={() => login(this, app)}
                    >
                        Log In
                    </Button>
                </div>
            </div>
        );
    }
}

export default Login;
