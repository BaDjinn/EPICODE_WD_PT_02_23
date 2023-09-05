import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import MyCard from '../card/MyCard'
import { nanoid } from 'nanoid'

export class LastestRelease extends Component {
  render() {
    return (
      <Container>
        <Row>
            <Col xs={3}>
                {this.props.books && this.props.books.map(
                    (book)=>{
                        <MyCard key = {nanoid()} url = {book.img} title={book.title} text={book.category} />
                    }
                )}
            </Col>
        </Row>
      </Container>
    )
  }
}

export default LastestRelease