import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <div className="homeouter" >
        <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed">
              <div className="container">
                <p className="navbar-brand fs-1 text-black">
                  <b style={{color:"darkblue"}}>Direc<span style={{color:"orange"}}>KT</span></b>
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
                      <li className="nav-item float-right" >
                          <button className="nav-link text-black" >List my Business</button>
                      </li>
                    </ul>
                    <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                      <button className="text-white px-3 py-2 rounded-1 border-0" style={{backgroundColor:"darkblue",boxShadow:"0 0 15px 0 #ccc"}}><a href='#login' style={{textDecoration:'none',color:'white'}}>Create a Thread</a> </button>
                    </div>
                  </div>
                </div>
              </div>
        </nav>
        <section>
            <div className="front">
              <div className="h1">
                  <h1 className="h11"  style={{fontSize:"100px",fontWeight:"bold"}}>We empower you</h1><h1 className="h12" style={{fontSize:"100px",fontWeight:"bold"}}>to change</h1><h1 className="h13" style={{fontSize:"100px",fontWeight:"bold"}}>the world</h1>
              </div>
              <div>
                  <p className="h1m">Now You can Find your Desired Product at your Finger Tips! Still Thinking about creating a Thread</p>
              </div>
              <div className="fbutton">
                  <button className="fbi1">Create Your Thread Now</button>
              </div>
            </div>
        </section>
        <section>
        <div className="f1" id='login'>
          <div className="row">
            <div className="col-lg-6 col-md-12 f1f1Home" >
              <h2 className="f1f1h2">For <span style={{color:'darkblue'}}><b>Shop Owners</b></span></h2>
              <p className="f1f1p">Boost your shop's efficiency and customer satisfaction with our project, helping you organize and showcase products for easy discovery and increased sales.</p>
              <button className="text-white px-3 py-2 rounded-1 border-0" style={{backgroundColor:'orange'}}><Link to='/Loginuser' style={{textDecoration:'none',color:'white'}}>Login</Link></button>
            </div>
            <div className="col-lg-6 col-md-12 f1f2Home">
              <h2 className="f1f1h2">For <span style={{color:'orange'}}><b>Customers</b></span></h2>
              <p className="f1f1p">Welcome to DirecKT Easily locate your desired products in the shop and enjoy a seamless shopping experience like never before.</p>
              <button className="text-white px-3 py-2 rounded-1 border-0" style={{backgroundColor:'darkblue'}}><Link to='/Logincustomer' style={{textDecoration:'none',color:'white'}}>Login</Link></button>
            </div>
          </div>
        </div>
        </section>
      </div>
    </>
  )
}

export default Home