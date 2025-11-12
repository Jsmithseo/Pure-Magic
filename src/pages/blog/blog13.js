// pages/blog/mens-mental-health-matters.js
import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container } from "reactstrap";
import Link from "next/link";

export default function MensMentalHealthMatters() {
  const title = "Men’s Mental Health Matters";
  const desc =
    "Men are taught to stay strong and stay quiet — but silence is costing us connection, health, and sometimes life. Here’s how to make mental health normal for men.";

  return (
    <>
      <Head>
        <title>{title} | Pathway Humanity</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="men's mental health, stigma, emotional health, suicide prevention, Pathway Humanity, community support"
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
            Strong doesn’t mean silent. Strong means getting what you need.
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
            A lot of men were raised on the same script: don’t cry, don’t
            complain, handle it. That can build resilience — but it can also
            build isolation. And isolation is where anxiety, depression,
            substance use, and even violence can grow.
          </p>
          <p>
            Men’s mental health isn’t a “nice to have.” It’s a public health
            issue, a family issue, and a community issue. When men are well,
            families are steadier. Workplaces are healthier. Kids are safer.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Three reasons men stay quiet
          </h2>
          <ul>
            <li>
              <strong>Stigma & training:</strong> Many men think “struggling =
              weak.” So they overwork, overtrain, or over-joke instead of
              saying, “I’m not okay.”
            </li>
            <li>
              <strong>No language for feelings:</strong> If nobody ever modeled
              naming stress, grief, or anxiety, it’s hard to describe what’s
              happening inside.
            </li>
            <li>
              <strong>Fear of burdening others:</strong> Men often see
              themselves as providers/protectors — so they hide pain to “not add
              to the load.”
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            What actually helps men
          </h2>
          <ul>
            <li>
              <strong>Spaces without performance:</strong> Small groups,
              barbershop talks, faith/community circles where men can be honest
              without getting roasted or dismissed.
            </li>
            <li>
              <strong>Direct invites:</strong> Men are more likely to talk when
              someone says, “How are you really?” and stays long enough to hear
              the answer.
            </li>
            <li>
              <strong>Skill-based therapy/coaching:</strong> Many men respond
              well to practical tools — sleep, anger management, communication,
              grief work — instead of only “talk about your feelings.”
            </li>
            <li>
              <strong>Movement + mental health:</strong> Training, walking
              groups, or sports + conversation is a great entry point for men
              who don’t want to sit in a circle first.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            If you’re a man reading this
          </h2>
          <p>
            Here’s a simple progression you can do this week:
          </p>
          <ul>
            <li>
              <strong>Day 1:</strong> Name your stress (work, money, health,
              family). Write it down.
            </li>
            <li>
              <strong>Day 2:</strong> Tell one trusted person, “I’ve had a lot
              on me lately.”
            </li>
            <li>
              <strong>Day 3:</strong> Move your body — walk, lift, stretch.
              Regulating the body helps regulate the mind.
            </li>
            <li>
              <strong>Day 4:</strong> Book a real appointment (counselor,
              pastor, coach, men’s group).
            </li>
          </ul>
          <p>
            None of that makes you weak. It makes you responsible. You’re
            protecting everyone connected to you by taking care of yourself.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            If you support men (partners, moms, friends)
          </h2>
          <ul>
            <li>
              Ask specific questions: “How’s work stress?” & “What’s been on
              your mind at night?” are better than “How are you?”
            </li>
            <li>
              Normalize help: “I’d talk to someone about that too.” Make it
              ordinary, not dramatic.
            </li>
            <li>
              Invite them into community: men’s breakfasts, faith groups,
              sports/fitness — places where other healthy men show up.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            How Pathway Humanity can plug in
          </h2>
          <p>
            Our work isn’t just about youth — it’s about the adults and fathers
            around them. We can help you build men’s circles, bring in mental
            health educators, or connect your organization with local
            counseling/support resources.
          </p>

          <p className="mt-3">
            <Link
              href="/contact"
              style={{ color: "#20c997", textDecoration: "underline" }}
            >
              Bring a men’s mental health workshop to your site
            </Link>
          </p>

          <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />

          <details>
            <summary>
              <strong>If you or someone you love is in crisis</strong>
            </summary>
            <p style={{ marginTop: "0.5rem" }}>
              Call or text <strong>988</strong> for the Suicide &amp; Crisis
              Lifeline (U.S.). If there is an immediate safety concern, call
              911. Reaching out is a sign of strength, not failure.
            </p>
          </details>

          <p className="mt-4" style={{ fontSize: "0.95rem", opacity: 0.85 }}>
            This post is informational only and not a substitute for care from a
            licensed mental health professional.
          </p>
        </article>
      </Container>

      <Footer />
    </>
  );
}
