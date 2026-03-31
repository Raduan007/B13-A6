// src/App.jsx
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import User from './components/User/User';
import ApiCard from './components/ApiCard/Card';
import Profile from './components/Profile/Profile';
import Pricing from './components/Pricing/Pricing';
import Cta from './components/CTA/Cta';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <User/>
      <ApiCard/>
     <Profile/>
      <Pricing/>
      <Cta/>
      <Footer/>
  
    </>
  )
}

export default App