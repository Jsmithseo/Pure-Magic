// pages/index.jsx
import React, { useState, useRef, useEffect } from "react";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import ProductsSection from "../components/ProductSection";
import KokumButter from "../components/KokumButter";
import PureMagicAttractionSection from "../components/AttractionSection";
import { shopifyFetch } from "../../libs/shopify";
import { Container, Row, Col, Button, Alert, Spinner } from "reactstrap";




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
              node { id availableForSale price { amount currencyCode } }
            }
          }
        }
      }
    }
  }
`;




export async function getServerSideProps() {
  try {
    const data = await shopifyFetch(PRODUCTS_QUERY, { first: 50 });
    const products = data?.products?.edges?.map((e) => e.node) || [];
    return { props: { products } };
  } catch (e) {
    return {
      props: { products: [], productsError: e?.message || "Failed to load products" },
    };
  }
}

/**
 * HERO SLIDER
 * - Autoplays with a timer bar (progress)
 * - Manual prev/next + dots
 * - Background image "like the right one" (cover, centered)
 * - CTA panel on the right (or left on mobile)
 */
function HeroSlider() {
  const slides = [
    {
      id: "s1",
      bg: "/images/hero_image_home.jpg",
      eyebrow: "Pure Magic",
      title: "Whipped Body Butter",
      desc: "Rich hydration that keeps skin soft, smooth, and glowing. Clean feel, non-greasy finish, light scent—made for everyday moisture you can feel.",
      primaryCta: { label: "Shop", href: "/#products" },
    },
    {
      id: "s2",
      bg: "/images/hero_smp.png", // add this image
      eyebrow: "Special Services",
      title: "Scalp Micropigmentation",
      desc: "Scalp Micropigmentation (SMP) is a non-invasive cosmetic procedure that uses micro-dots of pigment to replicate the appearance of natural hair follicles. ",
      primaryCta: { label: "learn More", href: "/smp" },
    },
    {
      id: "s3",
      bg: "/images/hero_bundle.png",
      eyebrow: "Bundle Deals",
      title: "Valentine Day Special",
      desc: "Valentine’s Bundles are live. Mix & match your favorites and save—get 2 for $15 with code VAL2FOR25, or 3 for $25 with code VAL3FOR40. Want to bundle together? Our His & Hers Bundle is 4 for $30 (2 each) with code VAL4FOR55. Enter the promo code at checkout to apply your bundle pricing.(valid for 2oz butters)",
      primaryCta: { label: "Shop bundles", href: "/#products" },
    },
  ];


  

  const AUTOPLAY_MS = 6500;

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0); // 0..100

  const rafRef = useRef(null);
  const startRef = useRef(null);

  const slideCount = slides.length;

  const goTo = (i) => {
    setIndex((prev) => {
      const next = (i + slideCount) % slideCount;
      return next;
    });
    setProgress(0);
    startRef.current = null;
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    // animate progress bar (requestAnimationFrame) to avoid setInterval drift
    const tick = (ts) => {
      if (isPaused) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const pct = Math.min((elapsed / AUTOPLAY_MS) * 100, 100);
      setProgress(pct);

      if (elapsed >= AUTOPLAY_MS) {
        // advance
        startRef.current = null;
        setProgress(0);
        setIndex((prevIdx) => (prevIdx + 1) % slideCount);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [AUTOPLAY_MS, slideCount, isPaused]);

  const active = slides[index];


  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (!hash) return;
  
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
  
    // Delay so layout is ready
    setTimeout(() => {
      const navOffset = 90; // adjust if your navbar height differs
      const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
  
      window.scrollTo({ top, behavior: "smooth" });
      // Focus for accessibility (tabIndex=-1 allows programmatic focus)
      el.focus({ preventScroll: true });
    }, 0);
  }, []);
  

  return (
    <section
      className="heroSlider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Homepage hero slider"
    >
      {/* Background */}
      <div
        className="heroBg"
        style={{ backgroundImage: `url("${active.bg}")` }}
        role="img"
        aria-label={active.title}
      />

      {/* Overlay content */}
      <div className="heroInner">
        <div className="ctaCard">
          <div className="eyebrow">{active.eyebrow}</div>
          <h1 className="heroTitle">{active.title}</h1>
          <p className="heroDesc">{active.desc}</p>

          <div className="ctaRow">
            <a className="btnPrimary" href={active.primaryCta.href}>
              {active.primaryCta.label}
            </a>
            {active.secondaryCta ? (
              <a className="btnSecondary" href={active.secondaryCta.href}>
                {active.secondaryCta.label}
              </a>
            ) : null}
          </div>

          {/* Timer / progress */}
          <div className="timerWrap" aria-hidden="true">
            <div className="timerBar" style={{ width: `${progress}%` }} />
          </div>

          {/* Controls */}
          <div className="controls">
            <button className="navBtn" onClick={prev} aria-label="Previous slide">
              ‹
            </button>

            <div className="dots" role="tablist" aria-label="Hero slides">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  className={`dot ${i === index ? "active" : ""}`}
                  onClick={() => goTo(i)}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button className="navBtn" onClick={next} aria-label="Next slide">
              ›
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`

