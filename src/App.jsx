import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  max-width: 2560px;
  margin: 0 auto;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  max-width: 2560px;
  margin: 0 auto;
  padding: 0;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;
