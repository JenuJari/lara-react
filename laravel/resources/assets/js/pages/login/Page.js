import React, { Component } from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

class Page extends Component {

    constructor() {
        super();

        this.state = {
            //
        };
    }

    render() {
        return (<div style={{margin : '75px'}}>
        
            <div className="row">
                <div className="mx-auto">
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </div>
            </div>

        </div>);
    }

}

export default Page;