import React from "react";
import { Form } from "react-bootstrap";

const InputField = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Search Here</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            
          </Form.Text>
        </Form.Group>

        
      </Form>
    </div>
  );
};

export default InputField;
