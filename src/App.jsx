// src/App.jsx
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import User from './components/User/User';
import Models from './components/Models/Models';
import Profile from './components/Profile/Profile';
import Pricing from './components/Pricing/Pricing';
import Cta from './components/CTA/Cta';
import Footer from './components/Footer/Footer';
import { Suspense } from 'react';

const getModels = async () => {
  const res = await fetch("/Models.json")
  return res.json()
}

function App() {
  const modelPromise = getModels()
  return (
    <>
      <Navbar/>
      <Banner/>
      <User/>
       <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
       <Models modelPromise={modelPromise}/>
       </Suspense>
     <Profile/>
      <Pricing/>
      <Cta/>
      <Footer/>
  
    </>
  )
}

export default App