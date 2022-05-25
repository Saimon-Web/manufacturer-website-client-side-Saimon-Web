import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Home/Header';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import ProductDetails from './Pages/Home/ProductDetails';
import RequireAuth from './hooks/RequireAuth';
import Dashboard from './Pages/Dashbord/Dashboard';
import Myorder from './Pages/Dashbord/Myorder';
import Addreview from './Pages/Dashbord/Addreview';
import Myprofile from './Pages/Dashbord/Myprofile';
import Addproduct from './Pages/Dashbord/Addproduct';
import Manageproduct from './Pages/Dashbord/Manageproduct';
import Makeadmin from './Pages/Dashbord/Makeadmin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAdmin from './hooks/RequireAdmin';
import Allorder from './Pages/Dashbord/Allorder';
import Notfound from './Pages/Notfound/Notfound';
import Purchase from './Pages/Home/Purchase';
import Portfolio from './Pages/Portfolio/Portfolio';
import Blog from './Pages/Blog/Blog';
import Payment from './Pages/Payment';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/signin' element={<Login></Login>}> </Route>
        <Route path='/register' element={<Register></Register>}> </Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}> </Route>
        <Route path='/blog' element={<Blog></Blog>}> </Route>
        <Route path='*' element={<Notfound></Notfound>}> </Route>
            
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
        <Route index  element={<Myprofile></Myprofile>}></Route>
          <Route path='myorder' element={<Myorder></Myorder>}></Route>
          <Route path='myreview' element={<Addreview></Addreview>}></Route>
         
          <Route path='addproduct' element={<RequireAdmin><Addproduct></Addproduct></RequireAdmin>}></Route>
          <Route path='allorder' element={<RequireAdmin><Allorder></Allorder></RequireAdmin>}></Route>
          <Route path='manageproduct' element={<RequireAdmin><Manageproduct></Manageproduct></RequireAdmin>}></Route>
          <Route path='makeadmin' element={<RequireAdmin><Makeadmin></Makeadmin></RequireAdmin>}></Route>
           </Route>
        <Route path='/product/:id' element={
          <RequireAuth>
        
          <Purchase> </Purchase>
          </RequireAuth>
        }> </Route>
        
        <Route path='/order/:id' element={
          <RequireAuth>
           <Payment></Payment>
          </RequireAuth>
        }> </Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
