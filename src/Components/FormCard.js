import React, { Component } from 'react';
import { Card, CardText,
  CardTitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../Style/form.css';

class FormCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
        name: "",
        message: ""
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault(); //Stop page refreshing on form submit
    console.log(this.state);
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    return (
        <div className="cardFormContainer">
          <Card body>
            <CardTitle>Welcome to Digitrail!</CardTitle>
            <CardText>Leave a memory!</CardText>
            <Form onSubmit={this.handleFormSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input onChange={this.onValueChange} type="text" name="name" id="name" placeholder="Enter your name" />
              </FormGroup>
              <FormGroup>
                <Label for="message">Message</Label>
                <Input onChange={this.onValueChange} type="textarea" name="message" id="message" placeholder="Enter your message" />
              </FormGroup>
              <Button type="submit" color="info" disabled={!this.props.haveUsersLocation}>Send</Button>
            </Form>
          </Card>
        </div>
    );
  }
}

export default FormCard;
