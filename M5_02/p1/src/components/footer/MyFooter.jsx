import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

export class MyFooter extends Component {
  render() {
    return (
      <footer >
            <Container className='text-center bg-body-tertiary' fluid>
                <Row>
                    <Col className='w-auto'>
                      <Nav.Link href='#' className='m-3 p-2 text-light text-bg-dark rounded-2'>Link1.1</Nav.Link>
                      <Nav.Link href='#' className='m-3 p-2 text-light text-bg-dark rounded-2'>Link1.2</Nav.Link>
                      <Nav.Link href='#' className='m-3 p-2 text-light text-bg-dark rounded-2'>Link1.3</Nav.Link>
                    </Col>
                    <Col>
                      <Nav.Link href='#' className='m-3 p-2 text-light text-bg-dark rounded-2'>Link2.1</Nav.Link>
                      <Nav.Link href='#' className='m-3 p-2 text-light text-bg-dark rounded-2'>Link2.2</Nav.Link>
                      <Nav.Link href='#' className='m-3 p-2 text-light text-bg-dark rounded-2'>Link2.3</Nav.Link>
                    </Col>
                    <Col>
                      <Nav.Link href='#' className='m-3 p-2 text-light text-bg-dark rounded-2'>Link3.1</Nav.Link>
                      <Nav.Link href='#' className='m-3 p-2 text-light text-bg-dark rounded-2'>Link3.2</Nav.Link>
                      <Nav.Link href='#' className='m-3 p-2 text-light text-bg-dark rounded-2'>Link3.3</Nav.Link>
                    </Col>
                </Row>
            </Container>         
      </footer>
    )
  }
}

export default MyFooter