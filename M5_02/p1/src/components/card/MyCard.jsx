import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { nanoid } from 'nanoid';

export class MyCard extends Component {
  render() {
    return (
        <Card key={/* this.props.key */ nanoid()} style={{ width: 'auto' }}>
        <Card.Img variant="top" src={this.props.url} fluid='true'/>
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