import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 64; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full mb-8"
          >
            <Code2 className="h-6 w-6 text-white mr-2" />
            <span className="text-white font-medium">Webentwicklung auf höchstem Niveau</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-bold text-white mb-6"
          >
            Digitale Präsenz neu definiert
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              mit modernen Weblösungen
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Wir entwickeln beeindruckende, leistungsstarke Websites, die Ergebnisse liefern.
            Lassen Sie uns Ihre Vision mit modernster Technologie zum Leben erwecken.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 inline-flex items-center relative group overflow-hidden transition-all duration-300"
              onClick={() => handleScroll('contact')}
            >
              <span className="relative z-10">Kontakt aufnehmen</span>
              <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white/20 hover:bg-white/10 hover:border-white transition-all duration-300"
              onClick={() => handleScroll('about')}
            >
              Mehr erfahren
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}