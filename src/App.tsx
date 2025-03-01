import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { ErrorBoundary } from './components/ErrorBoundary';
import RotinePage from './pages/RotinePage';
import HeroSection from './components/HeroSection';
import WhySection from './components/WhySection';
import TrainingPlans from './components/TrainingPlans';
function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white">
          {/* Header */}
          <div className="bg-black py-2">
            <p className="text-white text-center text-sm font-medium">
              Aulas na Praça Olimpiada Sabado e domingo das 06:00 as 18:00
            </p>
          </div>

          <nav className="bg-black/95 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                  <Link to="/" className="text-white font-bold text-xl">
                    CALISTENIA
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-8">
                    <Link
                      to="/rotina"
                      className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Rotina
                    </Link>
                    <Link
                      to="/rotina"
                      className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Contato
                    </Link>
                    <a
                      href="#matricula"
                      className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium"
                    >
                      Matricule-se
                    </a>
                  </div>
                </div>
                <div className="md:hidden">
                  <button className="text-white p-2">
                    <Menu className="h-6 w-6"></Menu>
                  </button>
                </div>
              </div>
            </div>
          </nav>

          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <WhySection />
                    <TrainingPlans />
                  </>
                }
              ></Route>
              <Route path="/" element={<RotinePage />}></Route>
            </Routes>
          </main>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
