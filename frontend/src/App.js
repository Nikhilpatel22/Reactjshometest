import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/login';
import Signup from './components/signup';
import Example from './components/Example';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Register from './components/Register';
import Protected from './components/Protected';
function App() {
  return (
    <div className="App">
  
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Example />}> </Route>
          <Route path="/home" element={<Protected Cmp={Home} />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/register" element={<Register />}> </Route>
          <Route path="/signup" element={<Signup />}> </Route>
          <Route path="/about" element={<Protected Cmp={About} />}> </Route>
          <Route path="/contactus" element={<Protected Cmp={ContactUs} />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
