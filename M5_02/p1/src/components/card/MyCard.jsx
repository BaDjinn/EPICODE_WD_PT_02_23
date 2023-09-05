import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class MyCard extends Component {
  render() {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.url} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.text}         
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default MyCard