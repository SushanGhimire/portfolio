import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Resume from "./components/Resume";
import Education from "./components/Education";
import Footer from "./components/Footer";
// import Chatbot from "./components/Chatbot";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WorkExperience />
      <Skills />
      <Projects />
      <Education />
      <Testimonials />
      <Resume />
      {/* <Chatbot /> */}
      <Footer />
    </main>
  );
}
