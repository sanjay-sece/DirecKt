import 'react-toastify/dist/ReactToastify.css';
import Home from './Home'
import {BrowserRouter,Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import CustomerThread from './Components/Customer/customerThreads/CustomerThread';
import OwnerThread from './Components/BusinessOwner/Threads/OwnerThread';
import Loginuser from './Components/BusinessOwner/LoginOwner/LoginUser';
import Logincustomer from './Components/Customer/Login/LoginCustomer';
import Customernavbar from './Components/Customer/Customernavbar/Customernavbar';

import Threadresponse from './Components/Customer/Threadresponse/Threadresponse';
import Usernavbar from './Components/BusinessOwner/navbar/Usernavbar';
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}> 
    <div>
      <ToastContainer/>
      <BrowserRouter> 
        <Routes> 
          <Route path = "/" element={<Home/>}/>
          <Route path='/Logincustomer' element={<Logincustomer/>}></Route>
          <Route path='/Loginuser' element={<Loginuser/>}/>
          <Route path ='/customernavbar' element={<Customernavbar/>}>
          <Route path='CustomerThread' element={<CustomerThread/>}/>
          <Route path='Threadresponse' element={<Threadresponse/>}></Route>
          </Route>
          <Route path='/usernavbar' element ={<Usernavbar/>}>
          <Route path='OwnerThread' element={<OwnerThread/>}></Route>
          </Route>
        
        </Routes>
      </BrowserRouter>
  </div>
  </QueryClientProvider> 
  )
}
// Update paniruken - ELamparithi 
export default App
