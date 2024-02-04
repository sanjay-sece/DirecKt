import React, { useState ,useEffect} from 'react'
import "./Customernavbar.css"
import { Link, Outlet, useNavigate } from 'react-router-dom';
import{FaUserCircle} from 'react-icons/fa'

const Customernavbar = () => {
    const [userdetails,setuserDetails] = useState(null);
    const navigate = useNavigate();
    
    useEffect(()=>{
      try{
      const userdata = JSON.parse(localStorage.getItem('customerLogin'));
       
      setuserDetails(userdata);  
      console.log(userdetails);
     
    }
      catch(err){
        console.log(err);
      }
    },[]);
  
    function handlelogout(e){
      e.preventDefault();
      localStorage.removeItem('customerLogin');
      navigate('/');
    }
    return (
      <>
      {userdetails?
      <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed">
              <div className="container">
                <p className="navbar-brand fs-1 text-black">
                  
                  <Link to='/' style={{textDecoration:"none"}}><b style={{color:"darkblue"}}>Direc<span style={{color:"orange"}}>KT</span></b></Link>
                </p>
                <button className="navbar-toggler shadow-none color-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" style={{color: "black"}}>
                  <span className="navbar-toggler-icon" style={{color:"black"}}>
                      <i class="bi bi-list" style={{color:"black"}}></i>
                  </span>
                </button>
                <div className="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  <div className="offcanvas-header text-black border-bottom">
                    <h5 className="offcanvas-title fs-1" id="offcanvasNavbarLabel"><b style={{color:"darkblue"}}>Direc<span style={{color:"orange"}}>KT</span></b></h5>
                    <button type="button" className="btn-close btn-close-dark shadow-none" data-bs-dismiss="offcanvas" aria-label="Close">

                    </button>
                  </div>
                  <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                    <ul className="navbar-nav flex-grow-1 ">
                      <li className="nav-item">
                          <button className="nav-link mx-2 text-black">About Us</button>
                      </li>
                    </ul>
                    <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                      <button className="text-white px-3 py-2 rounded-1 border-0" style={{backgroundColor:"darkblue",boxShadow:"0 0 15px 0 #ccc"}}><Link  style={{textDecoration:"none",color:"white"}}  to ="CustomerThread">Create a thread</Link> </button>
                      <button className="text-white px-3 py-2 rounded-1 border-0" style={{backgroundColor:"white",boxShadow:"0 0 15px 0 #ccc"}}><Link  style={{textDecoration:"none",color:"black"}}  to ="Threadresponse">View Response</Link></button>
                      <p style={{textDecoration:"none",display:"flex",flexDirection:"row",marginTop:"10px"}} ><FaUserCircle style={{marginTop:"5px"}} /> <span>&nbsp;{userdetails.name}</span></p>
                      <p className='navbarp1' style={{textDecoration:"none",marginTop:"10px"}} onClick={handlelogout}>Logout</p>
                    </div>
                  </div>
                </div>
              </div>
        </nav>
      </div>
      <Outlet />
      </div>:<>404 data not found</>}
      </>
    )
  }

export default Customernavbar