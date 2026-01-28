// pages/intake.js
"use client";
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Alert,
  Spinner,
} from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

const HUBSPOT_PORTAL_ID = "46783071";
// ✅ Replace with the HubSpot form ID for THIS form
const HUBSPOT_FORM_ID = "dc5f0a5c-afaf-42f4-a9bf-d9dff9b6e483";


const REASON_OPTIONS = [
  "SMP Questions and Booking",
  "Butters and Oils",
  "Haircut",
  "Other",
];

export default function IntakeFormPage() {
  const [fields, setFields] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    reason: [],
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const toggleReason = (option) => {
    setFields((prev) => {
      const exists = prev.reason.includes(option);
      const nextReasons = exists
        ? prev.reason.filter((x) => x !== option)
        : [...prev.reason, option];
      return { ...prev, reason: nextReasons };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;
    const hutk =
      (document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]*)/) || [])[1] ||
      undefined;

    // HubSpot checkbox fields generally expect "A;B;C"
    const reasonValue = (fields.reason || []).join(";");

    const payload = {
      fields: [
        { name: "firstname", value: fields.firstname },
        { name: "lastname", value: fields.lastname },
        { name: "phone", value: fields.phone },
        { name: "email", value: fields.email },
        // 🔁 change "reason" if your internal HubSpot field name differs
        { name: "reason", value: reasonValue },
      ],
      context: {
        pageUri: typeof window !== "undefined" ? window.location.href : "",
        pageName: typeof document !== "undefined" ? document.title : "Intake",
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
        setSubmitted(true);
        setFields({
          firstname: "",
          lastname: "",
          phone: "",
          email: "",
          reason: [],
        });
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

      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={11} lg={9} xl={8}>
            <Card className="shadow-sm border-0 rounded-4">
              <CardBody>
                <h2 className="fw-bold mb-4">Contact</h2>

                {submitted ? (
                  <Alert color="success" className="mb-0">
                    Thank you! Your submission has been received.
                  </Alert>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="firstname" className="fw-semibold">
                            First Name
                          </Label>
                          <Input
                            id="firstname"
                            name="firstname"
                            value={fields.firstname}
                            onChange={handleChange}
                            required
                          />
                        </FormGroup>
                      </Col>

                      <Col md={6}>
                        <FormGroup>
                          <Label for="lastname" className="fw-semibold">
                            Last Name
                          </Label>
                          <Input
                            id="lastname"
                            name="lastname"
                            value={fields.lastname}
                            onChange={handleChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <FormGroup>
                      <Label for="phone" className="fw-semibold">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={fields.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 555-5555"
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="email" className="fw-semibold">
                        Email <span style={{ color: "crimson" }}>*</span>
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={fields.email}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label className="fw-semibold">Reason</Label>
                      <div style={{ padding: "6px 0" }}>
                        {REASON_OPTIONS.map((opt) => {
                          const checked = fields.reason.includes(opt);
                          return (
                            <div
                              key={opt}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                padding: "8px 0",
                              }}
                            >
                              <Input
                                type="checkbox"
                                checked={checked}
                                onChange={() => toggleReason(opt)}
                              />
                              <span style={{ fontSize: 18 }}>{opt}</span>
                            </div>
                          );
                        })}
                      </div>
                    </FormGroup>

                    {error ? <Alert color="danger">{error}</Alert> : null}

                    <Button color="primary" disabled={submitting}>
                      {submitting ? <Spinner size="sm" /> : "Submit"}
                    </Button>
                  </Form>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
