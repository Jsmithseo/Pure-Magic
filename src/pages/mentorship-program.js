// pages/pathway-humanity.js
import Head from "next/head";
import React from "react";
// If your app uses these shared components, keep them; otherwise remove.
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import { Container, Row, Col } from "reactstrap";

export default function PathwayHumanity() {
  return (
    <>
      <Head>
        <title>Pathway Humanity — Empowering Youth</title>
        <meta
          name="description"
          content="Mentorship for high-school students in Richmond & Antioch: drug awareness, life skills, academic support, constructive activities, and stipends."
        />
        <meta property="og:title" content="Pathway Humanity — Empowering Youth" />
        <meta
          property="og:description"
          content="One-on-one mentorship, skill-building workshops, educational support, community activities, and stipends."
        />
        <meta property="og:type" content="website" />
      </Head>

      {typeof MainNavBar === "function" ? <MainNavBar /> : null}

      {/* HERO */}
      <section className="hero">
        <img
          className="hero-img"
          src="/images/pathway-humanity-hero.jpg"
          alt="Group of smiling high-school students — Pathway Humanity"
        />
        <div className="hero-overlay" />
        <Container className="hero-inner">
          <Row>
            <Col lg={{ size: 8 }}>
              <h1>
                PATHWAY HUMANITY:<br />
                <span>EMPOWERING YOUTH</span>
              </h1>
              <p className="lead">
                Pathway Humanity offers a mentorship program for high-school students in{" "}
                <strong>Richmond</strong> and <strong>Antioch</strong>. We educate young people
                about the dangers of opioids, alcohol, and other prevalent community drugs. In
                addition to raising drug awareness, we provide essential life skills and deliver
                avenues for a brighter future through career development, apprenticeship programs,
                college preparedness, and cash stipends.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CONTENT */}
      <section className="content">
        <Container>
          <Row>
            <Col lg={{ size: 10, offset: 1 }}>
              <h2>Key Program Benefits:</h2>
              <ul className="benefits">
                <li>
                  <strong>One-on-one mentorship:</strong> Individualized skill development
                </li>
                <li>
                  <strong>Skill-building workshops:</strong> Practice essential skills
                </li>
                <li>
                  <strong>Educational support:</strong> Improve academics
                </li>
                <li>
                  <strong>Constructive community activities:</strong> Apply skills in real-world settings
                </li>
                <li>
                  <strong>Stipends:</strong> Graduates earn cash and scholarships for college application fees
                </li>
              </ul>

              <hr className="rule" />

              <div className="warning">
                <div className="icon" aria-hidden>⚠️</div>
                <div>
                  <p className="warning-title">Important Warning</p>
                  <p>
                    Fentanyl, a strong synthetic opioid, is popping up in other drugs more and more,
                    and even a tiny bit can be deadly. Fake pills can look, feel, and even smell
                    exactly like real ones. If you didn’t get a pill from a licensed pharmacy,
                    assume it’s fake.
                  </p>
                </div>
              </div>

              <hr className="rule" />

              <div className="contact">
                <p>To learn more about our mentorship program, please contact <strong>Pathway Humanity</strong>:</p>
                <ul className="contact-list">
                  <li>
                    Phone:{" "}
                    <a href="tel:+18887107760" aria-label="Phone">
                      (888) 710-7760
                    </a>
                  </li>
                  <li>
                    Website:{" "}
                    <a href="https://pathwayhumanity.com" target="_blank" rel="noopener noreferrer">
                      pathwayhumanity.com
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ADDRESS STRIP (matches flyer footer bar) */}
      <section className="address-strip" aria-label="Organization address">
        <Container>
          <Row>
            <Col md="12">
              <p>
                Pathway Humanity &nbsp;•&nbsp; 1320 Willow Pass Road, Suite 624 &nbsp;•&nbsp; Concord, CA 94520
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {typeof Footer === "function" ? <Footer /> : null}


      <style jsx>{`
    
        :root {
          --teal: #14a2a1;
          --teal-dark: #118c8b;
          --ink: #111111;
          --ink-60: rgba(17,17,17,0.6);
          --paper: #ffffff;
        }

        .hero {
          position: relative;
          min-height: 62vh;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          background: #000;
        }
        .hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.85) 100%);
        }
        .hero-inner {
          position: relative;
          z-index: 1;
          padding: 64px 0 64px;
          color: #fff;
        }
        h1 {
          font-weight: 900;
          line-height: 1.08;
          margin-bottom: 12px;
          letter-spacing: 0.2px;
          text-transform: uppercase;
        }
        h1 span {
          color: #fff;
        }
        .lead {
          font-size: 1.125rem;
          color: rgba(255,255,255,0.92);
          margin: 0;
        }

        .content {
          background: var(--paper);
          padding: 56px 0 72px;
          color: var(--ink);
        }
        h2 {
          font-size: 1.5rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .benefits {
          margin: 0 0 28px 0;
          padding-left: 1.25rem;
        }
        .benefits li {
          margin: 0 0 10px 0;
          line-height: 1.55;
          font-size: 1.02rem;
        }
        .rule {
          border: 0;
          border-top: 2px solid #eaeaea;
          margin: 26px 0;
        }

        .warning {
          background: #fff8e6;
          border: 1px solid #f0d48a;
          border-radius: 12px;
          padding: 16px 18px;
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 12px;
        }
        .warning-title {
          font-weight: 800;
          margin: 0 0 4px;
        }
        .icon { font-size: 22px; line-height: 1; }

        .contact p { margin-bottom: 6px; }
        .contact-list { padding-left: 1.25rem; margin: 0; }
        .contact-list li { margin: 6px 0; }
        .contact a { color: var(--teal-dark); text-decoration: underline; }

        .address-strip {
          background: var(--teal);
          color: #fff;
          padding: 14px 0;
          font-size: 0.95rem;
        }
        .address-strip p {
          margin: 0;
          text-align: left;
        }

        @media (max-width: 992px) {
          .hero { min-height: 56vh; }
          .hero-inner { padding: 48px 0; }
          .lead { font-size: 1rem; }
        }

        .hero {
            position: relative;
            height: 56vh;          /* adjust as needed */
            min-height: 600px;
            max-height: 780px;
            overflow: hidden;
          }
          .hero img {
            width: 100%;
            height: 100%;
            object-fit: cover;     /* fills container */
            object-position: 50% 45%; /* nudge focal point if needed */
            display: block;
          }
          @media (max-width: 992px) { .hero { height: 48vh; min-height: 360px; } }
      `}</style>
    </>
  );
}
