import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllEmploy from './Pages/Dashboard/AllEmploy';
import Dashboard from './Pages/Dashboard/Dashboard';
import Record from './Pages/Dashboard/Record';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>

        {/* nested route */}
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<Record/>}></Route>
          <Route path="allEmploy" element={<AllEmploy/> }></Route>
        </Route>

        {/* login section */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />


        {/* not found page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
