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
} from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

export default function SMPPage() {
  const title = "Scalp Micropigmentation (SMP) | Pure Magic";
  const desc =
    "Scalp Micropigmentation (SMP) for hairline restoration, density, and scar concealment. Natural, realistic results. Book a consultation.";

  const fitCards = [
    {
      title: "Pattern Baldness",
      desc: "Create a clean, natural “fresh cut” look that restores confidence.",
      img: "/images/pattern_baldness.png",
      cta: "VIEW RESULTS",
      href: "#results",
    },
    {
      title: "Receding Hairline",
      desc: "Rebuild a hairline that fits your face and age—without surgery.",
      img: "/images/hairline.png",
      cta: "LEARN MORE",
      href: "#process",
    },
    {
      title: "Scar Camouflage",
      desc: "Reduce the visibility of scars with custom pigment blending.",
      img: "/images/scar.png",
      cta: "VIEW RESULTS",
      href: "#results",
    },
  ];

  const results = [
    "/images/results1.png",
    "/images/results2.png",
    "/images/results3.png",
    "/images/results4.png",
    "/images/results5.png",
    "/images/results6.png",
    "/images/results7.png",
    "/images/results8.png",
  ];

  const faqs = [
    {
      q: "Is SMP permanent?",
      a: "SMP is long-lasting and gradually fades over time. Most clients do a refresh after a few years depending on skin type, sun exposure, and aftercare.",
    },
    {
      q: "How many sessions does SMP take?",
      a: "Most results take 2–3 sessions. We build layers for a natural finish and clean blend.",
    },
    {
      q: "Does it look natural up close?",
      a: "Yes—when dot size, spacing, and pigment tone are matched correctly. We design your hairline to fit your face and age.",
    },
    {
      q: "Does it hurt?",
      a: "Most clients describe mild to moderate discomfort. Sensitivity varies by person and area treated.",
    },
  ];

  const services = [
    { title: "Hairline Restoration", items: ["Receding hairline", "Norwood patterns", "Edge-up enhancement"] },
    { title: "Density SMP", items: ["Thinning coverage", "Crown density", "Blending existing hair"] },
    { title: "Scar Camouflage", items: ["FUE/FUT scars", "Injury scars", "Patch blending"] },
    { title: "Alopecia Support", items: ["Spot coverage", "Full scalp looks", "Custom density planning"] },
  ];

  const areas = [
    "San Francisco, CA",
    "Oakland, CA",
    "Virtual Consultations",
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="scalp micropigmentation, SMP, hairline restoration, scar camouflage, density SMP, Oakland SMP"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <MainNavBar />

      {/* HERO */}
      <section className="smpHero">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={7}>
              <p className="smpKicker">Scalp Micropigmentation</p>
              <h1 className="smpH1">Rediscover Confidence with SMP</h1>
              <p className="smpLead">
                A non-invasive solution that creates the appearance of natural follicles for a clean, realistic look.
                Designed for your hairline, your tone, and your goals.
              </p>
              <div className="smpHeroMeta">
                <span className="metaPill">2–3 sessions typically</span>
                <span className="metaPill">Natural hairline design</span>
                <span className="metaPill">Scar + density options</span>
              </div>
            </Col>

            <Col lg={5}>
              <div className="heroCard">
                <div className="heroCardTop">
                  <div>
                    <p className="heroCardLabel">Featured</p>
                    <h3 className="heroCardTitle">Master SMP Artist</h3>
                    <p className="heroCardSub">Precision work • Clean blends • Natural finish</p>
                  </div>

                  <div className="heroBadges">
                    <Badge pill className="badgeDark">Certified</Badge>
                    <Badge pill className="badgeDark">Sanitized</Badge>
                  </div>
                </div>

                <div className="heroCardMedia">
                  {/* Replace with your own poster image */}
                  <img
                    src="/images/artist_card.png"
                    alt="SMP artist card"
                  />
                </div>

                <div className="heroCardBottom">

                  <div className="heroCardCtas">
                    <a className="btnPrimary full" href="#contact">
                      BOOK A CONSULTATION
                    </a>
                  </div>

                  <p className="miniText">
                    Have questions?{" "}
                    <a href="#faq" className="linkMint">
                      Read the FAQ
                    </a>{" "}
                    or contact us.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FIT SECTION */}
      <section className="smpSection smpSectionLight">
        <Container>
          <div className="sectionTitleWrap">
            <h2 className="smpH2">Is Scalp Micro-Pigmentation a Good Fit for You?</h2>
            <p className="smpSub">
              SMP works for multiple hair-loss patterns. Choose your situation below.
            </p>
          </div>

          <Row className="g-4">
            {fitCards.map((c) => (
              <Col md={4} key={c.title}>
                <Card className="fitCard">
                  <div className="fitImg">
                    <img src={c.img} alt={c.title} />
                  </div>
                  <CardBody>
                    <h3 className="fitTitle">{c.title}</h3>
                    <p className="fitDesc">{c.desc}</p>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* BEFORE / AFTER FEATURE */}
      <section className="smpSection">
  <Container>
    <Row className="align-items-center g-4">
      <Col lg={6}>
        <div className="baMedia">
          <video
            className="baVideo"
            controls
            playsInline
            preload="metadata"
            poster="/images/smp/video-poster.jpg"
          >
            <source src="/video/smp-overview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Col>

      <Col lg={6}>
        <p className="smpKicker smpKickerLight">Results</p>
        <h2 className="smpH2 smpH2OnDark">Redefining Hair Loss Solutions</h2>
        <p className="smpTextOnDark">
          SMP is a layered process that builds realistic density and hairline detail. We match pigment to your skin
          tone, adjust dot size and spacing, and refine the blend over multiple sessions.
        </p>

        <div className="featureList">
          <div className="featureItem">
            <span className="dot" />
            <div>
              <p className="featureTitle">Natural hairline design</p>
              <p className="featureDesc">Built to fit your face and age.</p>
            </div>
          </div>

          <div className="featureItem">
            <span className="dot" />
            <div>
              <p className="featureTitle">Clean blend + density</p>
              <p className="featureDesc">Layered dot work for depth and realism.</p>
            </div>
          </div>

          <div className="featureItem">
            <span className="dot" />
            <div>
              <p className="featureTitle">Scar camouflage</p>
              <p className="featureDesc">Custom shading to reduce contrast and visibility.</p>
            </div>
          </div>
        </div>

        <div className="smpHeroActions" style={{ marginTop: 18 }}>
          <a className="btnPrimary" href="#contact">GET A QUOTE</a>
        </div>
      </Col>
    </Row>
  </Container>
</section>

      {/* RESULTS GRID */}
      <section id="results" className="smpSection smpSectionLight">
        <Container>
          <div className="sectionTitleWrap">
            <h2 className="smpH2">Check Out These Amazing Before/After Results</h2>
            <p className="smpSub">A mix of hairline restoration, density, and scar camouflage.</p>
          </div>

          <div className="resultsGrid">
            {results.map((src) => (
              <div key={src} className="resultTile">
                <img src={src} alt="SMP before and after result" />
              </div>
            ))}
          </div>

          <div className="centerCta">
            <a className="btnPrimary" href="#contact">BOOK YOUR CONSULTATION</a>
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      {/* <section className="smpSection testimonials">
        <Container>
          <div className="sectionTitleWrap">
            <h2 className="smpH2 smpH2OnDark">What Our Clients Say</h2>
            <p className="smpSub smpSubOnDark">Real feedback from real results.</p>
          </div>

          <Row className="g-4">
            <Col md={4}>
              <div className="testCard">
                <div className="testStars">★★★★★</div>
                <p className="testQuote">
                  “The hairline looks natural and the blend is clean. It changed my confidence completely.”
                </p>
                <p className="testName">— Jason</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="testCard">
                <div className="testStars">★★★★★</div>
                <p className="testQuote">
                  “Professional, precise, and honest. The aftercare guidance was solid and results are top-tier.”
                </p>
                <p className="testName">— Andre</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="testCard">
                <div className="testStars">★★★★★</div>
                <p className="testQuote">
                  “Scar concealment came out amazing. You can barely tell anything was there.”
                </p>
                <p className="testName">— Mark</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* CONTACT + MAP */}
      <section id="contact" className="smpSection smpSectionLight">
        <Container>
          <Row className="g-4">
            <Col lg={5}>
              <div className="contactCard">
                <h3 className="contactTitle">Contact Info</h3>
                <p className="contactLine">
                  <strong>Phone:</strong>{" "}
                  <a href="tel:9166407271" className="linkDark">(916)640-7271</a>
                </p>
                <p className="contactLine">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@yourdomain.com" className="linkDark">info@yourdomain.com</a>
                </p>
                <p className="contactLine">
                  <strong>Location:</strong> Oakland, CA (Serving surrounding areas)
                </p>

                <div className="contactCtas">
                  <a className="btnPrimary full" href="#pricing">GET PRICING</a>
                  <Link href="/contact" legacyBehavior>
                    <a className="btnSecondary full">BOOK A CONSULTATION</a>
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg={7}>
              <div className="mapCard">
                <h3 className="contactTitle">Find Us On Map</h3>

                {/* Replace with your own Google Maps embed URL */}
                <div className="mapFrame">
                  <iframe
                    title="map"
                    src="https://www.google.com/maps?q=oakland%20CA&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SEO LONG FORM + FAQ */}
      <section id="process" className="smpSection smpSeo">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="seoCard">
                <h2 className="seoTitle">Why Choose SMP for Scalp Micropigmentation in Oakland, CA</h2>

                <p className="seoText">
                  Scalp Micropigmentation (SMP) is a non-invasive cosmetic solution that replicates the look of natural
                  hair follicles by applying micro-dots of pigment to the scalp. Whether you’re dealing with a receding
                  hairline, thinning at the crown, or visible scars, SMP can create a cleaner, more defined appearance.
                </p>

                <h3 className="seoH3" id="pricing">SMP Pricing</h3>
                <p className="seoText">
                  Pricing depends on the coverage area, density goals, and number of sessions needed. We keep pricing
                  clear and we’ll confirm an exact quote during your consultation.
                </p>

                <h3 className="seoH3">What to Expect</h3>
                <ul className="seoList">
                  <li><strong>Consultation:</strong> review goals, pattern, and design direction.</li>
                  <li><strong>Hairline Design:</strong> build a hairline that fits your face and age.</li>
                  <li><strong>Sessions:</strong> usually 2–3 layered sessions for realism and depth.</li>
                  <li><strong>Aftercare:</strong> guidance to protect your investment and results.</li>
                </ul>

                <h3 className="seoH3" id="faq">FAQ</h3>
                <div className="faqWrap">
                  {faqs.map((f) => (
                    <details key={f.q} className="faqItem">
                      <summary>{f.q}</summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>

                <p className="seoCta">
                  Ready to get started?{" "}
                  <a href="#contact" className="linkMint">
                    Book your consultation
                  </a>{" "}
                  and we’ll map out a plan that fits your goals.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="smpSection smpSectionLight">
        <Container>
          <div className="sectionTitleWrap">
            <h2 className="smpH2">Scalp Micropigmentation Services We Provide</h2>
            <p className="smpSub">Choose the result you want—we’ll build a plan to match.</p>
          </div>

          <Row className="g-4">
            {services.map((s) => (
              <Col md={6} key={s.title}>
                <div className="serviceCard">
                  <h3 className="serviceTitle">{s.title}</h3>
                  <ul className="serviceList">
                    {s.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* SERVICE AREAS */}
      <section className="smpSection smpSectionLight">
        <Container>
          <div className="sectionTitleWrap">
            <h2 className="smpH2">Our Service Areas</h2>
            <p className="smpSub">We serve Oakland and surrounding areas. Ask about pop-up dates.</p>
          </div>

          <div className="centerCta">
            <a className="btnPrimary" href="#contact">REQUEST AVAILABILITY</a>
          </div>
        </Container>
      </section>

      <Footer />

      <style jsx global>{`

        :root {
          --bg: #0b0c10;
          --card: #11131a;
          --line: rgba(255,255,255,0.08);
          --text: rgba(255,255,255,0.92);
          --muted: rgba(255,255,255,0.72);
          --mint: #20c997;
          --mintDark: #11a981;
          --black: #000;
          --light: #f6f7fb;
          --radius: 18px;
          --shadow: 0 18px 60px rgba(0,0,0,0.35);
        }

        /* HERO */
        .smpHero {
          background: radial-gradient(1200px 600px at 20% 20%, rgba(32,201,151,0.14), transparent 60%),
                      radial-gradient(900px 520px at 80% 30%, rgba(255,255,255,0.06), transparent 60%),
                      linear-gradient(180deg, #05060a 0%, #0b0c10 100%);
          color: var(--text);
          padding: 70px 0 60px;
        }
        .smpKicker {
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.72);
          margin: 0 0 10px;
        }
        .smpKickerLight { color: rgba(255,255,255,0.8); }
        .smpH1 {
          font-size: clamp(2.2rem, 4vw, 3.3rem);
          line-height: 1.05;
          font-weight: 800;
          margin: 0 0 14px;
        }
        .smpLead {
          font-size: 1.12rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.78);
          max-width: 54ch;
          margin: 0 0 18px;
        }
        .smpHeroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: 16px 0 16px;
        }
        .btnPrimary, .btnSecondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          border-radius: 12px;
          padding: 12px 16px;
          text-decoration: none;
          transition: transform 0.15s ease, background 0.15s ease, opacity 0.15s ease;
          user-select: none;
        }
        .btnPrimary {
          background: var(--mint);
          color: #07100d;
        }
        .btnPrimary:hover { background: var(--mintDark); transform: translateY(-1px); }
        .btnSecondary {
          background: transparent;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.18);
        }
        .btnSecondary:hover { opacity: 0.92; transform: translateY(-1px); }
        .full { width: 100%; }

        .smpHeroMeta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 12px;
        }
        .metaPill {
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.04);
          padding: 8px 10px;
          border-radius: 999px;
          font-size: 0.92rem;
          color: rgba(255,255,255,0.78);
        }

        /* HERO CARD */
        .heroCard {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow);
        }
        .heroCardTop {
          padding: 16px 16px 0 16px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }
        .heroCardLabel { margin: 0; font-size: 0.85rem; color: rgba(255,255,255,0.68); }
        .heroCardTitle { margin: 2px 0 2px; font-size: 1.25rem; font-weight: 800; color: #fff; }
        .heroCardSub { margin: 0; font-size: 0.95rem; color: rgba(255,255,255,0.72); }
        .heroBadges { display: flex; gap: 8px; flex-wrap: wrap; }
        .badgeDark {
          background: rgba(255,255,255,0.08) !important;
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.88);
          font-weight: 700;
          padding: 6px 10px;
        }
        .heroCardMedia {
          padding: 12px 16px 0;
        }
        .heroCardMedia img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.10);
          display: block;
        }
        .heroCardBottom { padding: 14px 16px 16px; }
        .ratingRow { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
        .ratingStar { color: #ffd166; font-weight: 900; letter-spacing: 0.06em; }
        .ratingText { color: rgba(255,255,255,0.74); font-size: 0.95rem; }
        .heroCardCtas { display: grid; gap: 10px; margin-top: 10px; }
        .miniText { margin: 10px 0 0; font-size: 0.92rem; color: rgba(255,255,255,0.72); }
        .linkMint { color: var(--mint); text-decoration: underline; }

        /* SECTIONS */
        .smpSection { padding: 64px 0; background: var(--bg); }
        .smpSectionLight { background: #ffffff; color: #111; }
        .sectionTitleWrap { text-align: center; margin-bottom: 26px; }
        .smpH2 {
          font-weight: 900;
          letter-spacing: -0.02em;
          margin: 0 0 8px;
          font-size: 1.9rem;
        }
        .smpSub { margin: 0; color: rgba(17,17,17,0.72); }
        .smpSubOnDark { color: rgba(255,255,255,0.72); }
        .smpH2OnDark { color: #fff; }
        .smpTextOnDark { color: rgba(255,255,255,0.74); font-size: 1.05rem; line-height: 1.75; }

        /* FIT CARDS */
        .fitCard {
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          height: 100%;
        }
        .fitImg img {
          width: 100%;
          height: 190px;
          object-fit: cover;
          display: block;
        }
        .fitTitle { font-weight: 900; margin: 0 0 8px; }
        .fitDesc { margin: 0 0 14px; color: rgba(17,17,17,0.72); line-height: 1.55; }
        .fitBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 14px;
          border-radius: 12px;
          background: #111;
          color: #fff;
          text-decoration: none;
          font-weight: 800;
        }

        /* BEFORE AFTER */
        .baMedia img {
          width: 100%;
          height: 360px;
          object-fit: cover;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: var(--shadow);
          display: block;
        }
        .featureList { margin-top: 18px; display: grid; gap: 14px; }
        .featureItem { display: flex; gap: 12px; align-items: flex-start; }
        .dot {
          width: 10px; height: 10px; border-radius: 999px;
          background: var(--mint);
          margin-top: 8px;
          flex: 0 0 auto;
        }
        .featureTitle { margin: 0; color: #fff; font-weight: 900; }
        .featureDesc { margin: 2px 0 0; color: rgba(255,255,255,0.72); }

        /* RESULTS GRID */
        .resultsGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        .resultTile {
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(17,17,17,0.08);
          background: #fff;
        }
        .resultTile img { width: 100%; height: 180px; object-fit: cover; display: block; }
        .centerCta { display: flex; justify-content: center; margin-top: 20px; }

        /* TESTIMONIALS */
        .testimonials {
          background: linear-gradient(180deg, #0b0c10 0%, #07080c 100%);
        }
        .testCard {
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 18px;
          padding: 18px;
          background: rgba(255,255,255,0.04);
          height: 100%;
        }
        .testStars { color: #ffd166; font-weight: 900; letter-spacing: 0.06em; margin-bottom: 8px; }
        .testQuote { margin: 0 0 10px; color: rgba(255,255,255,0.82); line-height: 1.7; }
        .testName { margin: 0; color: rgba(255,255,255,0.68); font-weight: 700; }

        /* CONTACT */
        .contactCard, .mapCard {
          border: 1px solid rgba(17,17,17,0.10);
          border-radius: 18px;
          background: #fff;
          padding: 18px;
          height: 100%;
          box-shadow: 0 12px 32px rgba(0,0,0,0.06);
        }
        .contactTitle { font-weight: 900; margin: 0 0 12px; }
        .contactLine { margin: 0 0 8px; color: rgba(17,17,17,0.78); }
        .linkDark { color: #111; text-decoration: underline; }
        .contactCtas { display: grid; gap: 10px; margin-top: 14px; }
        .mapFrame {
          width: 100%;
          height: 320px;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(17,17,17,0.10);
        }
        .mapFrame iframe { width: 100%; height: 100%; border: 0; }

        /* SEO CARD */
        .smpSeo { background: #0b0c10; }
        .seoCard {
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 18px;
          background: rgba(255,255,255,0.04);
          padding: 22px;
        }
        .seoTitle { color: #fff; font-weight: 900; margin: 0 0 12px; }
        .seoText { color: rgba(255,255,255,0.78); line-height: 1.85; }
        .seoH3 { color: #fff; font-weight: 900; margin-top: 18px; }
        .seoList { color: rgba(255,255,255,0.78); line-height: 1.9; }
        .faqWrap { display: grid; gap: 10px; margin-top: 10px; }
        .faqItem {
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 14px;
          padding: 10px 12px;
          background: rgba(255,255,255,0.03);
        }
        .faqItem summary { cursor: pointer; color: #fff; font-weight: 800; }
        .faqItem p { margin: 10px 0 0; color: rgba(255,255,255,0.78); }
        .seoCta { margin-top: 16px; color: rgba(255,255,255,0.82); }

        /* SERVICES */
        .serviceCard {
          border: 1px solid rgba(17,17,17,0.10);
          border-radius: 18px;
          background: #fff;
          padding: 18px;
          height: 100%;
          box-shadow: 0 12px 32px rgba(0,0,0,0.06);
        }
        .serviceTitle { font-weight: 900; margin: 0 0 10px; }
        .serviceList { margin: 0; padding-left: 18px; color: rgba(17,17,17,0.74); line-height: 1.8; }

        /* AREAS */
        .areasGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        .areaPill {
          border: 1px solid rgba(17,17,17,0.12);
          border-radius: 14px;
          padding: 12px;
          text-align: center;
          background: #fff;
          font-weight: 800;
          color: rgba(17,17,17,0.85);
        }

        /* RESPONSIVE */
        @media (max-width: 992px) {
          .resultsGrid { grid-template-columns: repeat(3, 1fr); }
          .areasGrid { grid-template-columns: repeat(2, 1fr); }
          .baMedia img { height: 320px; }
        }
        @media (max-width: 576px) {
          .resultsGrid { grid-template-columns: repeat(2, 1fr); }
          .resultTile img { height: 160px; }
          .smpHero { padding: 56px 0 44px; }
          .heroCardMedia img { height: 220px; }
        }

      `}</style>
    </>
  );
}
