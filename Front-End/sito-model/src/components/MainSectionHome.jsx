import { Container, Row, Col } from "react-bootstrap";
import BannerPost from "../assets/banner_post.jpg";

const MainSectionHome = (props) => {
  return (
    <>
      <Container id={props.id}>
        <Row id="row_section_main">
          <Col xs={12} className="first-poster">
            <img src={BannerPost} alt="Banner Post" />
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
          <Col xs={12} className="mid-section">
            <div>
              <h3>Titolo della pagina</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
                laboriosam harum iste velit, vitae nostrum maiores modi,
                consequuntur tenetur voluptatum ipsam delectus neque asperiores
                a! Atque quae corporis impedit quo.
              </p>
            </div>
            <div>
              <h3>Titolo della pagina</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
                laboriosam harum iste velit, vitae nostrum maiores modi,
                consequuntur tenetur voluptatum ipsam delectus neque asperiores
                a! Atque quae corporis impedit quo.
              </p>
            </div>
          </Col>
          <Col xs={12} className="second-poster">
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
            <img src={BannerPost} alt="Banner Post" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainSectionHome;
