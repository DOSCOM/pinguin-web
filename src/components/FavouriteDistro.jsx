import React from 'react';
import { Link } from 'gatsby'
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
} from 'reactstrap';

export default (props) => {
  return (
    <Container>
      <h1 className="text-center mb-5">Download Distro Linux Favoritmu</h1>

      <Row>
        {
          // FIXME: ini cuma buat nyoba2 loopingnya asal2an
          [1,1,1,1,1,1,1,1,1,1,1,1].map((card, index) => (
            <Col xs="6" md="2" key={index}>
              <Card className="text-center" style={{ border: 0 }}>
                <CardImg className="px-4 pt-4" top width="100%" src="http://pinguin.dinus.ac.id/images/mint.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Linux Mint</CardTitle>
                  <Link className="btn btn-outline-success" to="/linux/tealinuxos">Download</Link>
                </CardBody>
              </Card>
            </Col>
          ))
        }
      </Row>

    </Container>
  );
};
