import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyCard from "../card/MyCard";
import { nanoid } from "nanoid";


const LastestRelease = ({books})=>{
  return (
    <Container>
      <Row>
        {books &&
          books.map((book) => {
            return (
              <Col key={nanoid()} xs={12} sm={6} md={3}>
                <MyCard
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

export default LastestRelease;
