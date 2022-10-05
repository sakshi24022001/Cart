import React, { useState} from "react";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import Shopping from "./components/shopping";
import Registration from './registration';
const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    const ind = cart.indexOf(item);
    if (ind !== -1)
      handleChange(item, 1);
    else
      setCart([...cart, item]);
  };

  const handleChange = (item, d, remove) => {
    let arr = [...cart];
    const ind = arr.indexOf(item);
    arr[ind].amount += d;

    if (arr[ind].amount === 0 || remove) 
      arr.splice(ind, 1);
    setCart(arr);
  };

  return (
    
    <React.Fragment>
      <Registration/>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Shopping handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
};

export default App;