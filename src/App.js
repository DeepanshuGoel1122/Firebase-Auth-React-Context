import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { UserAuthContextProvider } from './utils/userAuthContext';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Login from './components/Login';
import Profile from './components/Profile';
import ProtectedRoute from './utils/ProtectedRoute';


function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          </Routes>
        </Router>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
