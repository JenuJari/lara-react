import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';
import * as services from "./../../store/services";
import { Redirect } from "react-router-dom";


class Page extends Component {
  static displayName = "RegisterPage";
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  };
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.submitRegister = this.submitRegister.bind(this);
  }

  submitRegister() {
    this.props.dispatch(services.authService.register(this.state));
  }

  render() {

    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div style={{ margin: "75px" }}>
        <div className="row">
          <div className="mx-auto">
            <Form>
              <FormGroup>
                <Label for="txtName">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="txtName"
                  placeholder="Enter your name"
                  value={this.state.name}
                  onChange={e => {
                    this.setState({ name: e.target.value });
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="txtEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="txtEmail"
                  placeholder="Enter your email"
                  value={this.state.email}
                  onChange={e => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="txtPassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="txtPassword"
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={e => {
                    this.setState({ password: e.target.value });
                  }}
                />
              </FormGroup>
              <Button onClick={this.submitRegister}>Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;