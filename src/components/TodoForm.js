import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState(" ");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue(" ")
    }

    return(
        <div>
          <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
          <Form.Label>ToDo</Form.Label>
          <Form.Control type="text" placeholder="Enter todo" value={value} onChange={e => setValue(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
    )
}