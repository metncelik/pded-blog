import './App.css';
import Home from './views/Home'
import Blog from './views/Blog'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="App-header">
          <NavBar />
        </header>
        <body>
          <Routes>
            <Route index element={<Home />} />
            <Route exact path='/blog/:blogID' element={<Blog />} />
          </Routes>
        </body>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
