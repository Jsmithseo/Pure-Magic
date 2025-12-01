// pages/pathway-humanity.js
import Head from "next/head";
import React from "react";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import { Container, Row, Col } from "reactstrap";

export default function PathwayHumanity() {
  return (
    <>
      <Head>
        <title>Pathway Humanity — Mentorship Program Overview</title>
        <meta
          name="description"
          content="Pathway Humanity’s mentorship program in Richmond & Antioch provides guidance, life skills, and clear pathways into education, apprenticeships, or the workforce."
        />
        <meta property="og:title" content="Pathway Humanity — Mentorship Program Overview" />
        <meta
          property="og:description"
          content="Goal setting, skills workshops, job shadowing, networking, mock interviews, and incentives including stipends, college fee support, internships, and employment pathways."
        />
        <meta property="og:type" content="website" />
      </Head>

      {typeof MainNavBar === "function" ? <MainNavBar /> : null}

      {/* HERO */}
      <section className="hero">
        <img
          className="hero-img"
          src="/images/pathway-humanity-hero.jpg"
          alt="Mentor speaking with students — Pathway Humanity"
        />
        <div className="hero-overlay" />
        <Container className="hero-inner">
          <Row>
            <Col lg={{ size: 9 }}>
              <h1>
                PATHWAY HUMANITY<br />
                <span>MENTORSHIP PROGRAM OVERVIEW</span>
              </h1>
              <p className="lead">
                Pathway Humanity runs a comprehensive mentorship program in <strong>Richmond</strong> and{" "}
                <strong>Antioch</strong>, California. Our mission is to disrupt cycles of hardship by providing
                participants with support, essential life skills, and clear direction toward continued education
                or workforce entry.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* IMAGE BAND (full-bleed banner image with optional caption) */}

      {/* CONTENT */}
      <section className="content">
        <Container>
          <Row>
           
            <Col lg={{ size: 10, offset: 1 }}>
            <h2>Mentorship Pathway to Purpose - Building Futures for our Youth</h2>
            <br></br>
              <h2>Key Information</h2>
              <ul className="bullets">
                <li>
                  <strong>Goal:</strong> Provide the guidance and mentorship necessary for participants to achieve
                  stability and successfully transition to either advanced education or direct entry into the
                  workforce/apprenticeship programs.
                </li>
                <li>
                  <strong>Curriculum:</strong> Structured activities including <em>Goal Setting Sessions</em>,{" "}
                  <em>Skills-Based Workshops</em>, <em>Job Shadowing</em>, <em>Networking Events</em>,{" "}
                  <em>Career Development Discussions</em>, and <em>Mock Interviews</em>, supplemented by
                  communication and ethics training.
                </li>
                <li>
                  <strong>Mentee Engagement:</strong> Participants are encouraged to be receptive to feedback, apply
                  new insights, clearly articulate their needs, and maximize participation.
                </li>
                <li>
                  <strong>Incentives for Success:</strong> Completion may include stipends for basic living expenses,
                  coverage of college application fees, admittance into internships, guaranteed employment
                  opportunities with high-demand employers, and a celebratory field trip.
                </li>
              </ul>

              <hr className="rule" />

              <h2>Community Support</h2>
              <p>
                The initiative adopts a holistic approach that extends beyond mentorship to meet real community needs.
              </p>
              <ul className="bullets">
                <li>
                  <strong>Substance Misuse / Relapse Prevention:</strong> Prevention education, facilitated access
                  to treatment, and ongoing support.
                </li>
                <li>
                  <strong>Community Training:</strong> Specialized training for frontline staff and widely accessible
                  workshops on overdose recognition and response, including instruction on <em>Naloxone</em> administration.
                </li>
              </ul>

              <hr className="rule" />

              <h2>Why Join</h2>
              <p>
                Our mentorship program connects emerging talent with seasoned professionals across fields, providing
                guidance, essential insights, and a strong, supportive network. Mentees learn to navigate career paths,
                build leadership and communication skills, and accelerate their learning curve—while mentors give back by
                sharing experience around skills development, work-life balance, and industry challenges.
              </p>

              <div className="cta">
                <p className="cta-title">Take the First Step</p>
                <p>
                  To participate in this highly sought-after program, please reach out directly. All inquiries and
                  expressions of interest should be emailed to:
                </p>
                <p>
                  <a className="cta-link" href="mailto:info@pathwayhumanity.com">info@pathwayhumanity.com</a>
                </p>
                <p>
                  A representative from Pathway Humanity will follow up promptly with details on the application process,
                  program structure, and timelines. Don’t miss this chance to invest in your future—or give back to the
                  next generation of leaders.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ADDRESS STRIP */}
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
        h1 span { color: #fff; }
        .lead {
          font-size: 1.125rem;
          color: rgba(255,255,255,0.92);
          margin: 0;
        }

        /* IMAGE BAND */
        .image-band {
          position: relative;
          background: #000;
        }
        .image-wrap {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          /* 21:9-ish banner ratio that shrinks nicely */
          aspect-ratio: 21 / 9;
          width: 100%;
        }
        .image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,.10) 0%, rgba(0,0,0,.35) 100%);
        }
        .image-caption {
          position: absolute;
          left: 18px;
          bottom: 14px;
          color: #fff;
          font-weight: 700;
          letter-spacing: .02em;
          text-shadow: 0 2px 8px rgba(0,0,0,.35);
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
          margin-bottom: 16px;
        }
        .bullets {
          margin: 0 0 26px 0;
          padding-left: 1.25rem;
        }
        .bullets li {
          margin: 0 0 10px 0;
          line-height: 1.55;
          font-size: 1.02rem;
        }
        .rule {
          border: 0;
          border-top: 2px solid #eaeaea;
          margin: 26px 0;
        }

        .cta {
          background: #f7fffd;
          border: 1px solid #d7f0ea;
          border-radius: 12px;
          padding: 16px 18px;
        }
        .cta-title {
          margin: 0 0 6px;
          font-weight: 800;
          color: var(--teal-dark);
          text-transform: uppercase;
          letter-spacing: .02em;
        }
        .cta-link {
          color: var(--teal-dark);
          text-decoration: underline;
          font-weight: 700;
        }

        .address-strip {
          background: var(--teal);
          color: #fff;
          padding: 14px 0;
          font-size: 0.95rem;
        }
        .address-strip p { margin: 0; text-align: left; }

        @media (max-width: 992px) {
          .hero { min-height: 56vh; }
          .hero-inner { padding: 48px 0; }
          .lead { font-size: 1rem; }
          .image-wrap { aspect-ratio: 16 / 9; }
        }

        /* optional tighter hero height bounds */
        .hero {
          height: 56vh;
          min-height: 520px;
          max-height: 780px;
        }
        @media (max-width: 992px) {
          .hero { height: 48vh; min-height: 360px; }
        }
      `}</style>
    </>
  );
}
