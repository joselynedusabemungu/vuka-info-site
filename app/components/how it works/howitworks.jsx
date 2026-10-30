import { Target, BookOpen, Rocket, Trophy, Award } from "lucide-react";
import Reveal from "../Reveal";

const steps = [
  {
    icon: Target,
    title: "Take onboarding assessment",
    description:
      "Take a short assessment to determine your interests, strengths, and career aspirations.",
    span: "lg:col-span-2",
  },
  {
    icon: BookOpen,
    title: "Get aligned to your path's learning content",
    description:
      "Based on your results, you'll be aligned to a personalized learning path with relevant content and resources.",
    span: "lg:col-span-2",
  },
  {
    icon: Rocket,
    title: "Complete away missions",
    description:
      "Complete a series of away missions and fun assessments that are designed to help you learn more.",
    span: "lg:col-span-2",
  },
  {
    icon: Trophy,
    title: "Qualify",
    description:
      "Complete the required number of away missions, earn streaks, and score high to qualify for opportunities.",
    span: "lg:col-span-3",
  },
  {
    icon: Award,
    title: "Unlock opportunities",
    description: "Unlock exclusive opportunities for scholarships and bootcamps.",
    span: "md:col-span-2 lg:col-span-3",
  },
];

export default function HowItWorks() {
  return (
    <section id="services" className="v-section v-section-light">
      <div className="v-container">
        <Reveal>
          <div className="v-head">
            <span className="v-eyebrow">How Vuka Works</span>
            <h2 className="v-title">
              Five simple steps, <span className="v-accent">one clear path.</span>
            </h2>
            <p className="v-lead">
              A guided journey from your first assessment to unlocking real-world
              opportunities.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 90}
              className={`h-full ${step.span}`}
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#009450]/30 hover:shadow-xl">
                <span className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-[#009450] transition-transform duration-500 group-hover:scale-x-100" />

                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#072540] text-white shadow-md transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#009450]">
                    <step.icon size={24} />
                  </div>
                  <span className="text-5xl font-extrabold leading-none tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-[#009450]/25">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="v-card-title">{step.title}</h3>
                <p className="v-card-text">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
