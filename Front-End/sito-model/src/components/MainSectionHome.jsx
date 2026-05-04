import { Container, Row, Col } from "react-bootstrap";
import BannerPost from "../assets/banner_post.jpg";

const MainSectionHome = (props) => {
  return (
    <>
      <Container id={props.id}>
        <Row>
          <Col xs={12} className="first-poster">
            <img src={BannerPost} alt="Banner Post" className="img-fluid" />
            <div className="div-content-poster">
              <h1>Titolo della pagina</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt, excepturi minima tempora rerum placeat temporibus
                consequuntur repudiandae possimus nostrum, fugit animi
                perferendis voluptatem nobis in! Deserunt alias numquam quae
                repellat.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainSectionHome;
