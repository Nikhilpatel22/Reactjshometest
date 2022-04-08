import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/login';
import Signup from './components/signup';
import Example from './components/Example';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Example />}> </Route>
          <Route path="/home" element={<Home />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/signup" element={<Signup />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
