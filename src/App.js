import React from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/pages/Home_page/Home";
import Companiespage from "./Components/pages/Companies_page/Companiespage";
import Toolspage from "./Components/pages/Tools_page/Toolspage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use BrowserRouter here
import Simulatorpage from "./Components/pages/Simulators_page/Simulatorspage";
import WorkingPeoplepage from "./Components/pages/Workingpeople_page/Workingpeoplepage";
import WorkingPeopleIndiapage from "./Components/pages/Workingpeople_page/WorkingPeopleIndiapage";
import Articlespage from "./Components/pages/Articles_page/Articlespage";
import Researchpaperpage from "./Components/pages/Researchpaper_page/Researchpaperpage"
import Bookspage from "./Components/pages/Tutorials_page/Bookspage"
import Workshopspage from "./Components/pages/Workshops_page/Workshopspage";
import Patentspage from "./Components/pages/Patents_page/Patentspage";
import Footer from "./Components/pages/Footer/Footer";
import Coursescard from "./Components/pages/Tutorials_page/Courses"
import YoutubeCards from "./Components/pages/Tutorials_page/YouTube";
const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <HomePage/>
        <Footer/>
      </section>
      
    </>
  );
};

const Companies = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <Companiespage/>
      </section>
    </>
  );
};

const Researchpapers = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <Researchpaperpage/>

      </section>
    </>
  );
};

const Tools = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <Toolspage/>
        
      </section>
    </>
  );
};


const YouTubeContent = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <YoutubeCards/>
      </section>
    </>
  );
};
const Courses = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <Coursescard/>
      </section>
    </>
  );
};
const Books = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <Bookspage/>
      </section>
    </>
  );
};
const Simulators = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <Simulatorpage/>
      </section>
    </>
  );
};

const Workshops = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <Workshopspage/>
      </section>
    </>
  );
};


const WorkingPeople = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <WorkingPeoplepage/>
      </section>
    </>
  );
};

const WorkingPeopleIndia = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <WorkingPeopleIndiapage/>
      </section>
    </>
  );
};
const Patents = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <Patentspage/>
      </section>
    </>
  );
};
const Articles = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <Articlespage/>
      </section>
    </>
  );
};
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/quantum" element={<Home />} />
        
        <Route path="/quantum/companies" element={<Companies />} />
        <Route path="/quantum/researchpapers" element={<Researchpapers />} />
        <Route path="/quantum/tools" element={<Tools />} />
        {/* <Route path="/tutorials" element={<Tutorials />} /> */}
      
        <Route path="/quantum/youtubecontent" element={<YouTubeContent />} />
        <Route path="/quantum/courses" element={<Courses />} />
        <Route path="/quantum/books" element={<Books />} />
       

        <Route path="/quantum/simulators" element={<Simulators />} />
        <Route path="/quantum/workshops" element={<Workshops />} />
        <Route path="/quantum/workingpeople" element={<WorkingPeople />} />
        <Route path="/quantum/workingpeopleindia" element={<WorkingPeopleIndia />} />

        <Route path="/quantum/patents" element={<Patents />} />
        <Route path="/quantum/articles" element={<Articles />} />
        </Routes>
       
     
    </Router>
  );
};

export default App;
