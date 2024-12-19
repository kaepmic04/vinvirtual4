import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { AISection } from './components/AISection';
import { ProcessSection } from './components/ProcessSection';
import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <div className="bg-black w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <AISection />
      <ProcessSection />
      <ContactForm />
    </div>
  );
}

export default App;