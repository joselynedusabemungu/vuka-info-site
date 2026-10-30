"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Flame,
  GraduationCap,
  BadgeCheck,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import styles from "./home.module.css";

const features = [
  "Curated Social Media content",
  "Explore your interests",
  "Unlock opportunities",
];

export default function Home() {
  const tiltRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleMove(e) {
    if (e.pointerType && e.pointerType !== "mouse") return;
    const el = tiltRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--rx", `${(-y * 14).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 14).toFixed(2)}deg`);
  }

  function handleLeave() {
    const el = tiltRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <div className={styles.heroContainer}>
      <header className={`${styles.heroHeader} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.headerInner}>
          <a href="#home" className={styles.logoGroup} aria-label="Vuka home">
            <div className={styles.logoWrapper}>
              <Image
                src="/new_logo.png"
                alt="Vuka Logo"
                fill
                sizes="(max-width: 640px) 80px, 128px"
                className="object-contain object-left"
                priority
              />
            </div>
          </a>

          <nav className={styles.navLinks} aria-label="Primary">
            <a href="#home" className={styles.navLink}>
              Home
            </a>
            <a href="#about" className={styles.navLink}>
              About Us
            </a>
            <a href="#services" className={styles.navLink}>
              How It Works
            </a>
            <a href="#contact" className={styles.contactBtn}>
              <span className={styles.contactPulse} aria-hidden="true" />
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      <main id="home" className={styles.mainContent}>
        <div className={styles.bgGlow1} aria-hidden="true" />
        <div className={styles.bgGlow2} aria-hidden="true" />

        <div className={styles.gridLayout}>
          <div className={styles.textColumn}>
            <span
              className={`${styles.badge} ${styles.enter}`}
              style={{ "--d": "0ms" }}
            >
              <span className={styles.badgeDot} aria-hidden="true" />
              Helping Kenyan students unlock opportunities
            </span>

            <h1
              className={`${styles.heroTitle} ${styles.enter}`}
              style={{ "--d": "100ms" }}
            >
              Scroll to <span className={styles.gradientText}>success</span>
            </h1>

            <p
              className={`${styles.heroDescription} ${styles.enter}`}
              style={{ "--d": "200ms" }}
            >
              Vuka leverages the platforms youth already use to deliver guided
              learning, skills, and real opportunities. We meet young people
              where they already live — and turn attention into advancement.
            </p>

            <ul className={styles.featureList}>
              {features.map((text, i) => (
                <li
                  key={text}
                  className={`${styles.featureItem} ${styles.enter}`}
                  style={{ "--d": `${300 + i * 90}ms` }}
                >
                  <span className={styles.bulletOuter} aria-hidden="true">
                    <span className={styles.bulletInner} />
                  </span>
                  <span className={styles.featureText}>{text}</span>
                </li>
              ))}
            </ul>

            <div
              className={`${styles.btnWrapper} ${styles.enter}`}
              style={{ "--d": "600ms" }}
            >
              <Link href="/login" className={styles.ctaButton}>
                Get started <ArrowRight size={18} />
              </Link>
              <a href="#services" className={styles.ghostButton}>
                See how it works
              </a>
            </div>
          </div>

          <div className={styles.visualColumn}>
            <div
              className={styles.visualBox}
              onPointerMove={handleMove}
              onPointerLeave={handleLeave}
            >
              <span className={styles.cornerTL} />
              <span className={styles.cornerTR} />
              <span className={styles.cornerBL} />
              <span className={styles.cornerBR} />

              <div className={styles.ambientGlow1} aria-hidden="true" />
              <div className={styles.ambientGlow2} aria-hidden="true" />

              <div className={styles.orbit} aria-hidden="true" />
              <div className={styles.spinRingOuter} aria-hidden="true" />
              <div className={styles.spinRingInner} aria-hidden="true" />

              <div ref={tiltRef} className={styles.imageContainer}>
                <Image
                  src="/image.png"
                  alt="Social media platforms network"
                  fill
                  sizes="(max-width: 1024px) 70vw, 480px"
                  className={styles.graphicImg}
                  priority
                />
              </div>

              <div className={`${styles.chip} ${styles.chipA}`}>
                <span className={styles.chipIcon}>
                  <Flame size={16} />
                </span>
                Keep your streak
              </div>
              <div className={`${styles.chip} ${styles.chipB}`}>
                <span className={styles.chipIcon}>
                  <GraduationCap size={16} />
                </span>
                Scholarships unlocked
              </div>
              <div className={`${styles.chip} ${styles.chipC}`}>
                <span className={styles.chipIcon}>
                  <BadgeCheck size={16} />
                </span>
                Skill verified
              </div>
            </div>
          </div>
        </div>

        <a
          href="#services"
          className={styles.scrollCue}
          aria-label="Scroll to How It Works"
        >
          <ChevronDown size={22} />
        </a>
      </main>
    </div>
  );
}
