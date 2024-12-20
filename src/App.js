// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/HeroSection';
// import About from './components/AboutUs';
// import Menu from './components/Menu';
// import Reservation from './components/Registration';
// import Feedback from './components/Feedback';
// import Register from './Signup';
// // src/App.js or index.js
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Login from './login';


// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/menu" element={<Menu />} />
//         <Route path="/reservation" element={<Reservation />} />
//         <Route path="/feedback" element={<Feedback />} />
//         <Route path="/signup" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/HeroSection";
import About from "./components/AboutUs";
import Menu from "./components/Menu";
import Reservation from "./components/Registration";
import Feedback from "./components/Feedback";
import Register from "./Signup";
import Login from "./login";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState(null);

  // Fetch data from your backend when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://simple-restaurant-backend.onrender.com/api/data');
        setData(response.data); // Store the fetched data in state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/signup" element={<Register />} />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
      </Routes>
      {/* Uncomment to display fetched data */}
      {/* <div>
        <h1>Data from Backend:</h1>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
      </div> */}
    </Router>
  );
}

export default App;

