import React from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import Link from "next/link";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

export default function Mentorship() {
  return (
    <>
      <MainNavBar />
      {/* HERO SECTION */}
      <div
        style={{
          background: `linear-gradient(rgba(42,48,56,.40),rgba(30,60,80,.40)), url('images/hero_image8.jpg') center/cover no-repeat`,
          minHeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <h1 className="text-white fw-bold mb-2" style={{ fontSize: "2.3rem", textAlign: "center" }}>
            Mentorship
          </h1>
          <p className="text-white fs-5 mb-0 text-center" style={{ maxWidth: 740, margin: "0 auto", fontWeight: "bold" }}>
            Empowering through guidance, compassion, and second chances.
          </p>
        </Container>
      </div>
      {/* MAIN CONTENT CARD */}
      <Container className="my-5">
        <Row className="gy-4 justify-content-center">
          <Col md={10} lg={8}>
            <Card className="shadow-sm border-0 rounded-4 h-100">
              <CardBody>
                <h3 className="fw-bold mb-3" style={{ color: "#1c7acb" }}>
                  Uplifting Lives Through Mentorship
                </h3>
                <p style={{ fontSize: 17 }}>
                  Our team at Pathway Humanity volunteers our time to mentor, advise, and counsel at-risk youth, recently released individuals from the penal system, individuals suffering from substance use disorder, and mentally ill persons seeking guidance.
                </p>
                <p style={{ fontSize: 17 }}>
                  At Pathway Humanity, our dedicated team of volunteers is committed to making a profound impact on the lives of individuals navigating some of life’s most challenging circumstances. We passionately devote our time and expertise to provide comprehensive mentorship, insightful advice, and compassionate counseling to several key populations.
                </p>
                <ul style={{ fontSize: 16, marginBottom: 18 }}>
                  <li>
                    <b>At-Risk Youth:</b> Providing positive guidance and support to help youth navigate adolescence and avoid dangerous pitfalls.
                  </li>
                  <li>
                    <b>Recently Released Individuals:</b> Assisting those re-entering society from the penal system to build stability and productive lives.
                  </li>
                  <li>
                    <b>Substance Use Disorder Support:</b> Mentorship for individuals on their recovery journey toward lasting well-being.
                  </li>
                  <li>
                    <b>Mental Health Guidance:</b> Compassionate counseling for those managing mental illness and seeking a better quality of life.
                  </li>
                </ul>
                <p style={{ fontSize: 17 }}>
                  Our collective efforts are driven by a singular mission: to empower these individuals with the tools, resources, and encouragement they need to forge healthier, more fulfilling futures.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* MENTORSHIP FEATURES GRID */}
      <Container className="my-5">
        <Row className="g-4 justify-content-center">
          <Col md={3} sm={6}>
            <Card className="shadow-sm border-0 text-center h-100" style={{ background: "#f3f8fc" }}>
              <CardBody>
                <div style={{ fontSize: 44, color: "#1c7acb", marginBottom: 14 }}>👥</div>
                <h6 className="fw-bold mb-2" style={{ color: "#1c7acb" }}>Peer Mentorship</h6>
                <p style={{ fontSize: 15 }}>
                  Connect with role models who’ve walked a similar path and now give back.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md={3} sm={6}>
            <Card className="shadow-sm border-0 text-center h-100" style={{ background: "#f7e6d1" }}>
              <CardBody>
                <div style={{ fontSize: 44, color: "#d17a17", marginBottom: 14 }}>💬</div>
                <h6 className="fw-bold mb-2" style={{ color: "#d17a17" }}>Counseling & Support</h6>
                <p style={{ fontSize: 15 }}>
                  Professional guidance and compassionate listening to empower positive change.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md={3} sm={6}>
            <Card className="shadow-sm border-0 text-center h-100" style={{ background: "#e8f7ea" }}>
              <CardBody>
                <div style={{ fontSize: 44, color: "#228d6e", marginBottom: 14 }}>🌱</div>
                <h6 className="fw-bold mb-2" style={{ color: "#228d6e" }}>Life Skills Coaching</h6>
                <p style={{ fontSize: 15 }}>
                  Develop resilience, communication, and practical life skills for independence.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md={3} sm={6}>
            <Card className="shadow-sm border-0 text-center h-100" style={{ background: "#f3f8fc" }}>
              <CardBody>
                <div style={{ fontSize: 44, color: "#1c7acb", marginBottom: 14 }}>🚀</div>
                <h6 className="fw-bold mb-2" style={{ color: "#1c7acb" }}>Pathways Forward</h6>
                <p style={{ fontSize: 15 }}>
                  Guidance for goal-setting and pursuing education, career, or community opportunities.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* CALL TO ACTION */}
      <Container className="my-5">
        <Row>
          <Col md={10} className="mx-auto text-center">
            <Card className="shadow-sm border-0 rounded-4 p-4" style={{ background: "#e8f7ea" }}>
              <h3 className="fw-bold mb-3" style={{ color: "#228d6e" }}>
                Become a Mentor or Request Support
              </h3>
              <p style={{ fontSize: 17 }}>
                Want to make a difference or need guidance on your journey? Connect with our mentorship team today—your story of transformation can start here.
              </p>
              <Link href="/contact">
                {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
                }
                <Button color="success" className="fw-bold px-4 rounded-3">
                  CONTACT US
                </Button>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
