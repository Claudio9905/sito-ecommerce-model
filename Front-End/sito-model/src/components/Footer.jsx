import { Col, Container, Row } from "react-bootstrap";
import imageLogo from "../assets/logo_sito.png";

const Footer = (props) => {
  return (
    <div id={props.id}>
      <Container className="main-div-footer">
        <Row className="d-flex justify-content-between align-items-center">
          <Col xs={6}>
            <div className="d-flex justify-content-center align-items-center ">
              <img
                src={imageLogo}
                alt="Logo del sito"
                className="img-fluid w-50"
              />
            </div>
          </Col>
          <Col xs={6}>
            <div className="d-flex justify-content-center align-items-center flex-column ">
              <h3>Titolo della pagina</h3>
              <h3>Lorem ipsum dolor sit amet</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
