import { Col, Container, Row } from "react-bootstrap";
import imageLogo from "../assets/logo_sito.png";

const Footer = (props) => {
  return (
    <div id={props.id}>
      <Container className="main-div-footer">
        <Row className="d-flex justify-content-between align-items-center">
          <Col xs={12} md={5} lg={6}>
            <div className="d-flex justify-content-center align-items-center ">
              <img
                src={imageLogo}
                alt="Logo del sito"
                className="img-fluid w-50"
              />
            </div>
          </Col>
          <Col xs={12} md={7} lg={6}>
            <div className="d-flex justify-content-center align-items-center flex-column gap-4">
              <h5>Titolo della pagina</h5>
              <span className="border-limit"></span>
              <h5>Lorem ipsum dolor sit amet</h5>
              <span className="border-limit"></span>
              <h5>Lorem ipsum dolor sit amet</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
