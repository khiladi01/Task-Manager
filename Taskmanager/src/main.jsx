import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Nav from './components/nav.jsx'
import Footer from './components/footer.jsx'
import Home from './pages/home.jsx'
import Dashboard from './pages/dashboard.jsx'
import TaskManagement from './pages/taskmanagement.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/task' element={<TaskManagement />} />
    </Routes>
    <Footer />
  </HashRouter>
)
