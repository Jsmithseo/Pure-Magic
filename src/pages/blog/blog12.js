// pages/blog/importance-of-youth-mentorship.js
import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container } from "reactstrap";
import Link from "next/link";

export default function ImportanceOfYouthMentorship() {
  const title = "Why Youth Mentorship Programs Matter";
  const desc =
    "Mentorship increases protective factors, improves academics, and opens real pathways—college, apprenticeships, first jobs—for teens in our communities.";

  return (
    <>
      <Head>
        <title>{title} | Pathway Humanity</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="youth mentorship, teen support, protective factors, academic success, life skills, fentanyl awareness, Pathway Humanity"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
      </Head>

      <MainNavbar />

      <Container className="py-5">
        <h1
          className="mb-4 text-center fw-bold"
          style={{ fontSize: "2.5rem", lineHeight: "1.3", color: "#fff" }}
        >
          {title}
          <span style={{ display: "block", fontSize: "1.25rem", opacity: 0.9 }}>
            Consistent guidance → safer choices → real opportunities.
          </span>
        </h1>

        <article
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.9",
            fontSize: "1.1rem",
            color: "#fff",
          }}
        >
          <p>
            When a teen has a caring, consistent adult in their corner,
            everything changes. Mentorship translates encouragement into action:
            better decisions, stronger academics, and a clear plan for what
            comes next—college, an apprenticeship, or a first job.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            What mentorship actually does
          </h2>
          <ul>
            <li>
              <strong>Builds protective factors:</strong> Trusted relationships
              counter risk from substance use, unsafe peer groups, and chronic
              absenteeism.
            </li>
            <li>
              <strong>Improves academics:</strong> Goal-setting, check-ins, and
              tutoring referrals raise grades and confidence.
            </li>
            <li>
              <strong>Teaches life skills:</strong> Time management,
              communication, self-advocacy, and decision-making.
            </li>
            <li>
              <strong>Expands opportunity:</strong> Exposure to college
              preparedness, apprenticeships, and local career pathways.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            How Pathway Humanity designs mentorship
          </h2>
          <ul>
            <li>
              <strong>One-on-one mentorship:</strong> Regular meetings with
              measurable goals and progress tracking.
            </li>
            <li>
              <strong>Skill-building workshops:</strong> Study habits, resume
              basics, interviewing, and financial literacy.
            </li>
            <li>
              <strong>Drug awareness & safety:</strong> Real talk about opioids
              (including fentanyl) and how to respond in risky situations.
            </li>
            <li>
              <strong>Constructive community activities:</strong> Service and
              real-world projects to apply skills.
            </li>
            <li>
              <strong>Stipends & scholarships:</strong> Support for college
              application fees and milestone completion.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            For parents & caregivers: quick checklist
          </h2>
          <ul>
            <li>Set one school goal and one life goal with your teen.</li>
            <li>Protect sleep and screen time—small changes, big momentum.</li>
            <li>Post deadlines (FAFSA, applications, SAT/ACT) where you see them.</li>
            <li>Save your mentor’s contact and plan brief monthly updates.</li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Get involved in Richmond & Antioch
          </h2>
          <p>
            If you’re a student, parent, or educator in{" "}
            <strong>Richmond</strong> or <strong>Antioch</strong>, we’d love to
            connect you with a mentor and a clear next step.
          </p>

          <p className="mt-3">
            <Link
              href="/contact"
              style={{ color: "#20c997", textDecoration: "underline" }}
            >
              Refer a student or request a mentor
            </Link>
          </p>

          <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />

          <details>
            <summary>
              <strong>Important safety note on fentanyl</strong>
            </summary>
            <p style={{ marginTop: "0.5rem" }}>
              Counterfeit pills can look, feel, and even smell like legitimate
              medication. If a pill didn’t come from a licensed pharmacy, assume
              it’s fake—and dangerous. If you or someone you know is in crisis,
              call or text <strong>988</strong> for the Suicide & Crisis
              Lifeline.
            </p>
          </details>

          <p className="mt-4" style={{ fontSize: "0.95rem", opacity: 0.85 }}>
            This post is informational only and not medical advice.
          </p>
        </article>
      </Container>

      <Footer />
    </>
  );
}
