import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Howitworks from "../components/how it works/howitworks";
import About from "../components/about/about";
import Contact from "../components/Contact/Contact";
import Image from "next/image";

export default function InformationalPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="v-container flex h-20 items-center justify-between">
          <Link href="/" aria-label="Vuka home">
            <Image
              src="/new_logo.png"
              alt="Vuka Logo"
              width={120}
              height={40}
              priority
              className="object-contain"
            />
          </Link>

          <nav
            className="flex items-center gap-4 sm:gap-8"
            aria-label="Primary"
          >
            <a href="#services" className="v-navlink hidden md:inline-block">
              How It Works
            </a>
            <a href="#about" className="v-navlink hidden md:inline-block">
              About Us
            </a>
            <a href="#contact" className="v-navlink hidden md:inline-block">
              Contact
            </a>
            <Link
              href="/"
              className="v-navlink flex items-center gap-2 !text-slate-500 hover:!text-[#009450]"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Back to App</span>
            </Link>
            <Link
              href="/signup"
              className="rounded-xl bg-[#009450] px-5 py-2.5 text-sm font-bold text-white shadow-[0_4px_16px_rgba(0,148,80,0.3)] transition hover:-translate-y-0.5 hover:bg-[#00b864] hover:shadow-[0_6px_22px_rgba(0,148,80,0.45)]"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Howitworks />
        <About />
        <Contact />
      </main>
    </div>
  );
}
