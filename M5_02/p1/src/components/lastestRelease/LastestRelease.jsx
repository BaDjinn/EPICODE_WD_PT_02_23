import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyCard from "../card/MyCard";
import { nanoid } from "nanoid";


export class LastestRelease extends Component {
  render() {
    return (
      <Container>
        <Row>
          {this.props.books &&
            this.props.books.map((book) => {
              return (
                <Col key={nanoid()} xs={12} sm={6} md={3}>
                  <MyCard
                    /* key = {book.id} */
                    url={book.img}
                    title={book.title}
                    text={book.category}
                  />
                </Col>
              );
            })}
        </Row>
      </Container>
    );
  }
}

export default LastestRelease;
