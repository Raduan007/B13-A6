import { useState, useEffect, Suspense } from "react";
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import User from './components/User/User';
import Models from './components/Models/Models';
import Profile from './components/Profile/Profile';
import Pricing from './components/Pricing/Pricing';
import Cta from './components/CTA/Cta';
import Footer from './components/Footer/Footer';

const getModels = async () => {
  const res = await fetch("/Models.json");
  return res.json();
};

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [modelPromise, setModelPromise] = useState(null);

  useEffect(() => {
    setModelPromise(getModels());
  }, []);

  const addToCart = (item) => {
    setCart((prev) => {
      if (prev.find(i => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter(i => i.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen flex flex-col">

      <div className={cartOpen ? "hidden" : "block"}>
        <Navbar cart={cart} setCartOpen={setCartOpen} />
        <Banner />
        <User />
      </div>

      
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          {modelPromise && (
            <Models
              modelPromise={modelPromise}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              clearCart={clearCart}   // ✅ NEW
              cartOpen={cartOpen}
              setCartOpen={setCartOpen}
            />
          )}
        </Suspense>
    

      <div className={cartOpen ? "hidden" : "block"}>
        <Profile />
        <Pricing />
        <Cta />
        <Footer />
      </div>

    </div>
  );
}

export default App;