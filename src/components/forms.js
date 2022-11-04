import React from 'react';
import { Form, Button } from 'semantic-ui-react';

export default function FormValidation() {
    return (
      <div id="forms">
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="First name"
              placeholder="Enter your first name"
            />
            <Form.Input
              
              fluid
              label="Last name"
              placeholder="Enter your last name"
            />
          </Form.Group>

        
            <Form.Input
              fluid
              label="Email"
              placeholder="yourname@email.com"
              type="email"
            />
          
          <Form.TextArea
            label="Message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          />
          <Form.Checkbox label="You agree to providing your data to shadrxcc who may contact you" />
          <Button className="btn-submit" type="submit">
            Send Message
          </Button>
        </Form>
      </div>
    );
}