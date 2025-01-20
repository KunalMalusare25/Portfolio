import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div className="">
      <main className="flex min-h-screen flex-col bg-[#121212] mt-10">
        <Navbar />
        <div className="container mt-10 mx-auto py-4 px-12">
          <div id="home" className="pt-10">
            <HeroSection />
          </div>

          <div id="about" className="pt-10">
            <About />
          </div>
          <div id="experience" className="pt-10">
            <Experience />
          </div>
          <div id="project" className="pt-16">
            <Project />
          </div>
          <div id="contact" className="pt-10">
            <EmailSection />
          </div>

          {/* <Footer /> */}
        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
