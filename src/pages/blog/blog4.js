// pages/blog/pathway-humanity.js
import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container } from "reactstrap";

export default function PathwayHumanityPage() {
  return (
    <>
      <Head>
        <title>Pathway Humanity | Integrated Recovery & Transitional Support</title>
      </Head>

      <MainNavbar />

      <Container className="py-5">
        <h1
          className="mb-4 text-center fw-bold"
          style={{ fontSize: "2.5rem", lineHeight: "1.3", color: "#fff" }}
        >
          Pathway Humanity: Integrated Recovery & Transitional Support
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
            <b>
              Recovery is rarely a straight line.
            </b>{" "}
            Some days you need therapy. Other days you need a safe place to sleep, help replacing
            your ID, or someone to practice an interview with. Whole-person care means we don’t
            treat one piece of you—we support the full picture: health, housing, purpose, and
            community.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Mental health and recovery—together
          </h2>
          <p>
            We integrate counseling, peer support, and recovery planning. You set goals; we build a
            plan that respects your pace and preferences. If medication is part of your care, we
            coordinate with your prescriber and help you stick with what works.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Safety &amp; stability first
          </h2>
          <p>
            It’s hard to heal while you’re worrying about where to sleep. Transitional housing
            creates breathing room—predictable routines, secure storage, and supportive staff—so you
            can focus on the next step instead of the next crisis.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Skills for everyday life
          </h2>
          <p>
            From paperwork to meal planning, we practice real-world tasks side by side. Need to
            replace a state ID? Budget for groceries? Learn public transit? We break it down into
            doable steps and celebrate progress.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Work is part of recovery
          </h2>
          <p>
            Purpose matters. Our employment team helps with resumes, mock interviews, workplace
            expectations, and job placement—then checks in after you start.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Community that doesn’t judge
          </h2>
          <p>
            You’re not a case file. You’re a person with strengths, hopes, and a future. Staff and
            peers model non-judgmental language and respect—because shame doesn’t help anyone heal.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Getting started
          </h2>

          <h3 className="mt-3" style={{ fontSize: "1.4rem" }}>
            A short discovery call
          </h3>
          <p>
            We start by listening—what you want, what you need, what’s urgent, and what can wait.
          </p>

          <h3 className="mt-3" style={{ fontSize: "1.4rem" }}>
            An intake visit to map supports
          </h3>
          <p>We’ll identify resources, housing options, and immediate actions to reduce stressors.</p>

          <h3 className="mt-3" style={{ fontSize: "1.4rem" }}>
            A written plan you can change as you grow
          </h3>
          <p>
            Clear steps, shared ownership, flexible pacing—and regular check-ins to keep things on
            track.
          </p>
        </article>
      </Container>

      <Footer />
    </>
  );
}
