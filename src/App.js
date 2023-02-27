import Header from './components/Header';
import Footer from './components/body-components/Footer'
import './App.css';
import Blogs from './components/Blog';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
 

<BrowserRouter>
<Routes>
  <Route path="/" element={<Header />}>

  <Route path="blogs" element={<Blogs />} />
  </Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
