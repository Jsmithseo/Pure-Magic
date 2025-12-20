import React from "react";
import { Container, Row, Col, Button, Card, CardBody } from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import Link from "next/link";

// Partner/Client logos
const PARTNER_LOGOS = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
  "/logo7.png",
  "/logo8.png",
  "/logo9.png",
];

export default function WorkforceDevelopment() {
  return (
    <>
      <MainNavBar />
      {/* HERO SECTION */}
      <div
        style={{
          background: `linear-gradient(rgba(42,48,56,.40),rgba(42,48,56,.40)), url('/images/hero_image5.jpg') center/cover no-repeat`,
          minHeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <h1 className="text-white fw-bold mb-2" style={{ fontSize: "2.4rem", textAlign: "center", fontWeight: "bold"}}>
            Workforce Development Initiatives
          </h1>
          <p className="text-white fs-5 mb-0 text-center" style={{ maxWidth: 800, margin: "0 auto",fontWeight: "bold" }}>
            Nurturing Well-being and Empowering Futures
          </p>
        </Container>
      </div>
      {/* MAIN CONTENT CARD */}
      <Container className="my-5">
        <Row className="gy-4 justify-content-center">
          <Col md={10} lg={8}>
            <Card className="shadow-sm border-0 rounded-4 h-100">
              <CardBody>
                <h3 className="fw-bold mb-3" style={{ color: "#228d6e" }}>
                  Pathway Humanity: Nurturing Well-being and Empowering Futures
                </h3>
                <p style={{ fontSize: 17 }}>
                  Pathway Humanity is a dedicated organization committed to cultivating individual and community well-being through a robust and comprehensive suite of services. Our foundational belief lies in empowering individuals and fostering environments where growth, stability, and positive contribution flourish.
                </p>
                <h4 className="fw-bold mt-4 mb-3" style={{ color: "#2e9701" }}>
                  Empowering Job Seekers: A Path to Meaningful Employment
                </h4>
                <p style={{ fontSize: 17 }}>
                  At the core of our mission is the empowerment of job seekers. We understand that securing meaningful employment is a cornerstone of individual and family stability. Our expert career counseling services are meticulously designed to guide individuals through every stage of their professional journey. This includes:
                </p>
                <ul style={{ fontSize: 16, marginBottom: 18 }}>
                  <li>
                    <b>Skill Development and Enhancement:</b> We help individuals identify existing strengths and develop new skills relevant to today&#39;s evolving job market, offering workshops and resources to bridge skill gaps.
                  </li>
                  <li>
                    <b>Strategic Resume Building:</b> Our counselors work one-on-one with job seekers to craft compelling resumes that effectively highlight their experience, qualifications, and potential, making them stand out to prospective employers.
                  </li>
                  <li>
                    <b>Effective Interview Preparation:</b> We equip individuals with the confidence and strategies needed to excel in interviews, covering everything from common interview questions to mock interviews and personalized feedback.
                  </li>
                  <li>
                    <b>Targeted Job Search Strategies:</b> We provide guidance on navigating job boards, networking opportunities, and connecting with employers that align with individual career goals and aspirations.
                  </li>
                </ul>
                <p style={{ fontSize: 17 }}>
                  Our holistic approach ensures that job seekers are not just finding a job, but securing employment that is sustainable, fulfilling, and contributes to their long-term career aspirations.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* PARTNER/CLIENT LOGOS GRID SECTION */}
      <div style={{ background: "#f9f9f9", padding: "60px 0" }}>
        <Container>
          <Row>
            <Col md={7}>
              <Row>
                {PARTNER_LOGOS.map((logo, idx) => (
                  <Col xs={6} md={4} className="mb-4 d-flex justify-content-center" key={idx}>
                    <Card className="border-0 shadow-sm d-flex align-items-center justify-content-center"
                          style={{ minHeight: 110, minWidth: 110, background: "#fff", padding: 18 }}>
                      <img
                        src={logo}
                        alt="Partner Logo"
                        style={{ maxWidth: 90, maxHeight: 65, objectFit: "contain" }}
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md={5} className="d-flex flex-column justify-content-center">
              <h2 className="fw-bold mb-3" style={{ color: "#3498db", fontSize: "2.1rem" }}>
                Trusted by Top Employers
              </h2>
              <p style={{ fontSize: 17, color: "#555" }}>
                Pathway Humanity partners with leading businesses, nonprofits, and community organizations to create sustainable workforce solutions and career pathways for all.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      {/* CALL TO ACTION / CTA */}
      <Container className="my-5">
        <Row className="align-items-center g-0" style={{ background: "#f7fafd", borderRadius: 16, overflow: "hidden" }}>
          <Col md={12} className="p-4">
            <h4 className="fw-bold mb-2" style={{ color: "#2e9701" }}>
              Ready to take the next step?
            </h4>
            <p className="mb-3" style={{ fontSize: 16 }}>
              Let Pathway Humanity guide you to new opportunities and help you build a brighter, more stable future. Explore our services and resources or connect with our career counselors today.
            </p>
            <Link href="/contact">
              {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
              }
              <Button color="success" className="fw-bold px-4 rounded-3">
                CONTACT US
              </Button>
            </Link>
          </Col>
          {/* <Col md={4} className="text-center p-0">
            <img
              src="/about.jpg"
              alt="Workforce Development"
              style={{
                maxHeight: 200,
                width: "auto",
                objectFit: "contain"
              }}
            />
          </Col> */}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
