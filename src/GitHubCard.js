import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const GitHubCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/147457991?v=4" />
      <Card.Body>
        <Card.Title>JefferyG00</Card.Title>
        <Card.Text>
          i game more than i study LOL
        </Card.Text>
        <Button variant="primary" href="https://github.com/JefferyG00" target="_blank">Go to GitHub</Button>
      </Card.Body>
    </Card>
  );
};

export default GitHubCard;
