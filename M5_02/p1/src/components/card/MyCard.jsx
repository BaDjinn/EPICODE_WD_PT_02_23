import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { nanoid } from 'nanoid';

const MyCard = ({url,title,text}) => {
  return(
    <Card key={nanoid()} className='w-auto m-1'>
        <Card.Img variant="top" src={url} fluid='true'/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}         
          </Card.Text>
          <Button variant="info">More...</Button>
        </Card.Body>
      </Card>
  )
}
export default MyCard;

/* export class MyCard extends Component {
  render() {
    return (
        <Card key={nanoid()} className='w-auto m-1'>
        <Card.Img variant="top" src={this.props.url} fluid='true'/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.text}         
          </Card.Text>
          <Button variant="info">More...</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default MyCard */