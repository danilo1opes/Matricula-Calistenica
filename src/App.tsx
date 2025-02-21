import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Home } from './pages/Home';
function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white">
          <div className="bg-black py-2">
            <p className="text-white text-center text-sm font-medium">
              Aulas na Praça Olimpiada Sabado e domingo das 06:00 as 18:00
            </p>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
