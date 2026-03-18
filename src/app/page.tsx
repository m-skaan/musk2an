import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCards from "@/components/ProjectCards";
import PersonalProjects from "@/components/PersonalProjects";
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
        <PersonalProjects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
