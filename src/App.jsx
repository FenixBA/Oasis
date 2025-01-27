import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import MainSection from './components/MainSection';
import ContactPage from './pages/ContactPage';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Router>
      <Navbar />
      <Box > {/* Espaciado debajo del Navbar */}
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;

