import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Work from './Components/Work';
import 'font-awesome/css/font-awesome.min.css';
import { AppContainer } from './Utils/Constants';
import Footer from './Components/Footer';

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </AppContainer>
  );
}

export default App;
