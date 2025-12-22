// pages/index.jsx
import React, { useState, useRef } from "react";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import ProductsSection from "../components/ProductSection";
import KokumButter from "../components/KokumButter"

import { shopifyFetch } from "../../libs/shopify"; // ✅ adjust if your path differs

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  Spinner,
} from "reactstrap";

const PRODUCTS_QUERY = `
  query Products($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          availableForSale
          featuredImage { url altText }
          priceRange { minVariantPrice { amount currencyCode } }

          variants(first: 1) {
            edges {
              node {
                id
                availableForSale
                price { amount currencyCode }
              }
            }
          }
        }
      }
    }
  }
`;

// ✅ Server-side fetch so products is defined (Pages Router way)
export async function getServerSideProps() {
  try {
    const data = await shopifyFetch(PRODUCTS_QUERY, { first: 11 });
    const products = data?.products?.edges?.map((e) => e.node) || [];
    return { props: { products } };
  } catch (e) {
    return {
      props: {
        products: [],
        productsError: e?.message || "Failed to load products",
      },
    };
  }
}

// Animated number component
function AnimatedNumber({ to, duration = 1500, decimals = 0, prefix = "", suffix = "" }) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    let end = to;
    let range = end - start;
    let startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = start + range * progress;
      setCount(value);
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    }
    requestAnimationFrame(step);
  }, [to, duration]);

  return (
    <span>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </span>
  );
}

// ToggleCard component
function ToggleCard({ title, color, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card className="border-0 shadow h-100" style={{ backgroundColor: color, color: "#fff" }}>
      <CardBody>
        <h4 className="fw-bold mb-3" style={{ color: "#fff" }}>
          {title}
        </h4>
        <div className={`toggle-content ${isOpen ? "open" : "collapsed"}`}>{children}</div>
        <Button
          color="link"
          className="p-0 mt-2 fw-bold"
          style={{ color: "#fff", textDecoration: "underline" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Show Less ▲" : "Read More ▼"}
        </Button>
      </CardBody>
      <style jsx>{`
        .toggle-content.collapsed {
          max-height: 140px;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        .toggle-content.open {
          max-height: 2000px;
          transition: max-height 0.4s ease;
        }
      `}</style>
    </Card>
  );
}

export default function Home({ products = [], productsError = "" }) {
  // HubSpot / reCAPTCHA constants
  const HUBSPOT_PORTAL_ID = "243400623";
  const HUBSPOT_FORM_ID = "1712ae97-5882-46c9-a06e-8a3daed3511b";
  const RECAPTCHA_SITE_KEY = "6LeQUZ8rAAAAAGSsXvs6u2QdeamqIiofil95StUo";

  // Newsletter state
  const [newsletter, setNewsletter] = useState({ firstName: "", lastName: "", email: "" });
  const [nlStatus, setNlStatus] = useState({ submitting: false, success: false, error: "" });
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const handleNlChange = (e) => {
    setNewsletter({ ...newsletter, [e.target.name]: e.target.value });
  };

  const handleNlSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      setNlStatus({ submitting: false, success: false, error: "Please complete the captcha." });
      return;
    }

    setNlStatus({ submitting: true, success: false, error: "" });

    // Build HubSpot submission
    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

    // If the hs cookie exists, include it in context
    const hutk = (document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]*)/) || [])[1] || undefined;

    const payload = {
      fields: [
        { name: "email", value: newsletter.email },
        { name: "firstname", value: newsletter.firstName },
        { name: "lastname", value: newsletter.lastName },
      ],
      // ✅ IMPORTANT: put the token at top-level, not inside context
      hs_recaptcha_response: recaptchaToken,
      context: {
        pageUri: typeof window !== "undefined" ? window.location.href : "",
        pageName: typeof document !== "undefined" ? document.title : "Contact",
        ...(hutk ? { hutk } : {}),
      },
    };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const body = await res.json();

      if (res.ok) {
        setNlStatus({ submitting: false, success: true, error: "" });
        setNewsletter({ firstName: "", lastName: "", email: "" });
        setRecaptchaToken(null);
        recaptchaRef.current?.reset();
      } else {
        setNlStatus({
          submitting: false,
          success: false,
          error: body?.errors?.[0]?.message || body?.message || "Submission failed.",
        });
      }
    } catch (err) {
      setNlStatus({ submitting: false, success: false, error: err.message || "Network error" });
    }
  };

  return (
    <>
      <MainNavBar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Pure Magic</h1>
          <p>
            Body Butter—whipped, rich hydration that keeps skin soft, smooth, and glowing. Clean feel, non-greasy finish,
            light scent. Made for everyday moisture you can feel.
          </p>
          {/* <a className="btn" href="/mission">
            Shop
          </a> */}
        </div>
      </section>

      {/* WELCOME / MISSION SECTION */}
      <section className="welcome-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={12} lg={12}>
              <h1
                className="fw-bold mb-3"
                style={{ fontSize: "2.3rem", letterSpacing: 1, color: "white" }}
              >
                Welcome to Pure Magic
              </h1>

              {productsError ? <p style={{ color: "crimson" }}>{productsError}</p> : null}

              <ProductsSection products={products} />
              <KokumButter/>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />

      <style jsx global>{`
        .hero-content .btn {
          background: #000 !important;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: "Helvetica Neue", Arial, sans-serif;
          line-height: 1.6;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        btn-black {
          color: black;
        }

        .hero {
          max-height: 700px;
          width: 100%;
          aspect-ratio: 1 / 2;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          background-image: url("/images/hero_image_home.jpg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          background-color: #e9f6fa;
          overflow: hidden;
        }

        .hero-content {
          background: rgba(255, 255, 255, 0.85);
          padding: 8px 32px;
          border-radius: 10px;
          max-width: 470px;
          margin-left: 6vw;
          box-shadow: 0 6px 32px rgba(0, 0, 0, 0.08);
          text-align: left;
        }

        .hero-content h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #203354;
        }

        .hero-content p {
          font-size: 1.25rem;
          margin-bottom: 32px;
          color: #222;
        }

        .hero-content .btn {
          background: #1d7acb;
          color: #fff;
          padding: 12px 24px;
          border-radius: 4px;
          font-weight: bold;
          transition: background 0.2s;
          border: none;
          display: inline-block;
        }

        .hero-content .btn:hover {
          background: #005b7a;
        }

        .py-5 {
          padding-top: 0rem !important;
        }

        section {
          padding: 60px 40px;
        }

        .research-section {
          max-width: 1240px;
          margin: 0 auto;
          padding: 60px 20px 80px;
          text-align: center;
        }

        .research-title {
          font-size: 2.4rem;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .research-desc {
          font-size: 1.15rem;
          color: #fff;
          max-width: 760px;
          margin: 0 auto 60px;
          line-height: 1.7;
        }

        .research-cards {
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .research-card {
          border-radius: 8px;
          flex: 1 1 320px;
          max-width: 350px;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 1px 10px rgba(0, 0, 0, 0.07);
        }

        .stat-top {
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 2.7rem;
          font-weight: 600;
          padding-left: 32px;
        }

        .stat-bottom {
          display: flex;
          align-items: flex-end;
        }

        .stat-green-bottom,
        .stat-blue-bottom,
        .stat-green2-bottom {
          background: #14c9d6;
          color: #fff;
        }

        .stat-label {
          display: block;
          font-size: 1.04rem;
          font-weight: 600;
          text-align: left;
          padding: 20px 0 20px 20px;
          max-width: 180px;
        }
      `}</style>
    </>
  );
}
