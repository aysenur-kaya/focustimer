
import {Routes ,Route, BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import './App.css'
import MainLayout from './layout/MainLayout';
import Header from './components/Header/Header';
import Pomodoro from './pages/Pomodoro';
import Stopwatch from './pages/Stopwatch';
import TimerPage from "./pages/TimerPage";
import WorldClock from './pages/WorldClock';
import { LanguageProvider } from "./context/LanguageContext";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";







export default function App() {
  

  return (

    <LanguageProvider>

    <div className='app'>
      <Header />

      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Pomodoro/>} />
          <Route path='/stopwatch' element={<Stopwatch/>} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path='/world-clock' element={<WorldClock/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          

         

        </Routes>
      </main>

      <Footer />
    </div>

    </LanguageProvider>
    
  
  );
}

