import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import ScrollProgress from "../components/common/ScrollProgress";


import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <ScrollProgress />
      <Background />
      <Navbar />
      <Sidebar />

      <main className="lg:ml-28" id='home'>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects/>
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;