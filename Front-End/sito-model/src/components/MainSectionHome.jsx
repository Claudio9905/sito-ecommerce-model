import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import BannerPost from "../assets/banner_post.jpg";
import ScrollReveal from "scrollreveal";

const MainSectionHome = (props) => {
  // const boxRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(".animation-scrolling", {
      duration: 2000,
      distance: "50px",
      origin: "right",
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      interval: 300,
      reset: true,
    });
  }, []);

  return (
    <>
      <Container id={props.id}>
        <Row id="row_section_main">
          <Col xs={12} className="first-poster animation-scrolling">
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
          <Col xs={12} className="mid-section animation-scrolling">
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
          <Col xs={12} className="second-poster animation-scrolling">
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
