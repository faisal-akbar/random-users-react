import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Users from './components/Users/Users';
import Cart from './components/Cart/Cart';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAdd = (user) => {
    const newCart = [...cart, user];
    setCart(newCart);
  };

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
      .then((res) => res.json())
      .then((data) => setUsers(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header></Header>
      <div className='app-container'>
        <div className='user-list'>
          {users.map((user) => (
            <Users user={user} handleAdd={handleAdd}></Users>
          ))}
        </div>
        <div className='cart-area'>
          <h2>Total Users: {users.length}</h2>
          <h3>Users Added: {cart.length}</h3>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
