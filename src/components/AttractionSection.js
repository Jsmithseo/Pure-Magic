import React from "react";

/**
 * PureMagicAttractionSection
 * - Two-column editorial section (text left, image right)
 * - Pure Magic vibe: clean luxury + subtle “drip” accent
 * - Drop into any page. Pass your own image src.
 */
export default function PureMagicAttractionSection({
  imageSrc = "attraction.png",
  imageAlt = "Pure Magic body butter lifestyle photo",
  eyebrow = "PURE MAGIC",
  titleLead = "The",
  titleHighlight = "Signature",
  titleTrail = "Factor",
  ctaLabel = "Shop all",
  ctaHref = "/products",
}) {
  return (
    <section className="pmWrap" aria-label="Pure Magic editorial section">
      <div className="pmGrid">
        {/* Left */}
        <div className="pmLeft">
          <div className="pmBrandMark" aria-hidden="true">
            <span className="pmBrandDot" />
          </div>

          <h2 className="pmTitle">
            {titleLead}{" "}
            <span className="pmHighlight">
              <span className="pmHighlightBg" aria-hidden="true" />
              <span className="pmHighlightText">{titleHighlight}</span>
            </span>{" "}
            {titleTrail}
          </h2>

          <div className="pmBody">
            <p>
              Pure Magic is made with one intention: to make your skincare feel
              like a ritual. Our whipped body butters deliver rich moisture and a
              clean finish—plus scent profiles inspired by cologne-style
              fragrances and sweet classics.
            </p>

            <p>
              Think smooth vanilla, warm woods, fresh citrus, and candy-inspired
              notes—layered to leave a soft trail that feels as good on your skin
              as it smells in the air.
            </p>

            <p className="pmEmphasis">
              Because confidence isn’t an accident — it’s crafted.
            </p>
          </div>

          {/* <div className="pmActions">
            <a className="pmBtn" href={ctaHref}>
              {ctaLabel}
            </a>
            <p className="pmNote">{eyebrow}</p>
          </div> */}
        </div>

        {/* Right */}
        <div className="pmRight">
          <div className="pmImageFrame">
            <img className="pmImg" src={imageSrc} alt={imageAlt} />
            <div className="pmOverlay" aria-hidden="true" />
            <div className="pmDrip" aria-hidden="true">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0 V45 C70,95 140,25 220,75 C310,125 360,45 450,85 C540,125 610,40 700,90 C790,140 860,35 950,75 C1040,115 1120,55 1200,95 V0 Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pmWrap {
          background: #000;
          padding: 56px 18px;
        }

        .pmGrid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.06);
          background: #fff;
          box-shadow: 0 18px 44px rgba(0, 0, 0, 0.07);
        }

        .pmLeft {
          padding: 44px 26px 42px;
          background: radial-gradient(
              900px 500px at 10% 0%,
              rgba(0, 0, 0, 0.06),
              transparent 60%
            ),
            #fff;
        }

        .pmBrandMark {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .pmBrandDot {
          width: 26px;
          height: 2px;
          background: rgba(0, 0, 0, 0.75);
          display: inline-block;
        }

        .pmTitle {
          margin: 0;
          font-size: 44px;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: #111;
        }

        .pmHighlight {
          position: relative;
          display: inline-block;
          padding: 0 6px;
        }

        .pmHighlightBg {
          position: absolute;
          inset: 58% -2px 8% -2px;
          background: #d7b04c; /* gold accent */
          transform: rotate(-2deg);
          border-radius: 6px;
          opacity: 0.92;
        }

        .pmHighlightText {
          position: relative;
          z-index: 1;
        }

        .pmBody {
          margin-top: 18px;
          max-width: 520px;
        }

        .pmBody p {
          margin: 0 0 14px;
          font-size: 16.5px;
          line-height: 1.8;
          color: rgba(0, 0, 0, 0.72);
        }

        .pmEmphasis {
          margin-top: 10px;
          font-weight: 700;
          color: rgba(0, 0, 0, 0.78);
        }

        .pmActions {
          margin-top: 26px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .pmBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 18px;
          border-radius: 999px;
          background: #ece3c4; /* warm cream/gold */
          color: #111;
          text-decoration: none;
          font-weight: 800;
          border: 1px solid rgba(0, 0, 0, 0.08);
          transition: transform 0.15s ease, opacity 0.15s ease;
        }

        .pmBtn:hover {
          transform: translateY(-1px);
          opacity: 0.95;
        }

        .pmNote {
          margin: 0;
          font-size: 12px;
          letter-spacing: 0.28em;
          color: rgba(0, 0, 0, 0.5);
          text-transform: uppercase;
        }

        .pmRight {
          min-height: 360px;
          background: #f2f2f2;
        }

        .pmImageFrame {
          position: relative;
          height: 100%;
          min-height: 360px;
          overflow: hidden;
        }

        .pmImg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .pmOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.02),
            rgba(0, 0, 0, 0.18)
          );
          pointer-events: none;
        }

        .pmDrip {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 54px;
          pointer-events: none;
          opacity: 0.65;
        }

        .pmDrip svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .pmDrip path {
          fill: rgba(255, 255, 255, 0.92);
        }

        @media (min-width: 960px) {
          .pmGrid {
            grid-template-columns: 1.05fr 1fr;
            gap: 0;
          }
          .pmLeft {
            padding: 62px 56px 58px;
          }
          .pmRight {
            min-height: 520px;
          }
          .pmImageFrame {
            min-height: 520px;
          }
          .pmTitle {
            font-size: 56px;
          }
        }
      `}</style>
    </section>
  );
}
