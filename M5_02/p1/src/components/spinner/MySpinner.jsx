import { Spinner,Container,Row,Col } from "react-bootstrap";

function MySpinner() {
      return (
        <Container className="bg-body-tertiary w-auto">
                <Row className="bg-body-tertiary w-auto">
                    <Col></Col>
                    <Col  className="d-flex justify-content-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Col>
                    <Col></Col>
                </Row>
        </Container>
      );
  }


export default MySpinner