// pages/about.js
import React from "react";
import { Container, Row, Col, Card, CardBody, Badge } from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <MainNavBar />

      {/* HERO SECTION */}
      <section
        style={{
          background: `linear-gradient(rgba(42,48,56,.55),rgba(42,48,56,.55)), url('/images/hero_image3.jpg') center/cover no-repeat`,
          minHeight: 650,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "90px 0",
        }}
      >
        <Container>
          <div className="text-center">
            <Badge
              pill
              className="mb-4"
              style={{
                background: "rgba(255,255,255,.15)",
                border: "1px solid rgba(255,255,255,.25)",
                fontSize: 16,
                padding: "10px 16px",
              }}
            >
              PURE MAGIC MEN’S GROOMING
            </Badge>

            <h1
              className="text-white fw-bold mb-3"
              style={{ fontSize: "3.3rem", lineHeight: 1.15 }}
            >
              Men’s grooming, made with Pure Magic.
            </h1>

            <p
              className="text-white mb-0"
              style={{
                maxWidth: 900,
                margin: "0 auto",
                fontWeight: 600,
                opacity: 0.95,
                fontSize: "1.35rem",
                lineHeight: 1.6,
              }}
            >
              Created by Magic the Barber—built around hair, skin, style,
              confidence, and the everyday details that help men look and feel
              sharp.
            </p>
          </div>
        </Container>
      </section>

      {/* STORY + VALUES */}
      <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <Container>
          <Row className="gy-4 justify-content-center">
            <Col md={11} lg={9}>
              <Card className="shadow-sm border-0 rounded-4 overflow-hidden">
                <CardBody className="p-4 p-md-5">
                  <h2 className="fw-bold mb-4" style={{ fontSize: "2.4rem" }}>
                    Our Origin Story
                  </h2>

                  <p
                    className="text-muted"
                    style={{ fontSize: "1.2rem", lineHeight: 1.9 }}
                  >
                    Pure Magic was created by Magic the Barber as more than a
                    product line—it is a men’s grooming brand built from years
                    behind the chair. After working with countless clients,
                    Magic saw how much confidence comes from the details: a
                    clean cut, healthy hair, moisturized skin, a sharp beard,
                    and a finished look that feels intentional.
                  </p>

                  <p
                    className="text-muted"
                    style={{ fontSize: "1.2rem", lineHeight: 1.9 }}
                  >
                    What started with handcrafted body butters has grown into a
                    broader vision for men’s hair, skincare, beard care, and
                    grooming essentials. Every product and service under Pure
                    Magic is designed to help men maintain their look, protect
                    their skin, care for their hair, and move through the world
                    with confidence.
                  </p>

                  <p
                    className="text-muted mb-0"
                    style={{ fontSize: "1.2rem", lineHeight: 1.9 }}
                  >
                    Pure Magic is rooted in barber culture, quality ingredients,
                    and real everyday use. From the chair to the shelf, the goal
                    is simple: give men products and grooming experiences that
                    keep them looking sharp, feeling fresh, and carrying
                    themselves with confidence.
                  </p>

                  {/* MINI VALUES ROW */}
                  <Row className="mt-5 g-3">
                    <Col md={4}>
                      <div
                        className="p-4 rounded-4 h-100"
                        style={{ background: "#f7fafd" }}
                      >
                        <div
                          className="fw-bold mb-2"
                          style={{ fontSize: "1.25rem" }}
                        >
                          Men’s Hair & Grooming
                        </div>
                        <div
                          className="text-muted"
                          style={{ fontSize: "1.05rem", lineHeight: 1.6 }}
                        >
                          Built from barber culture with products and services
                          that help men stay sharp.
                        </div>
                      </div>
                    </Col>

                    <Col md={4}>
                      <div
                        className="p-4 rounded-4 h-100"
                        style={{ background: "#f7fafd" }}
                      >
                        <div
                          className="fw-bold mb-2"
                          style={{ fontSize: "1.25rem" }}
                        >
                          Skin & Beard Care
                        </div>
                        <div
                          className="text-muted"
                          style={{ fontSize: "1.05rem", lineHeight: 1.6 }}
                        >
                          Grooming essentials made to support healthy-looking
                          skin, beards, and daily confidence.
                        </div>
                      </div>
                    </Col>

                    <Col md={4}>
                      <div
                        className="p-4 rounded-4 h-100"
                        style={{ background: "#f7fafd" }}
                      >
                        <div
                          className="fw-bold mb-2"
                          style={{ fontSize: "1.25rem" }}
                        >
                          Everyday Confidence
                        </div>
                        <div
                          className="text-muted"
                          style={{ fontSize: "1.05rem", lineHeight: 1.6 }}
                        >
                          More than products — Pure Magic is about helping men
                          look good and move different.
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CHERRY PAYMENT PLANS */}
      <section className="py-5" style={{ backgroundColor: "#f7fafd" }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={11} lg={9}>
              <Card className="shadow-sm border-0 rounded-4 overflow-hidden">
                <CardBody className="p-4 p-md-5 text-center">
                  <Badge
                    pill
                    className="mb-4"
                    style={{
                      background: "#111",
                      color: "#fff",
                      fontSize: 15,
                      padding: "10px 16px",
                    }}
                  >
                    FLEXIBLE PAYMENT OPTIONS
                  </Badge>

                  <h2
                    className="fw-bold mb-3"
                    style={{ fontSize: "2.3rem" }}
                  >
                    Pay Over Time with Cherry Payment Plans
                  </h2>

                  <p
                    className="text-muted mb-4"
                    style={{
                      fontSize: "1.18rem",
                      lineHeight: 1.8,
                      maxWidth: 760,
                      margin: "0 auto",
                    }}
                  >
                    Interested in paying in installments? Pure Magic customers
                    can apply for Cherry payment plans and get pre-approved
                    today. Applying is simple, fast, and won’t harm your credit.
                  </p>

                  <a
                    href="https://pay.withcherry.com/magic2u-mobile-barber-concierge-llc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark btn-lg rounded-pill px-4 py-3 fw-semibold"
                  >
                    Get Pre-Approved Today
                  </a>

                  <p
                    className="text-muted mt-4 mb-0"
                    style={{
                      fontSize: ".95rem",
                      lineHeight: 1.7,
                      maxWidth: 780,
                      margin: "0 auto",
                    }}
                  >
                    Payment options through Cherry Technologies, Inc. are issued
                    by the following financing partners:{" "}
                    <a
                      href="https://withcherry.com/financing-partners"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fw-semibold text-dark"
                    >
                      Cherry financing partners
                    </a>
                    .
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}