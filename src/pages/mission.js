// pages/mission.js

import React from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Mission() {
  return (
    <>
      <MainNavBar />
      {/* Hero Section */}
      <div
        style={{
          background: `linear-gradient(rgba(42,48,56,.40),rgba(42,48,56,.40)), url('/hero_image1.jpg') center/cover no-repeat`,
          minHeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Container>
          <h1 className="text-white fw-bold mb-2" style={{ fontSize: "2.5rem", textAlign: "center" }}>
            Our Mission
          </h1>
          <p className="text-white fs-5 mb-0 text-center" style={{ maxWidth: 780, margin: "0 auto", fontWeight: "bold"  }}>
            Aspire to always put forth the needs of others above our own.  
          </p>
        </Container>
      </div>
      {/* Main Mission Card */}
      <Container className="my-5">
        <Row className="gy-4 justify-content-center">
          <Col md={10} lg={8}>
            <Card className="shadow-sm border-0 rounded-4 h-100">
              <CardBody>
                <h3 className="fw-bold mb-3" style={{ color: "#228d6e" }}>
                  Illuminating the Pathway to Humanity
                </h3>
                <p style={{ fontSize: 17 }}>
                  Pathway Humanity is a dedicated social purpose corporation committed to providing comprehensive
                  mental illness and substance use disorder treatment. Our organization is built upon the foundation of an
                  extraordinary team of highly qualified psychiatrists and licensed and certified counselors. Each member
                  of our team specializes in evidence-based mental illness and substance use disorder treatment, ensuring
                  the highest standard of care for our clients.
                </p>
                <p style={{ fontSize: 17 }}>
                  We are deeply committed to serving the most vulnerable and often overlooked segments of our
                  community. Pathway Humanity actively works with underrepresented groups, homeless individuals, and
                  those with low incomes. Furthermore, we extend our specialized services to disabled veterans and
                  civilians, recognizing their unique needs and challenges.
                </p>
                <p style={{ fontSize: 17 }}>
                  Our core philosophy is encapsulated in our mission statement: <b className="text-success">"Aspire to always put forth the needs of others above our own."</b> This is not merely a
                  statement; it is a motto that guides every decision and action we undertake, shaping our compassionate
                  and client-centered approach.
                </p>
                <p style={{ fontSize: 17 }}>
                  At Pathway Humanity, we envision ourselves as a holistic, "one-stop shop" for individuals seeking
                  profound transformation in their lives. We understand the complex interplay of factors that contribute to
                  drug addiction, poverty, and hopelessness. Therefore, our integrated treatment programs are designed to
                  address not only the immediate symptoms of substance use and mental health disorders but also the
                  underlying socio-economic challenges.
                </p>
                <p style={{ fontSize: 17 }}>
                  Our ultimate goal is to empower individuals to break free from cycles of addiction and destitution, guiding them towards a path of self-sufficiency, renewed hope, and a brighter future. We believe that with the right support and resources, every individual has the capacity to transform their life, and we are here to illuminate that pathway to humanity.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* (Optional) Mission Callout */}
      <Container className="my-5">
        <Row className="align-items-center g-0" style={{ background: "#f7fafd", borderRadius: 16, overflow: "hidden" }}>
          <Col md={12} className="p-4">
            <h4 className="fw-bold mb-2" style={{ color: "#2e9701" }}>
              Dedicated to Serving Those in Need
            </h4>
            <p className="mb-3" style={{ fontSize: 16 }}>
              Our holistic approach and evidence-based programs are designed to help every client find renewed hope and self-sufficiency. If you or a loved one need support, we are here for you.
            </p>
            <Link href="/contact">
              {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
              }
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
