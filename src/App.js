import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import About from "./About.js";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import BlogSection from "./components/BlogSection";
import SkillsSection from "./components/SkillsSection";
import RecommendationSection from "./components/RecommendationSection";

function App() {
  return (
    <div>
      <Navbar />
      <Title name="PRATIK SINGH THAKUR" leadText="I am a freelance developer" />
      <RecommendationSection />
      <SkillsSection />
      <ProjectSection />
      <About />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
