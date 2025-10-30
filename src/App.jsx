import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import CTABanner from './components/CTABanner';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="error-screen">
        <p>Error loading application data. Please refresh the page.</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Header data={data} />
      <Hero data={data} />
      <Services data={data} />
      <About data={data} />
      {/* Overlap anchor: CTABanner is absolutely positioned here so it straddles sections */}
      <div className="cta-overlap-anchor">
        <CTABanner
          data={data}
        />
      </div>
      <Footer data={data} />
    </div>
  );
}

export default App;
