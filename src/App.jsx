import { Routes, Route, Navigate } from 'react-router-dom'
import Users from './pages/Users'
import Register from './pages/Register'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Users />} />
      <Route path='/register' element={<Register />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>

  )
}

export default App
