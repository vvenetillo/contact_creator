import { Route, Routes } from 'react-router-dom';
import Register from './components/pages/Register';
import Login from './components/routes/Login';
import List from './components/pages/List';
import Navbar from './components/routes/Navbar';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/register" element={<Register />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
}

export default AppRoutes;