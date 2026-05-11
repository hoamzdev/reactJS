import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import '../styles/app.css';

export default function App() {
  return (
    <div className="app">
      <Navigation />
      <HeroSection />
      <ServicesSection />
    </div>
  )
}