import React, { Component } from "react";
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions/index';
import { Card, CardSection, Input, Button } from "./common";

class LoginForm extends Component{
    
    onEmailChange = (text) => {
        this.props.emailChanged(text)
    }

    onPasswordChange = (text) => {
        this.props.passwordChanged(text)
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                    label="Email" 
                    placeholder="email@gmail.com"
                    onChangeText={(text) => this.onEmailChange(text)}
                    value= { this.props.email }
                    />
                </CardSection>
                <CardSection>
                    <Input 
                    secureTextEntry
                    label="Password"
                    placeholder="password"
                    onChangeText={(text) => this.onPasswordChanged(text)}
                    value={ this.props.password }
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);