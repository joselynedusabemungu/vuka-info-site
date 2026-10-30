import Image from "next/image";
import Reveal from "../Reveal";

const rows = [
  {
    number: "01",
    title: "Our Mission",
    image: "/row2.webp",
    alt: "Young learners using Vuka",
    paragraphs: [
      "High school graduation should be a beginning, not a cliff. Yet too many Kenyan Form 4 leavers are left guessing what comes next. We built Vuka to bridge that gap by meeting learners where they already spend time.",
      "Every Away Mission sends a learner to a trusted creator teaching something real. A short verification quiz proves the skill stuck.",
    ],
    tags: [],
    reverse: false,
  },
  {
    number: "02",
    title: "Why it matters",
    image: "/mission2.png",
    alt: "Learners progressing towards opportunities",
    paragraphs: [
      "Online courses exist, but they are often invisible to the young people who need them most. By tracking real progress, we can unlock the right opportunity at the right time.",
      "The result is a simple loop: watch, learn, verify, keep your streak, and level up. The skills are free, the guidance is personal, and the future is a little more in focus every day.",
    ],
    tags: ["Watch", "Learn", "Verify", "Keep your streak", "Level up"],
    reverse: true,
  },
];

export default function About() {
  return (
    <section id="about" className="v-section v-section-white">
      <div className="v-container">
        <Reveal>
          <div className="v-head">
            <span className="v-eyebrow">Who We Are</span>
            <h2 className="v-title">
              About <span className="v-accent">Vuka</span>
            </h2>
            <p className="v-lead">
              Vuka matches your interests to trusted TikTok, Instagram, and YouTube
              creators teaching real skills. Complete Away Missions, verify what you
              learned, build streaks, and unlock scholarships.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-16 lg:gap-24">
          {rows.map((row) => (
            <div
              key={row.title}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
            >
              <Reveal className={`lg:col-span-7 ${row.reverse ? "lg:order-2" : ""}`}>
                <div className="v-panel">
                  <span className="v-panel-num" aria-hidden="true">
                    {row.number}
                  </span>
                  <h3 className="v-h3">{row.title}</h3>
                  {row.paragraphs.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                  {row.tags.length > 0 && (
                    <div className="v-chips">
                      {row.tags.map((tag) => (
                        <span key={tag} className="v-chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>

              <Reveal
                delay={150}
                className={`lg:col-span-5 ${row.reverse ? "lg:order-1" : ""}`}
              >
                <div className="v-frame-wrap">
                  <div className="v-frame">
                    <span className="v-corner tl" />
                    <span className="v-corner tr" />
                    <span className="v-corner bl" />
                    <span className="v-corner br" />
                    <div className="v-frame-glow" aria-hidden="true" />
                    <div className="v-frame-ring" aria-hidden="true" />
                    <div className="v-frame-ring is-outer" aria-hidden="true" />
                    <div className="v-frame-inner">
                      <Image
                        src={row.image}
                        alt={row.alt}
                        fill
                        sizes="(max-width: 1024px) 90vw, 480px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}