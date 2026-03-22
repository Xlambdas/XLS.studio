// src/App.tsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AccessibilityPage } from './pages/accessibility';
import { ProjectsPage } from './pages/projects';
import { Home } from './components';

function App() {
    return (
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
      </Router>
    )
}

export default App
