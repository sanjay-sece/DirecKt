import React, { useState ,useEffect} from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import{FaUserCircle} from 'react-icons/fa';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import axios from 'axios';

const Usernavbar = () => {
    const [userdetails,setuserDetails] = useState(null);
    const navigate = useNavigate();
    const [shopstatus,setShopstatus]=useState(Boolean);
    const [id,setId] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
          const formdata = {
              _id:id,
              availabilitystatus: shopstatus
          };
  
          try {
              const response = await axios.post("http://localhost:5000/user/availabilitystatus", formdata);
              console.log(response.data);
          } catch (err) {
              console.error(err);
          }
      };
  
      fetchData();
  }, [shopstatus]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userdata = await JSON.parse(localStorage.getItem('userlogin'));
        console.log(userdata._id)
        setShopstatus(userdata.availabilitystatus)
        setId(userdata._id);
        if (userdata) {
          setuserDetails(userdata);
          console.log(userdetails)
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchData(); // Call the fetchData function immediately
  
    // Ensure that the useEffect runs only on the initial render by having an empty dependency array
  }, []);
  
  
    function handlelogout(e){
      e.preventDefault();
      localStorage.removeItem('userlogin');
      navigate('/');
    }

const label = { inputProps: { 'aria-label': 'Color switch demo' } };
    return (
      <>
      {userdetails?
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
                    <div style={{marginTop:"10px"}}>
                    {
                    shopstatus ? <p>Shop is Open</p> :<p>Shop is closed</p>
                    } 
                    </div>
                    <Switch
  {...label}
  checked={shopstatus}
  onChange={(event) => {
    setShopstatus(event.target.checked);
  }}
  color="success"
/>


                      <button className="text-white px-3 py-2 rounded-1 border-0" style={{backgroundColor:"white",boxShadow:"0 0 15px 0 #ccc"}}><Link  style={{textDecoration:"none",color:"black"}}  to ="OwnerThread">View My Threads</Link></button>
                      <p style={{textDecoration:"none",display:"flex",flexDirection:"row",marginTop:"10px"}} ><FaUserCircle style={{marginTop:"5px"}} /> <span>&nbsp;{userdetails.name}</span></p>
                      <p className='navbarp1' style={{textDecoration:"none",marginTop:"10px"}} onClick={handlelogout}>Logout</p>
                    </div>
                  </div>
                </div>
              </div>
      </nav>
      <Outlet />
      </div>:<>404 data not found</>}
      </>
    )
  }

export default Usernavbar;