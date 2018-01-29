import React, { Component } from 'react'
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

class Page extends Component {

    constructor() {
        super();

        this.state = {
            name : '',
            email : '',
            password : ''
        };

        this.submitRegister = this.submitRegister.bind(this);
    }
    
    submitRegister () {
        console.log('this.state',this.state);
    }

    render() {
        return (<div style={{margin : '75px'}}>

            <div className="row">
                <div className="mx-auto">
                    <Form>
                        <FormGroup>
                            <Label for="txtName">Name</Label>
                            <Input type="text" name="name" id="txtName" placeholder="Enter your name" 
                            value={this.state.name}
                            onChange={(e) => { this.setState({name : e.currentTarget.value})}} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="txtEmail">Email</Label>
                            <Input type="email" name="email" id="txtEmail" placeholder="Enter your email"
                            value={this.state.email}
                            onChange={(e) => { this.setState({email : e.currentTarget.value})}}  />
                        </FormGroup>
                        <FormGroup>
                            <Label for="txtPassword">Password</Label>
                            <Input type="password" name="password" id="txtPassword" placeholder="Enter your password" 
                            value={this.state.password}
                            onChange={(e) => { this.setState({password : e.currentTarget.value})}} />
                        </FormGroup>
                        <Button onClick={ this.submitRegister }>Submit</Button>
                    </Form>
                </div>
            </div>

        </div>);
    }

}

export default Page;