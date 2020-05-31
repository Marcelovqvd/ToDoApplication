import React from 'react';
import { Link } from 'react-router-dom';

import { Title, Text, Form } from './styles';

const ToDoPage: React.FunctionComponent = () => {
  return (
  <>
  <Title>ToDo Page</Title>

  <Form>
    <input type="text" placeholder="Write your todo here" />
    <button type="submit">Add Todo</button>
    <button type="submit">Delete Todo</button>
  </Form>
  </>
  )
}

export default ToDoPage;
