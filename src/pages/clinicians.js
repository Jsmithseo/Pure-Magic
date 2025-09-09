// pages/schedule.js
import React from "react";
import Head from "next/head";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

export default function Schedule() {
  const clinicians = [
    {
      name: "Jeffrey Gordon",
      role: "Clinician",
      link: "https://www.tebra.com/care/provider/jeffrey-gordon-1285120451",
    },
    {
      name: "Melissa Robinson",
      role: "CADC-II, ICADC, SAP",
      link: "https://www.tebra.com/care/provider/melissa-robinson-cadc-ii-icadc-sap-1144767757",
    },
    {
      name: "Jeanie Croshaw",
      role: "Addiction Psychiatrist",
      link: "https://www.tebra.com/care/provider/jeanie-croshaw-do-1659751337",
    },
  ];

  return (
    <>
      <Head>
        <title>Schedule with Our Clinicians | Pathway Humanity</title>
      </Head>
      <MainNavBar />

      {/* HERO */}
      <div
        style={{
          background: `linear-gradient(rgba(42,48,56,.45),rgba(42,48,56,.45)), url('/images/hero_image9.jpg') center/cover no-repeat`,
          minHeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <h1
            className="text-white fw-bold mb-3"
            style={{ fontSize: "2.3rem", textAlign: "center" }}
          >
            Schedule Time with a Clinician
          </h1>
          <p
            className="text-white fs-5 mb-0 text-center"
            style={{ maxWidth: 760, margin: "0 auto" }}
          >
            Book your session with one of our licensed professionals below.
          </p>
        </Container>
      </div>

      {/* CLINICIAN CARDS */}
      <Container className="py-5">
        <Row className="gy-4 justify-content-center">
          {clinicians.map((c) => (
            <Col md="4" sm="6" key={c.name}>
              <Card className="shadow-sm border-0 rounded-4 h-100">
                <CardBody className="text-center">
                  <h5 className="fw-bold mb-2">{c.name}</h5>
                  <p className="text-muted mb-3">{c.role}</p>
                  <Button
                    color="success"
                    className="fw-bold"
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Appointment
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </>
  );
}
