import SocialSidebar from './components/SocialSidebar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main className="relative">
      <SocialSidebar />
      
      {/* Main content */}
      <div className="pl-0 md:pl-20">
        <Home />
        <Projects />
        <Skills />
        <About />
        <Contacts />
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
