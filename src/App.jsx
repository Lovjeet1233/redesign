import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import BlogPage from './components/BlogPage';
import IndustriesPage from './components/IndustriesPage';

import 'locomotive-scroll/dist/locomotive-scroll.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<BlogPage />} />
        ,        <Route path="/industries" element={<IndustriesPage />} />
      </Routes>
    </Router>
  );
}

export default App; 
