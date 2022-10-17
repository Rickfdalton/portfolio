import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Experience from "./components/experience/experience";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
