// pages/social-purpose-initiatives.js

import React from "react";
import Link from "next/link";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

export default function SocialPurposeInitiatives() {
  return (
    <>
      <MainNavBar />

      {/* HERO SECTION */}
      <div
        style={{
          background: `linear-gradient(rgba(42,48,56,.40),rgba(42,48,56,.40)), url('/images/hero_image7.jpg') center/cover no-repeat`,
          minHeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <h1 className="text-white fw-bold mb-2" style={{ fontSize: "2.3rem", textAlign: "center" }}>
            Social Purpose Initiatives
          </h1>
          <p className="text-white fs-5 mb-0 text-center" style={{ maxWidth: 760, margin: "0 auto", fontWeight: "bold" }}>
            Transforming lives and communities through advocacy, access, and opportunity.
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
                  A Comprehensive, Pioneering Approach
                </h3>
                <p style={{ fontSize: 17 }}>
                  Pathway Humanity works with community advocates who focus on pioneering changes that help substance addicted, homeless individuals, disabled veterans and civilians receive social service, substance use disorder treatment, and mental illness support. We are a pioneer for empowering underrepresented groups to receive transitional housing and to gain quality job skills training for equitable jobs. These efforts assist government agencies in a wide range of areas, from system and institutional development to more focused social service programs.
                </p>
                <p style={{ fontSize: 17 }}>
                  Individuals who remain isolated and ignored can become demoralized, which could cause loss of motivation and eventually lead to incarceration and/or death. These individuals should be allowed opportunities for growth and informed of the resources available.
                </p>
                <p style={{ fontSize: 17 }}>
                  <b>Pathway Humanity is dedicated to transforming the lives of vulnerable individuals through a comprehensive and pioneering approach.</b> We collaborate closely with passionate community advocates who are at the forefront of driving systemic change. Our core mission is to ensure that individuals struggling with substance addiction, experiencing homelessness, or living with disabilities—whether veterans or civilians—gain access to vital social services, effective substance use disorder treatment, and robust mental health support.
                </p>
                <p style={{ fontSize: 17 }}>
                  We are proud pioneers in empowering historically underrepresented groups. A significant focus of our work is facilitating access to transitional housing, providing a stable foundation from which individuals can rebuild their lives. Furthermore, we are committed to equipping them with high-quality job skills training, designed to lead to equitable employment opportunities. This dual approach of housing stability and skill development is crucial for long-term self-sufficiency and integration into society.
                </p>
                <p style={{ fontSize: 17 }}>
                  The impact of Pathway Humanity extends beyond direct individual support. Our strategic efforts significantly assist government agencies across a broad spectrum of areas. This includes contributing to the development of more effective systems and institutions, as well as designing and implementing targeted social service programs that address critical community needs. By partnering with governmental bodies, we strive to create a more responsive and inclusive social welfare infrastructure.
                </p>
                <p style={{ fontSize: 17 }}>
                  We recognize the profound dangers of isolation and neglect. Individuals who are marginalized and ignored often experience a deep sense of demoralization, leading to a debilitating loss of motivation. This downward spiral can tragically culminate in incarceration or even premature death. Pathway Humanity firmly believes that every individual, regardless of their past circumstances, deserves opportunities for growth, rehabilitation, and reintegration.
                </p>
                <p style={{ fontSize: 17 }}>
                  It is imperative that these individuals are not only informed of the myriad resources available to them but also actively supported in accessing and utilizing these pathways to a better future. Our work is a testament to the belief that with the right support and opportunities, every life has the potential for renewal and positive contribution.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

{/* PARTNERSHIP SECTION */}
<Container className="my-5">
  <Row className="align-items-center justify-content-center text-center text-md-start">
    {/* Logo */}
    <Col md={4} className="mb-3 mb-md-0 text-center">
      <Link href="https://www.badd-sf.org/" target="_blank" rel="noopener noreferrer">
        <img
          src="/badd_logo.png"
          alt="Partner Logo"
          style={{ maxWidth: "200px", height: "auto", cursor: "pointer" }}
        />
      </Link>
    </Col>

    {/* Copy + CTA */}
    <Col md={8}>
      <h5 className="fw-bold mb-2">Our Partnership with BADD: Brothers Against Drug Deaths</h5>
      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
      Recovery advocacy, mental health support, and justice, for those battling addiction and mental illness, particularly within Black and underserved communities.
      </p>
      <Link href="https://www.badd-sf.org/" target="_blank" rel="noopener noreferrer">
        <Button color="dark" className="mt-3 px-4 py-2">
          Visit Partner Website
        </Button>
      </Link>
    </Col>
  </Row>
</Container>



      {/* CALL TO ACTION */}
      <Container className="my-5">
        <Row className="align-items-center g-0" style={{ background: "#f7fafd", borderRadius: 16, overflow: "hidden" }}>
          <Col md={12} className="p-4">
            <h4 className="fw-bold mb-2" style={{ color: "#2e9701" }}>
              Join Us in Creating Change
            </h4>
            <p className="mb-3" style={{ fontSize: 16 }}>
              If you share our commitment to social justice and transformation, connect with Pathway Humanity to learn more about our programs and how you can make a difference.
            </p>
            <Link href="/contact" passHref>
              <Button color="success" className="fw-bold px-4 rounded-3">
                CONTACT US
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
