import { Component } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Publications from './components/Sections/Publications';
import Contact from './components/Sections/Contact';
import './App.css'; // Keep for any legacy styles, though we moved most to index.css

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 20, color: 'red', background: 'white', zIndex: 9999, position: 'relative' }}>
          <h1>Something went wrong.</h1>
          <pre>{this.state.error && this.state.error.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Publications />
          <Contact />
        </main>
        <footer style={{ padding: '20px 0', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
          <p>Maintained by Siddhartha Sadhukhan</p>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;
