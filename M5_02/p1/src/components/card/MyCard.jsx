import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { nanoid } from 'nanoid';

const MyCard = ({url,title,text}) => {

  const [selected,setSelected] = useState(false)

  const toggleBorder=()=>{
    setSelected((prevState)=> !prevState.selected)
  }

  return(
    <Card key={nanoid()} className='w-auto m-1'>
        <Card.Img onClick={toggleBorder} className={`${selected?"border border-primary":""}`} variant="top" src={url} fluid='true'/>
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

