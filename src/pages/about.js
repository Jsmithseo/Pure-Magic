// pages/about.js
import React from "react";
import { Container, Row, Col, Card, CardBody, Button, Badge } from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import Link from "next/link";

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
              PURE MAGIC BODY BUTTER
            </Badge>

            <h1 className="text-white fw-bold mb-3" style={{ fontSize: "3.3rem", lineHeight: 1.15 }}>
              Handcrafted skincare, made behind the chair.
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
              Created by Magic the Barber—built for real moisture, real softness, and that clean, healthy glow.
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

                  <p className="text-muted" style={{ fontSize: "1.2rem", lineHeight: 1.9 }}>
                    Magic the Barber spent years watching people leave the shop feeling sharper, lighter, and more
                    confident—because when you look good, you move different. But he also noticed something else: dry
                    skin, rough hands, and that “ash” that shows up no matter how fresh the cut is. He wanted something
                    simple that actually worked—something you could use daily and feel the difference.
                  </p>

                  <p className="text-muted" style={{ fontSize: "1.2rem", lineHeight: 1.9 }}>
                    So Magic began blending his own body butter for himself and the people around him. He focused on{" "}
                    <span className="fw-semibold text-dark">hand-crafting a quality product</span> with the{" "}
                    <span className="fw-semibold text-dark">right balance of ingredients</span>—using{" "}
                    <span className="fw-semibold text-dark">all-natural components</span> that are{" "}
                    <span className="fw-semibold text-dark">chemical-free</span>. Word spread fast: it goes on smooth,
                    keeps skin soft, and leaves a clean, healthy glow.
                  </p>

                  <p className="text-muted mb-0" style={{ fontSize: "1.2rem", lineHeight: 1.9 }}>
                    What started as a personal fix turned into a ritual—an everyday essential made with the same care he
                    brings to his craft. That’s the heart of{" "}
                    <span className="fw-semibold text-dark">Pure Magic</span>: real moisture, real confidence,
                    handcrafted by someone who knows the power of the details.
                  </p>

                  {/* MINI VALUES ROW */}
                  <Row className="mt-5 g-3">
                    <Col md={4}>
                      <div className="p-4 rounded-4" style={{ background: "#f7fafd" }}>
                        <div className="fw-bold mb-2" style={{ fontSize: "1.25rem" }}>
                          Handcrafted Quality
                        </div>
                        <div className="text-muted" style={{ fontSize: "1.05rem", lineHeight: 1.6 }}>
                          Made with care and consistency—like a fresh cut.
                        </div>
                      </div>
                    </Col>

                    <Col md={4}>
                      <div className="p-4 rounded-4" style={{ background: "#f7fafd" }}>
                        <div className="fw-bold mb-2" style={{ fontSize: "1.25rem" }}>
                          All-Natural Components
                        </div>
                        <div className="text-muted" style={{ fontSize: "1.05rem", lineHeight: 1.6 }}>
                          Clean ingredients that support soft, healthy-looking skin.
                        </div>
                      </div>
                    </Col>

                    <Col md={4}>
                      <div className="p-4 rounded-4" style={{ background: "#f7fafd" }}>
                        <div className="fw-bold mb-2" style={{ fontSize: "1.25rem" }}>
                          Chemical-Free
                        </div>
                        <div className="text-muted" style={{ fontSize: "1.05rem", lineHeight: 1.6 }}>
                          Simple, feel-good skincare you can trust.
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


      <Footer />
    </>
  );
}
