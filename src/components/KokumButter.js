import React from "react";

export default function PureMagicKokumButterSection() {
  return (
    <section className="pm-section" aria-label="Kokum Butter Info">
      <div className="pm-inner">
        {/* Left block */}
        <div className="pm-block pm-block--intro">
          <div className="pm-drip" aria-hidden="true">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0 V40 C60,95 140,20 220,75 C310,125 360,40 450,80 C540,120 610,35 700,85 C790,135 860,30 950,70 C1040,110 1120,55 1200,95 V0 Z" />
            </svg>
          </div>

          <p className="pm-kicker">PURE MAGIC INGREDIENT SPOTLIGHT</p>
          <h2 className="pm-title">Kokum Butter</h2>
          <p className="pm-subtitle">What is it?</p>

          <p className="pm-body">
            Kokum butter is a plant-based butter pressed from the seeds of the
            kokum fruit. It’s known for a smooth, non-greasy feel—making it a
            go-to for rich moisture that still wears clean on the skin.
          </p>
        </div>

        {/* Right block */}
        <div className="pm-block pm-block--benefits">
          <div className="pm-drip pm-drip--alt" aria-hidden="true">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0 V40 C60,95 140,20 220,75 C310,125 360,40 450,80 C540,120 610,35 700,85 C790,135 860,30 950,70 C1040,110 1120,55 1200,95 V0 Z" />
            </svg>
          </div>

          <h3 className="pm-title-sm">Benefits</h3>
          <div className="pm-divider" aria-hidden="true" />

          {/* ✅ Your provided content */}
          <p className="pm-body pm-body--center">
            Kokum butter provides 48-hour deep hydration that penetrates skin
            without leaving any greasy residue. This rare Indian butter creates
            an invisible barrier that locks in moisture while allowing your skin
            to breathe naturally.
          </p>
{/* 
          <div className="pm-ctaRow">
            <a className="pm-btn" href="/products">
              Shop Body Butters
            </a>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        .pm-section {
          padding: 72px 20px;
          background: radial-gradient(
              1200px 600px at 20% 0%,
              rgba(0, 0, 0, 0.06),
              transparent 60%
            ),
            #000;
        }

        .pm-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }

        .pm-block {
          position: relative;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 18px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.75);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          padding: 28px 22px 26px;
          backdrop-filter: blur(6px);
        }

        .pm-block--intro {
          padding-top: 46px;
        }

        .pm-block--benefits {
          padding-top: 46px;
        }

        .pm-drip {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 52px;
        }

        .pm-drip svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .pm-drip path {
          fill: rgba(0, 0, 0, 0.08);
        }

        .pm-drip--alt path {
          fill: rgba(25, 55, 120, 0.14);
        }

        .pm-kicker {
          margin: 0 0 10px;
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          opacity: 0.7;
        }

        .pm-title {
          margin: 0;
          font-size: 40px;
          line-height: 1.05;
          letter-spacing: 0.02em;
        }

        .pm-subtitle {
          margin: 10px 0 0;
          font-size: 14px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          opacity: 0.75;
        }

        .pm-title-sm {
          margin: 0;
          font-size: 26px;
          text-align: center;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .pm-divider {
          width: 120px;
          height: 1px;
          margin: 14px auto 18px;
          background: rgba(0, 0, 0, 0.18);
        }

        .pm-body {
          margin: 14px 0 0;
          font-size: 16px;
          line-height: 1.7;
          opacity: 0.86;
        }

        .pm-body--center {
          text-align: center;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
        }

        .pm-ctaRow {
          display: flex;
          justify-content: center;
          margin-top: 18px;
        }

        .pm-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 16px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 800;
          letter-spacing: 0.02em;
          background: #0b0b0b;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.14);
          transition: transform 0.15s ease, opacity 0.15s ease;
        }

        .pm-btn:hover {
          transform: translateY(-1px);
          opacity: 0.95;
        }

        @media (min-width: 900px) {
          .pm-inner {
            grid-template-columns: 1.1fr 0.9fr;
            align-items: stretch;
          }
          .pm-title {
            font-size: 46px;
          }
          .pm-block {
            padding: 34px 28px 30px;
          }
        }
      `}</style>
    </section>
  );
}
