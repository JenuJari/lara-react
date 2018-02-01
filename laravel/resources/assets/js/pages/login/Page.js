import React, { Component } from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';
import * as services from "./../../store/services";
import PropTypes from 'prop-types';

import { Redirect } from "react-router-dom";

class Page extends Component {

    static displayName = "LoginPage";

    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor() {
        super();

        this.state = {
            email : '',
            password : ''
        };

        this.submitLogin = this.submitLogin.bind(this);
    }

    submitLogin() {
        const { email , password} = this.state
        const p = { email , password , remember : false};
        this.props.dispatch(services.authService.login(p));
    }

    

    render() {
        if (this.props.isAuthenticated) { return <Redirect to="/dashbord" />; }

        return (<div style={{margin : '75px'}}>
            <div className="row">
                <div className="mx-auto">
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" 
                            onChange={(e) => this.setState({ email : e.target.value })}
                            value={this.state.email} name="email" id="exampleEmail" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" 
                            onChange={(e) => this.setState({ password : e.target.value })}
                            value={this.state.password} name="password" id="examplePassword" />
                        </FormGroup>
                        <Button onClick={this.submitLogin}>Submit</Button>
                    </Form>
                </div>
            </div>
        </div>);
    }

}

export default Page;