import Header from "../Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="">
      <Header></Header>
      <div>
        <Container>
          <Row className="landingContainer">
            <Col className="landingTextContainer">
              <div className="landingText">
                <h2>Sim Hub</h2>
                <p>
                  All your devices in a single App. Custom developed App where you can tweak a lot
                  of prameters refered to your connected devices. From controlling its RGB lightning
                  to tweaking its sensor curve to your best needs. Play with different profiles with
                  a single click!
                </p>
              </div>
            </Col>
            <Col md="8">
              <div className="landingImg">
                <img className="Img" src="../assets/LandingPage/software-min.png" alt="Sim Hub" />
              </div>
            </Col>
          </Row>
          <Row className="landingContainer">
            <Col md="8">
              <div className="landingImg">
                <img className="Img" src="../assets/LandingPage/microchip-min.jpeg" alt="Sim Hub" />
              </div>
            </Col>
            <Col className="landingTextContainer">
              <div className="landingText">
                <h2>Electronics</h2>
                <p>
                  32 bits Microcontroller. We use a STM32 microcontroller in our devices, this
                  little but powerful chip let us bring you the best simulation experience. This
                  chip handles 14 bits resolution precisely giving us a high end technology for HID
                  devices.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
