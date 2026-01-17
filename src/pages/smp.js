// pages/smp.js
import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Badge,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

/** Self-hosted video from /public/videos */
function HostedVideo({
  mp4Src = "/videos/smp-overview.mp4",
  poster = "/images/smp/video-poster.jpg",
  title = "SMP video",
}) {
  return (
    <div className="smp-video" aria-label={title}>
      <video controls playsInline preload="metadata" poster={poster}>
        <source src={mp4Src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default function SMPPage() {
  const title = "Scalp Micropigmentation (SMP) Clinic";
  const desc =
    "Natural-looking scalp micropigmentation for hairline restoration, density, and scar concealment. Book a consultation and get pricing.";

  const valueBar = [
    { title: "Personalized Treatment", sub: "Designed for your hairline and goals." },
    { title: "Affordable Pricing", sub: "Transparent options and bundles." },
    { title: "Certified Professionals", sub: "Clean, detailed work you can trust." },
  ];

  const helpWith = [
    { title: "Hairline Restoration", img: "/images/smp/help-hairline.jpg" },
    { title: "Scalp Scar Concealment", img: "/images/smp/help-scar.jpg" },
    { title: "Beard Density Enhancement", img: "/images/smp/help-beard.jpg" },
    { title: "Density / Thinning", img: "/images/smp/help-density.jpg" },
    { title: "Alopecia", img: "/images/smp/help-alopecia.jpg" },
  ];

  const steps = [
    { n: "1", title: "Consultation", desc: "We review goals, hair loss pattern, and ideal look." },
    { n: "2", title: "Design", desc: "Custom hairline + shade plan matched to your tone." },
    { n: "3", title: "First Session", desc: "Build the base layer and natural density." },
    { n: "4", title: "Second Session", desc: "Add depth, details, and refine the blend." },
    { n: "5", title: "Final Review", desc: "Touch-ups and aftercare plan for long-term results." },
  ];

  const testimonials = [
    {
      name: "Jason",
      quote:
        "The hairline looks natural and the blend is clean. It changed my confidence completely.",
      stars: 5,
    },
    {
      name: "Andre",
      quote:
        "Professional, precise, and honest. The aftercare guidance was solid and results are top-tier.",
      stars: 5,
    },
    {
      name: "Kayla",
      quote:
        "Scar concealment came out amazing. You can barely tell anything was there.",
      stars: 5,
    },
  ];

  const faqs = [
    {
      q: "How much does SMP cost?",
      a: "Pricing depends on coverage area, density goals, and number of sessions. Request the pricing guide or book a consultation for an exact quote.",
    },
    {
      q: "Does SMP look natural up close?",
      a: "When done correctly with proper dot size, placement, and tone matching, SMP looks natural. We design a hairline that fits your face and age.",
    },
    {
      q: "How many sessions do I need?",
      a: "Most clients need 2–3 sessions to build a realistic, layered result. Some cases may require additional sessions depending on goals.",
    },
    {
      q: "Is SMP painful?",
      a: "Most clients describe it as mild to moderate discomfort. Sensitivity varies by person and area treated.",
    },
    {
      q: "How long does SMP last?",
      a: "SMP is long-lasting and typically requires a refresh over time. Longevity depends on skin type, sun exposure, and aftercare.",
    },
  ];

  const gallery = [
    "/images/smp/results-1.jpg",
    "/images/smp/results-2.jpg",
    "/images/smp/results-3.jpg",
    "/images/smp/results-4.jpg",
    "/images/smp/results-5.jpg",
    "/images/smp/results-6.jpg",
    "/images/smp/results-7.jpg",
    "/images/smp/results-8.jpg",
    "/images/smp/results-9.jpg",
    "/images/smp/results-10.jpg",
    "/images/smp/results-11.jpg",
    "/images/smp/results-12.jpg",
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="scalp micropigmentation, SMP clinic, hairline restoration, density SMP, scar concealment, alopecia, beard SMP"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <MainNavBar />

      {/* TOP MINI BAR */}
      <div className="smp-topbar">
        <Container className="smp-topbar-inner">
          <div className="smp-brand">
          </div>

          <div className="smp-top-actions">
            <a className="smp-phone" href="tel:9166407271">
              (916) 640 7271
            </a>
          </div>
        </Container>
      </div>

      {/* HERO */}
      <section className="smp-hero">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={6}>

              <h1 className="smp-h1">Don’t settle for hair loss.</h1>

              <p className="smp-lead" style={{ color: "#000" }}>
                Let us help you with the only non-invasive treatment with realistic, natural-looking results.
                Designed for confidence, built with precision.
              </p>

              <div className="smp-hero-actions">
                <a className="smp-btn-primary" href="#pricing">
                  NEED PRICING NOW? CLICK HERE
                </a>
                <Link href="/contact" passHref legacyBehavior>
                  <a className="smp-btn-secondary">BOOK A CONSULTATION</a>
                </Link>
              </div>

              <div className="smp-microcopy">
                Serving the Bay Area • Custom hairline design • 2–3 sessions typically
              </div>
      {/* WHAT IS SMP */}
      <section className="smp-section" style={{ color: "#000" }}>
          <Row className="align-items-center g-6">
            <Col lg={12}>
              <h2 className="smp-h2" style={{ color: "#000" }}>What is Scalp Micropigmentation (SMP)?</h2>
              <p className="smp-text" style={{ color: "#000" }}>
                Scalp Micropigmentation (SMP) is a non-invasive cosmetic procedure that uses micro-dots of pigment
                to replicate the appearance of natural hair follicles. For shaved styles, it creates a clean, fresh
                “shadow” look. For thinning hair, it adds the illusion of density.
              </p>
              <p className="smp-text" style={{ color: "#000" }}>
                Men and women can be treated for hair loss in under two hours. Results are realistic, immediate, and
                designed to match your skin tone and desired hairline.
              </p>
            </Col>


          </Row>
      </section>

            </Col>

            <Col lg={6}>
            <HostedVideo
                mp4Src="/video/smp-overview.mp4"
                poster="/images/thumbnail.jpg"
                title="SMP Overview"
              />
            </Col>
          </Row>
        </Container>
      </section>






      {/* ...rest of your sections remain unchanged... */}

      <Footer />

      <style jsx global>{`
        :root {
          --ink: #111214;
          --muted: rgba(17, 18, 20, 0.68);
          --accent: #0f766e;
          --accent-dark: #0a5c56;
          --peach: #f3d7c8;
          --mint: rgba(15, 118, 110, 0.18);
          --radius: 18px;
        }

        .smp-h2 {
            color: #000!important;
        }

        .smp-section {
          background: #fff;
          padding: 54px 0;
        }

        /* VIDEO styles (NEW) */
        .smp-video {
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 16px 44px rgba(0, 0, 0, 0.12);
          background: #000;
        }
        .smp-video video {
          width: 100%;
          height: 500px;
          display: block;
        }
        .smp-video-section {
          background: #fafafa;
        }
      `}</style>
    </>
  );
}
