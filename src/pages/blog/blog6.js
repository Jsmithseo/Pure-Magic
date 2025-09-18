// pages/blog/blog-employment-roadmap.js
import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container } from "reactstrap";
import Link from "next/link";

export default function EmploymentRoadmap() {
  return (
    <>
      <Head>
        <title>Employment Support After Treatment | Pathway Humanity</title>
        <meta
          name="description"
          content="A practical roadmap—from readiness to retention—to help you find and keep work that fits your recovery and mental health plan."
        />
        <meta
          name="keywords"
          content="employment after treatment, job readiness, resume help, interview prep, job retention"
        />
      </Head>

      <MainNavbar />

      <Container className="py-5">
        <h1
          className="mb-4 text-center fw-bold"
          style={{ fontSize: "2.5rem", lineHeight: "1.3", color: "#fff" }}
        >
          From Surviving to Working: A Step-by-Step Employment Roadmap
        </h1>

        <article
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.9",
            fontSize: "1.25rem",
            color: "#fff",
          }}
        >
          <p>
            Work can be a stabilizer: structure, income, purpose. It can also feel
            overwhelming after a tough season. Here’s how we make the path back to
            employment realistic and supportive.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Stage 1: Readiness (build confidence first)
          </h2>
          <ul>
            <li>
              <strong>Energy &amp; schedule:</strong> try a volunteer shift or short
              training to test stamina.
            </li>
            <li>
              <strong>Paperwork:</strong> ID, Social Security card, bank account—one
              document at a time.
            </li>
            <li>
              <strong>Story practice:</strong> how to explain a gap with honesty and
              dignity.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Stage 2: Tools that open doors
          </h2>
          <ul>
            <li>
              <strong>Skills inventory:</strong> what you’re good at + what you enjoy.
            </li>
            <li>
              <strong>Resume refresh:</strong> simple, readable, strengths-forward.
            </li>
            <li>
              <strong>References:</strong> choose people who’ve seen you show up
              recently (coach, volunteer lead, counselor).
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Stage 3: Interviews without the panic
          </h2>
          <ul>
            <li>
              <strong>Mock interviews</strong> with feedback on answers, tone, and body
              language.
            </li>
            <li>
              <strong>Scripts for tough questions:</strong> “Tell me about a challenge”
              or “I see a gap here.”
            </li>
            <li>
              <strong>Transportation plan</strong> and time buffer so you arrive calm,
              not rushed.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Stage 4: The first 30 days on the job
          </h2>
          <ul>
            <li>
              <strong>A written success plan:</strong> who to ask for help, how to ask,
              and what to do on a hard day.
            </li>
            <li>
              <strong>Check-ins</strong> (text or quick calls) to troubleshoot early
              bumps.
            </li>
            <li>
              <strong>Budget basics</strong> so the new income helps you move forward.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Stage 5: Retention &amp; growth
          </h2>
          <ul>
            <li>
              <strong>Boundary setting</strong> to protect recovery time (sleep,
              meetings, appointments).
            </li>
            <li>
              <strong>Pathways to training or promotions</strong> if you want them.
            </li>
            <li>
              <strong>A gentle plan if a job ends</strong>—how to regroup and restart
              quickly.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Common questions
          </h2>
          <p>
            <strong>What if I relapse or need time off for treatment?</strong> We help
            you communicate early and connect to resources; your health comes first.
          </p>
          <p>
            <strong>Do you place people directly?</strong> We partner with employers and
            community orgs; fit and timing vary. The goal is the right job, not just the
            fastest one.
          </p>

          <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />

          <p className="mt-4">
            <strong>CTA:</strong> Ready to build your employment plan?{" "}
            <Link href="/contact" style={{ color: "#20c997", textDecoration: "underline" }}>
              Book a Job Readiness Session
            </Link>{" "}
            — we’ll leave you with next steps you can do this week.
          </p>

          <p style={{ fontSize: "0.95rem", opacity: 0.85 }}>
            This post is informational only and not legal or medical advice.
          </p>
        </article>
      </Container>

      <Footer />
    </>
  );
}
