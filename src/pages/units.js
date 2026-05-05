// pages/hair-units.js
import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Badge,
} from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

export default function HairUnitsPage() {
  const title = "Non-Surgical Hair Units | Pure Magic";
  const desc =
    "Premium non-surgical hair units with install, haircut, maintenance, and recurring support. Financing available through Cherry. Book your consultation with Pure Magic.";

  const included = [
    {
      title: "Hair Unit Install",
      desc: "Brand new custom hair unit installed every 90 days for a fresh, clean look throughout the year.",
    },
    {
      title: "Haircut & Style",
      desc: "Professional haircut and styling at each visit so the finished look feels seamless and polished.",
    },
    {
      title: "Unit Maintenance",
      desc: "Regular cleanups, adjustments, and care support between installs to keep your system looking its best.",
    },
    {
      title: "Prep for Next Install",
      desc: "Unit removal, scalp cleanup, and prep work so you are ready for the next quarterly install.",
    },
  ];

  const benefits = [
    "100% non-surgical",
    "Natural look and feel",
    "All hair types and textures",
    "Ongoing support",
    "Quarterly fresh unit plan",
  ];

  const idealFor = [
    {
      title: "Clients Wanting Full Coverage",
      desc: "A strong option for men looking for a full hair solution without surgery or long downtime.",
    },
    {
      title: "Men Who Want a Maintenance Plan",
      desc: "Built for clients who want a structured, repeatable solution instead of figuring it out visit by visit.",
    },
    {
      title: "Clients Looking for Financing",
      desc: "Cherry financing gives clients a path to get started without carrying the full upfront cost alone.",
    },
  ];

  const steps = [
    "Consultation and hair-match planning",
    "Initial install and styling",
    "Ongoing maintenance and adjustments",
    "Fresh install every 90 days",
  ];

  const faqs = [
    {
      q: "Is this surgical?",
      a: "No. This is a non-surgical hair replacement solution designed for a natural look without a scalpel or extended downtime.",
    },
    {
      q: "What does the yearly plan include?",
      a: "The plan includes a new unit install every 90 days, haircut and styling, routine maintenance, and prep for your next install.",
    },
    {
      q: "Do you work with different hair types?",
      a: "Yes. We work across different races, hair types, and textures, and fit the look to the client.",
    },
    {
      q: "Is financing available?",
      a: "Yes. Financing is available through Cherry, which gives clients more flexibility in how they get started.",
    },
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="non-surgical hair units, hair replacement, custom hair unit, hair unit install, hair system, Oakland hair units, Pure Magic hair replacement"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <MainNavBar />

      <section className="huHero">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={7}>
              <p className="huKicker">Magic2u</p>
              <h1 className="huH1">Non-Surgical Hair Units That Restore Confidence</h1>
              <p className="huLead">
                Real hair. Real confidence. Real results. Our non-surgical hair
                unit program is designed for men who want a clean, natural look
                with ongoing support and structured maintenance.
              </p>

              <div className="heroPills">
                <span className="heroPill">100% non-surgical</span>
                <span className="heroPill">Natural custom fit</span>
                <span className="heroPill">Financing available</span>
              </div>

              <div className="heroActions">
                <a className="btnGold" href="/contact">
                  BOOK A CONSULTATION
                </a>
                <a
                  className="btnOutline"
                  href="https://pay.withcherry.com/magic2u-mobile-barber-concierge-llc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GET PRE-APPROVED
                </a>
              </div>
            </Col>

            <Col lg={5}>
              <div className="heroCard">
                <div className="heroCardTop">
                  <Badge pill className="topBadge">
                    Yearly Plan
                  </Badge>
                  <p className="planSub">Complete hair solution. All year long.</p>
                </div>

                <div className="priceWrap">
                  <p className="priceLabel">Starting at</p>
                  <h2 className="priceValue">$3,500</h2>
                </div>

                <div className="heroCardBody">
                  <p className="priceMeta">Financing available through Cherry</p>
                  <div className="heroChecklist">
                    {benefits.map((item) => (
                      <div className="checkItem" key={item}>
                        <span className="checkDot">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="huSection huSectionLight">
        <Container>
          <div className="sectionHead center">
            <p className="sectionKickerDark">What the plan includes</p>
            <h2 className="huH2 dark">
              A Premium Hair Replacement Program, Built for Consistency
            </h2>
            <p className="sectionSub darkSub">
              Structured support, recurring installs, and a clean finish designed
              to keep you looking sharp year-round.
            </p>
          </div>

          <Row className="g-4">
            {included.map((item) => (
              <Col md={6} key={item.title}>
                <Card className="infoCard h-100">
                  <CardBody>
                    <h3 className="infoTitle">{item.title}</h3>
                    <p className="infoDesc">{item.desc}</p>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="huSection huShowcase">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <div className="showcaseImageWrap">
                <img
                  src="/images/non-surgical-hair-units-promo.png"
                  alt="Non-surgical hair unit before and after"
                />
              </div>
            </Col>

            <Col lg={6}>
              <p className="sectionKicker">Why clients choose this</p>
              <h2 className="huH2">A Natural Look Without Surgery</h2>
              <p className="lightText">
                This offer is built for men who want a dependable hair solution
                that looks natural, feels customized, and comes with real support.
                From install to maintenance, the goal is a smoother experience
                and a stronger result.
              </p>

              <div className="stepList">
                {steps.map((step) => (
                  <div className="stepItem" key={step}>
                    <span className="stepDot" />
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="huSection huSectionLight">
        <Container>
          <div className="sectionHead center">
            <p className="sectionKickerDark">Good fit</p>
            <h2 className="huH2 dark">Who This Offer Is Best For</h2>
          </div>

          <Row className="g-4">
            {idealFor.map((item) => (
              <Col md={4} key={item.title}>
                <div className="fitCard">
                  <h3 className="fitTitle">{item.title}</h3>
                  <p className="fitDesc">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="huSection faqSection">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="faqCard">
                <div className="sectionHead center">
                  <p className="sectionKicker">FAQ</p>
                  <h2 className="huH2">Questions Clients Usually Ask</h2>
                </div>

                <div className="faqWrap">
                  {faqs.map((item) => (
                    <details key={item.q} className="faqItem">
                      <summary>{item.q}</summary>
                      <p>{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="huSection huSectionLight">
        <Container>
          <Row className="g-4 align-items-stretch">
            <Col lg={6}>
              <div className="contactCard">
                <h3 className="contactTitle">Book Your Consultation</h3>
                <p className="contactCopy">
                  Ready to explore a non-surgical hair unit solution? Reach out
                  and we’ll walk you through fit, pricing, and next steps.
                </p>
                <p className="contactLine">
                  <strong>Phone:</strong> <a href="tel:9166407271">916-640-7271</a>
                </p>
                <p className="contactLine">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:magic2ubiz@gmail.com">magic2ubiz@gmail.com</a>
                </p>
                <p className="contactLine">
                  <strong>Instagram:</strong>{" "}
                  <a
                    href="https://instagram.com/magicthebarber"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @magicthebarber
                  </a>
                </p>
                <p className="contactLine">
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://magic2u.biz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Magic2u.biz
                  </a>
                </p>

                <div className="contactActions">
                  <Link href="/contact" legacyBehavior>
                    <a className="btnGold full">BOOK NOW</a>
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="cherryCard">
                <Badge pill className="cherryBadge">
                  Financing Available
                </Badge>
                <h3 className="contactTitle darkText">Pay Over Time With Cherry</h3>
                <p className="cherryCopy">
                  Applying is quick, easy, and will not harm your credit. This
                  gives clients a more flexible way to move forward with treatment.
                </p>

                <a
                  href="https://pay.withcherry.com/magic2u-mobile-barber-concierge-llc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btnDark full"
                >
                  GET PRE-APPROVED TODAY
                </a>

                <p className="finePrint">
                  Payment options through Cherry Technologies, Inc. are issued by
                  approved financing partners.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />

      <style jsx global>{`
        :root {
          --bg: #070707;
          --card: #111111;
          --line: rgba(255, 255, 255, 0.1);
          --text: rgba(255, 255, 255, 0.92);
          --muted: rgba(255, 255, 255, 0.72);
          --gold: #d8a437;
          --goldDark: #b9831d;
          --cream: #f7f2ea;
          --light: #f5f1eb;
          --shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          --radius: 20px;
        }

        .huHero {
          background:
            radial-gradient(900px 400px at 20% 10%, rgba(216, 164, 55, 0.18), transparent 60%),
            linear-gradient(180deg, #040404 0%, #0b0b0b 100%);
          color: var(--text);
          padding: 72px 0 64px;
        }

        .huKicker,
        .sectionKicker {
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.72);
          margin: 0 0 10px;
        }

        .sectionKickerDark {
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 0.78rem;
          color: rgba(17, 17, 17, 0.55);
          margin: 0 0 10px;
        }

        .huH1 {
          font-size: clamp(2.3rem, 4vw, 3.6rem);
          line-height: 1.02;
          font-weight: 900;
          margin: 0 0 14px;
          color: #ffffff;
        }

        .huH2 {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          line-height: 1.08;
          font-weight: 900;
          margin: 0 0 10px;
          color: #ffffff;
        }

        .huH2.dark {
          color: #111111 !important;
        }

        .huLead,
        .lightText {
          font-size: 1.08rem;
          line-height: 1.8;
          color: var(--muted);
        }

        .heroPills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 18px 0 20px;
        }

        .heroPill {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.85);
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 0.92rem;
        }

        .heroActions,
        .contactActions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 20px;
        }

        .btnGold,
        .btnOutline,
        .btnDark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-weight: 800;
          border-radius: 14px;
          padding: 13px 18px;
          transition: 0.15s ease;
        }

        .btnGold {
          background: var(--gold);
          color: #111111;
        }

        .btnGold:hover {
          background: var(--goldDark);
          color: #111111;
          transform: translateY(-1px);
        }

        .btnOutline {
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #ffffff;
          background: transparent;
        }

        .btnOutline:hover,
        .btnDark:hover {
          transform: translateY(-1px);
          opacity: 0.96;
        }

        .btnDark {
          background: #111111;
          color: #ffffff;
        }

        .full {
          width: 100%;
        }

        .heroCard {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.02) 100%);
          border: 1px solid rgba(216, 164, 55, 0.22);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: var(--shadow);
        }

        .heroCardTop {
          padding: 22px 22px 10px;
        }

        .topBadge {
          background: var(--gold) !important;
          color: #111111;
          font-weight: 800;
          padding: 8px 12px;
          margin-bottom: 12px;
        }

        .planSub {
          margin: 0;
          color: rgba(255, 255, 255, 0.78);
        }

        .priceWrap {
          background: rgba(216, 164, 55, 0.08);
          border-top: 1px solid rgba(216, 164, 55, 0.18);
          border-bottom: 1px solid rgba(216, 164, 55, 0.18);
          padding: 20px 22px;
        }

        .priceLabel {
          margin: 0 0 8px;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 0.76rem;
        }

        .priceValue {
          margin: 0;
          font-size: clamp(2.4rem, 4vw, 3.4rem);
          font-weight: 900;
          color: #ffffff;
        }

        .heroCardBody {
          padding: 20px 22px 24px;
        }

        .priceMeta {
          color: var(--muted);
          margin-bottom: 16px;
        }

        .heroChecklist {
          display: grid;
          gap: 12px;
        }

        .checkItem {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          color: rgba(255, 255, 255, 0.88);
        }

        .checkDot {
          color: var(--gold);
          font-weight: 900;
          line-height: 1;
          margin-top: 2px;
        }

        .huSection {
          padding: 68px 0;
          background: var(--bg);
        }

        .huSectionLight {
          background: var(--light);
        }

        .huSectionLight .sectionHead,
        .huSectionLight .sectionSub,
        .huSectionLight .infoTitle,
        .huSectionLight .infoDesc,
        .huSectionLight .fitTitle,
        .huSectionLight .fitDesc,
        .huSectionLight .contactTitle,
        .huSectionLight .contactCopy,
        .huSectionLight .contactLine,
        .huSectionLight .darkText,
        .huSectionLight .cherryCopy,
        .huSectionLight .finePrint {
          color: #111111;
        }

        .sectionHead.center {
          text-align: center;
          margin-bottom: 28px;
        }

        .sectionSub {
          max-width: 760px;
          margin: 0 auto;
          line-height: 1.75;
        }

        .darkSub {
          color: rgba(17, 17, 17, 0.72) !important;
        }

        .infoCard,
        .fitCard,
        .contactCard,
        .cherryCard {
          border: 1px solid rgba(17, 17, 17, 0.08);
          border-radius: 20px;
          background: #ffffff;
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.06);
          height: 100%;
        }

        .infoCard .card-body {
          padding: 24px;
        }

        .infoTitle,
        .fitTitle,
        .contactTitle {
          margin: 0 0 10px;
          font-weight: 900;
          color: #111111;
        }

        .infoDesc,
        .fitDesc,
        .contactCopy,
        .cherryCopy {
          margin: 0;
          line-height: 1.75;
          color: rgba(17, 17, 17, 0.72);
        }

        .huShowcase {
          background: linear-gradient(180deg, #060606 0%, #0d0d0d 100%);
        }

        .showcaseImageWrap img {
          width: 100%;
          height: 680px;
          object-fit: cover;
          object-position: center top;
          border-radius: 22px;
          display: block;
          box-shadow: var(--shadow);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .stepList {
          display: grid;
          gap: 14px;
          margin-top: 22px;
        }

        .stepItem {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .stepItem p {
          margin: 0;
          color: rgba(255, 255, 255, 0.84);
          line-height: 1.65;
        }

        .stepDot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: var(--gold);
          margin-top: 8px;
          flex: 0 0 auto;
        }

        .fitCard {
          padding: 24px;
        }

        .faqSection {
          background: #0a0a0a;
        }

        .faqCard {
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.03);
          padding: 26px;
        }

        .faqWrap {
          display: grid;
          gap: 12px;
        }

        .faqItem {
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.03);
          padding: 12px 14px;
        }

        .faqItem summary {
          cursor: pointer;
          color: #ffffff;
          font-weight: 800;
        }

        .faqItem p {
          margin: 10px 0 0;
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.75;
        }

        .contactCard,
        .cherryCard {
          padding: 24px;
        }

        .contactLine a,
        .finePrint a {
          color: #111111;
          text-decoration: underline;
        }

        .cherryBadge {
          background: #111111 !important;
          color: #ffffff;
          font-weight: 800;
          padding: 8px 12px;
          margin-bottom: 14px;
        }

        .darkText {
          color: #111111 !important;
        }

        .finePrint {
          margin: 14px 0 0;
          color: rgba(17, 17, 17, 0.62);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        @media (max-width: 992px) {
          .showcaseImageWrap img {
            height: 520px;
          }
        }

        @media (max-width: 576px) {
          .huHero {
            padding: 56px 0 48px;
          }

          .showcaseImageWrap img {
            height: 420px;
          }
        }
      `}</style>
    </>
  );
}