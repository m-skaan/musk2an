import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCards from "@/components/ProjectCards";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectCards />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
