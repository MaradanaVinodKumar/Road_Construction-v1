import React, { useEffect } from "react";
import image from "../../assets/home1.jpg";
import { NavLink } from "react-router-dom";
import "./Home.css"; // Import CSS file for styling
import { Row, Col, Container } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  useEffect(() => {
    // This code will run when the component is mounted
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);
  return (
    <>
      <div className="content">
        <img src={image} alt="Home" className="image" />
        <div className="text-overlay">
          <p className="welcome">Welcome to</p>
          <p className="heading">Company Name</p>
          <p className="heading">Road Construction</p>
          <NavLink
            to="/Gallery"
            activeClassName="active"
            style={{ textDecoration: "none" }}
          >
            <button className="gallery_btn">View Gallery</button>
          </NavLink>
        </div>
      </div>
      <Container>
        <Row>
          <Col md={5}>
            <p className="about">About Us</p>
            <p className="projectName">Project Name</p>
            <p className="para">
              Four Laning of Existing Two Lane from Suryapet (Design
              Ch.0.420/Existing Km. 128.500 of NH-65) to Khammam (Design
              Ch.59.046/Existing Km. 50.750 of Old SH42) of NH-365 BB (Old
              SH-42) (Design Length 58.626 Km) in the state of Telangana under
              Bharatmala Pariyojana on Hybrid Annuity Mode.
            </p>
            <p className="projectName">Scope of Work</p>
            <p className="para">
              Rehabilitation, up gradation and widening of the existing
              carriageway from 2 lane (7m Carriageway) to 4 Lane standards with
              construction of new pavement. Construction and/ or rehabilitation
              of major and minor bridges, culverts, road intersections,
              interchanges, drains, etc. Operation and maintenance of the
              Project.
            </p>
          </Col>
          <Col md={2}></Col>
          <Col md={5}>
            <img
              src={image}
              width="100%"
              height="60%"
              alt="Project"
              style={{ marginTop: "150px" }}
            />
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: "-180px" }}>
        <Row>
          <Row className="mt-4">
            <Col md={5}>
              <p className="projectName">Client</p>
              <p className="sub_text">
                National Highways Authority of India(NHAI)
              </p>
            </Col>
            <Col md={2}></Col>
            <Col md={5}>
              <p className="projectName">Construction Period</p>
              <p className="sub_text">Construction Period</p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={5}>
              <p className="projectName">Length in KM</p>
              <p className="sub_text">58.626 km</p>
            </Col>
            <Col md={2}></Col>
            <Col md={5}>
              <p className="projectName">O&M Period</p>
              <p className="sub_text">15 years</p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={5}>
              <p className="projectName">Concession Agreement Date</p>
              <p className="sub_text">14.06.2019</p>
            </Col>
            <Col md={2}></Col>
            <Col md={5}>
              <p className="projectName">Appointed Date</p>
              <p className="sub_text">27.12.2019</p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={5}>
              <p className="projectName">Pavement Classification</p>
              <p className="sub_text">
                Flexible Pavement for Main Carriageway and Service/Slip Road
                Rigid Pavement for Toll Plaza
              </p>
            </Col>
            <Col md={2}></Col>
            <Col md={5}>
              <NavLink
                to="/Gallery"
                activeClassName="active"
                style={{ textDecoration: "none" }}
              >
                <button className="gallery_btn">View Gallery</button>
              </NavLink>
            </Col>
          </Row>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
export default Home;
