import React from 'react';
import { Link } from 'react-router-dom';

import { Title, Text } from './styles';

const Home: React.FunctionComponent = () => {
  return (
    <>
      <Title>My Todo Application</Title>
      <Link to="/todopage">
        <Text>Go to the ToDo Page</Text>
      </Link>
    </>
  );
};

export default Home;
