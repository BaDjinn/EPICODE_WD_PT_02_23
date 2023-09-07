import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

export class MyFooter extends Component {
  render() {
    return (
      <footer>
            <Container>
                <Row>
                    <Col>
                        <Nav.Link href='#'>Link1</Nav.Link>
                    </Col>
                    <Col>
                      <Nav.Link href='#'>Link2</Nav.Link>
                    </Col>
                    <Col>
                      <Nav.Link href='#'>Link3</Nav.Link>
                    </Col>
                </Row>
            </Container>         
      </footer>
    )
  }
}

export default MyFooter