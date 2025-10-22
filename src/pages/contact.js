// pages/contact.js
"use client";
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Container, Row, Col, Card, CardBody, Button,
  Form, FormGroup, Input, Label, Alert, Spinner,
} from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

const HUBSPOT_PORTAL_ID = "243400623";
const HUBSPOT_FORM_ID = "797c76ae-ca8a-47a3-82dd-d530a6e0c313";
const RECAPTCHA_SITE_KEY = "6LeQUZ8rAAAAAGSsXvs6u2QdeamqIiofil95StUo";

export default function Contact() {
  const [fields, setFields] = useState({
    firstname: "", lastname: "", email: "", phone: "",
    company: "", subject: "", message: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const recaptchaRef = useRef(null);

  const handleChange = (e) => setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!recaptchaToken) {
      setError("Please complete the captcha.");
      return;
    }

    setSubmitting(true);

    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

    // If the HubSpot tracking cookie exists, include it
    const hutk = (document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]*)/) || [])[1] || undefined;

    const payload = {
      // Map your local fields to HubSpot fields
      fields: Object.entries(fields).map(([name, value]) => ({ name, value })),
      // ✅ IMPORTANT: token belongs at the top level, not inside context
      hs_recaptcha_response: recaptchaToken,
      context: {
        pageUri: typeof window !== "undefined" ? window.location.href : "",
        pageName: typeof document !== "undefined" ? document.title : "Contact",
        ...(hutk ? { hutk } : {}),
      },
      // If your HubSpot form uses GDPR consent fields, add legalConsentOptions here.
    };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const body = await res.json();
      // console.log("HubSpot response:", body);

      if (res.ok) {
        setSubmitted(true);
        setFields({
          firstname: "", lastname: "", email: "", phone: "",
          company: "", subject: "", message: "",
        });
        setRecaptchaToken(null);
        recaptchaRef.current?.reset();
      } else {
        const msg =
          body?.errors?.[0]?.message ||
          body?.message ||
          (typeof body === "string" ? body : "Submission failed.");
        setError(msg);
      }
    } catch (err) {
      setError(err.message || "Network error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <MainNavBar />
      {/* HERO SECTION */}
      <div
        style={{
          background: `linear-gradient(rgba(42,48,56,.40),rgba(42,48,56,.40)), url('/images/hero_contact.jpg') center/cover no-repeat`,
          minHeight: 800, display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        <Container>
          <h1 className="text-white fw-bold mb-2" style={{ fontSize: "2.3rem", textAlign: "center" }}>
            Contact Us
          </h1>
          <p className="text-white fs-5 mb-0 text-center" style={{ maxWidth: 700, margin: "0 auto", fontWeight: "bold" }}>
            Let’s start a conversation about your needs. A member of our team will respond promptly.
          </p>
        </Container>
      </div>

        {/* FORM SECTION */}
      <Container className="my-5">
        <Row className="gy-4 justify-content-center">
          <Col md={10} lg={8}>
            <Card className="shadow-sm border-0 rounded-4 h-100">
              <CardBody>
                <h3 className="fw-bold mb-3" style={{ color: "#228d6e" }}>Get in Touch</h3>
                <p style={{ fontSize: 17 }}>
                  Have a question or want more info? Fill out the form below and we’ll get back to you.
                </p>

                {submitted ? (
                  <Alert color="success">Thank you! Your message has been received. We'll be in touch soon.</Alert>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="firstname">First Name</Label>
                          <Input name="firstname" id="firstname" value={fields.firstname} onChange={handleChange} required />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="lastname">Last Name</Label>
                          <Input name="lastname" id="lastname" value={fields.lastname} onChange={handleChange} required />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="email">Email</Label>
                          <Input type="email" name="email" id="email" value={fields.email} onChange={handleChange} required />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="phone">Phone</Label>
                          <Input name="phone" id="phone" value={fields.phone} onChange={handleChange} />
                        </FormGroup>
                      </Col>
                    </Row>

                    <FormGroup>
                      <Label for="company">Company</Label>
                      <Input name="company" id="company" value={fields.company} onChange={handleChange} />
                    </FormGroup>

                    <FormGroup>
                      <Label for="subject">Subject</Label>
                      <Input name="subject" id="subject" value={fields.subject} onChange={handleChange} />
                    </FormGroup>

                    <FormGroup>
                      <Label for="message">Message</Label>
                      <Input type="textarea" name="message" id="message" rows={4} value={fields.message} onChange={handleChange} required />
                    </FormGroup>

                    {/* CAPTCHA */}
                    <div className="d-flex justify-content-center my-3">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={(token) => setRecaptchaToken(token)}
                        onExpired={() => setRecaptchaToken(null)}
                      />
                    </div>

                    {error && <Alert color="danger">{error}</Alert>}

                    <Button color="primary" disabled={submitting || !recaptchaToken}>
                      {submitting ? <Spinner size="sm" /> : "Send Message"}
                    </Button>
                  </Form>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* CONTACT INFO & MAP (your existing content can stay here) */}
      <Container className="mt-5 mb-5">
        {/* ... */}
      </Container>

      <Footer />
    </>
  );
}