section.jsx-e1da81568869a5.welcome-section {
  background: black!important;

}
        .heroSlider {
          position: relative;
          width: 100%;
          height: min(700px, 86vh);
          overflow: hidden;
          background: #e9f6fa;
        }

        .heroBg {
          position: absolute;
          inset: 0;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          transform: scale(1.02);
          filter: saturate(1.02);
        }

        /* subtle dark overlay for text contrast */
        .heroSlider::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.05) 0%,
            rgba(0, 0, 0, 0.15) 55%,
            rgba(0, 0, 0, 0.25) 100%
          );
          pointer-events: none;
        }

        .heroInner {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 28px 40px;
        }

        .ctaCard {
          width: min(520px, 92vw);
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(8px);
          border-radius: 14px;
          padding: 20px 22px 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.18);
        }

        .eyebrow {
          font-size: 0.9rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 700;
          color: #203354;
          opacity: 0.9;
          margin-bottom: 6px;
        }

        .heroTitle {
          font-size: clamp(1.8rem, 3.2vw, 2.5rem);
          font-weight: 800;
          margin: 0 0 10px;
          color: #203354;
          line-height: 1.15;
        }

        .heroDesc {
          font-size: clamp(1.02rem, 1.6vw, 1.2rem);
          margin: 0 0 14px;
          color: #1b1b1b;
          line-height: 1.5;
        }

        .ctaRow {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 12px;
        }

        .btnPrimary,
        .btnSecondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 11px 16px;
          border-radius: 10px;
          font-weight: 800;
          border: 1px solid transparent;
          transition: transform 0.12s ease, opacity 0.12s ease;
          text-decoration: none;
        }

        .btnPrimary {
          background: #1d7acb;
          color: #fff;
        }

        .btnSecondary {
          background: transparent;
          border-color: rgba(32, 51, 84, 0.25);
          color: #203354;
        }

        .btnPrimary:hover,
        .btnSecondary:hover {
          transform: translateY(-1px);
          opacity: 0.96;
        }

        .timerWrap {
          width: 100%;
          height: 6px;
          background: rgba(32, 51, 84, 0.14);
          border-radius: 999px;
          overflow: hidden;
        }

        .timerBar {
          height: 100%;
          background: #203354;
          width: 0%;
          border-radius: 999px;
          transition: width 80ms linear;
        }

        .controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 10px;
        }

        .navBtn {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: 1px solid rgba(32, 51, 84, 0.15);
          background: rgba(255, 255, 255, 0.85);
          color: #203354;
          font-size: 22px;
          font-weight: 900;
          line-height: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .dots {
          display: flex;
          gap: 8px;
          align-items: center;
          justify-content: center;
          flex: 1;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          border: 0;
          background: rgba(32, 51, 84, 0.25);
          cursor: pointer;
        }

        .dot.active {
          background: #203354;
          width: 22px;
        }

        @media (max-width: 768px) {
          .heroInner {
            justify-content: center;
            padding: 18px 16px;
          }
          .ctaCard {
            padding: 18px 16px 14px;
          }
          .controls {
            gap: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .timerBar {
            transition: none;
          }
          .btnPrimary:hover,
          .btnSecondary:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}

export default function Home({ products = [], productsError = "" }) {
  // HubSpot / reCAPTCHA constants
  const HUBSPOT_PORTAL_ID = "243400623";
  const HUBSPOT_FORM_ID = "1712ae97-5882-46c9-a06e-8a3daed3511b";
  const RECAPTCHA_SITE_KEY = "6LeQUZ8rAAAAAGSsXvs6u2QdeamqIiofil95StUo";

  // Newsletter state (unchanged)
  const [newsletter, setNewsletter] = useState({ firstName: "", lastName: "", email: "" });
  const [nlStatus, setNlStatus] = useState({ submitting: false, success: false, error: "" });
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const handleNlChange = (e) => setNewsletter({ ...newsletter, [e.target.name]: e.target.value });

  const handleNlSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      setNlStatus({ submitting: false, success: false, error: "Please complete the captcha." });
      return;
    }

    setNlStatus({ submitting: true, success: false, error: "" });

    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;
    const hutk = (document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]*)/) || [])[1] || undefined;

    const payload = {
      fields: [
        { name: "email", value: newsletter.email },
        { name: "firstname", value: newsletter.firstName },
        { name: "lastname", value: newsletter.lastName },
      ],
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

      {/* HERO SLIDER */}
      <HeroSlider />

      {/* WELCOME / MISSION SECTION */}
      <section className="welcome-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={12} lg={12} id="products">
              <h1 className="fw-bold mb-3 welcome-homepahe" style={{ fontSize: "2.3rem", letterSpacing: 1, color: "white" }}>
                Welcome to Pure Magic
              </h1>

              {productsError ? <p style={{ color: "crimson" }}>{productsError}</p> : null}

              <ProductsSection products={products} />
              <KokumButter />
              <PureMagicAttractionSection imageSrc="/attraction.png" titleHighlight="Attraction" titleTrail="Factor" ctaHref="/products" />
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />

      <style jsx global>{`
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
        section {
          padding: 60px 40px;
        }
        .py-5 {
          padding-top: 0rem !important;
        }

      `}</style>
    </>
  );
}
