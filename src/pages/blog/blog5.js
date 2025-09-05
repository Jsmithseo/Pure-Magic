// pages/blog/transitional-housing-101.js
import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container } from "reactstrap";

export default function TransitionalHousing101Page() {
  return (
    <>
      <Head>
        <title>Transitional Housing at Pathway Humanity | What to Expect</title>
        <meta
          name="description"
          content="Curious about transitional housing? Here’s a day-by-day look at routines, safety, expectations, and how Pathway Humanity supports your next chapter."
        />
        <meta
          name="keywords"
          content="transitional housing, recovery housing, what to bring, daily routine, program expectations"
        />
      </Head>

      <MainNavbar />

      <Container className="py-5">
        <h1
          className="mb-4 text-center fw-bold"
          style={{ fontSize: "2.5rem", lineHeight: "1.3", color: "#fff" }}
        >
          Transitional Housing 101: What to Expect (Day by Day)
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
            If “transitional housing” sounds confusing, you’re not alone. Think of it as a{" "}
            <b>bridge between crisis and long-term stability</b>—safe, structured, and focused on
            your goals.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            A typical day
          </h2>

          <h3 className="mt-3" style={{ fontSize: "1.4rem" }}>
            Morning
          </h3>
          <ul>
            <li>
              Breakfast and a quick check-in: How was your sleep? Any appointments today?
            </li>
            <li>
              Goal setting: choose <i>one small task</i> for the day (paperwork, job search step,
              therapy session).
            </li>
            <li>Transportation support if you need it.</li>
          </ul>

          <h3 className="mt-3" style={{ fontSize: "1.4rem" }}>
            Afternoon
          </h3>
          <ul>
            <li>Appointments, classes, or employment services.</li>
            <li>
              Life-skills blocks: budgeting basics, kitchen skills, laundry, organizing personal
              documents.
            </li>
          </ul>

          <h3 className="mt-3" style={{ fontSize: "1.4rem" }}>
            Evening
          </h3>
          <ul>
            <li>
              Community dinner rhythm (everyone contributes in small ways to keep things running).
            </li>
            <li>Peer group or quiet time.</li>
            <li>Staff available for planning tomorrow and problem-solving.</li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            What to bring (and what not to stress about)
          </h2>
          <p>
            <b>Bring:</b> government ID (or we’ll help you replace it), essential meds, a few
            outfits, comfortable shoes, any paperwork you already have.
          </p>
          <p>
            <b>We provide:</b> linens, basic toiletries to start, storage space, and a clear
            schedule so you always know what’s next.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Expectations that help everyone
          </h2>
          <ul>
            <li><b>Be respectful</b> (to yourself and others).</li>
            <li>
              <b>Show up</b> for the plan you helped write—small steps count.
            </li>
            <li>
              <b>Communicate early</b> if something’s getting in the way—transport, cravings,
              anxiety—so we can adjust supports.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            How long will I stay?
          </h2>
          <p>
            It depends on your goals and housing plan. Some people need a short reset; others
            benefit from a longer runway. We review progress regularly and set{" "}
            <b>move-forward milestones</b> so you can see momentum.
          </p>
        </article>
      </Container>

      <Footer />
    </>
  );
}
