import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  toast } from 'react-toastify';

const Threadresponse = () => {

    const [data, setData] = useState([]);
    const [email,setemail]=useState("");

    useEffect(()=>{
        try{
          const fetch = async()=>{
        const userdata = JSON.parse(localStorage.getItem('customerLogin'));
        console.log(userdata.email);
        setemail(userdata.email);
          }
        fetch();
      }
        catch(err){
          console.log(err);
        }
      
    },[]);

    const fetchData = async (e) => {
        e.preventDefault();
        const formdata={
          email:email
        }

      try {
      
        const response = await axios.post('http://localhost:5000/customer/getreplydata',formdata);
        console.log(response.data)
        setData(response.data.result);
        console.log(data)
   
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    function orderconfirm(){
      toast.success("Order Confirmed")
    }

  return (
    <>
    <center>
      <button onClick={fetchData} style={{border:"0", backgroundColor:"white"}}>Refresh <i class="fa fa-refresh"></i></button><br></br><br></br>
      <div>Refresh to get the Latest Responses</div><br></br><hr></hr>
    </center><br></br><br></br>
    
    <h2 style={{textAlign:"center"}}>Latest Responses</h2><br></br>
    <div className="container">
    {/* {
      data.map((el)=>{
        return (
          <>
            <div className="card" style={{width: "18rem",marginRight:"20px"}}>
              <div className="card-body">
                <h5 className="card-title">{el.loginuser_id.businessname}</h5>
                <p className="card-text">delivery Status: {el.deliverystatus}<br></br>replymessage : {el.replymessage}</p>
               <a href="#" className="btn btn-success" onClick={orderconfirm}>Confirm Order</a>
              </div>
            </div>
          </>
        )
      })
    } */}
    { <div>
      {data.map((item, index) => (
        
        <div key={index} className='card mb-5' style={{borderRadius:"15px"}}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center  h-100">
              <div className="col col-xl-10">
              <h4>Thread</h4>
              <div className="card mb-5" >
                <div className="row g-0">
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="card-title">{item.heading}</h4>
                      <p className="card-text"> <strong>Bill: </strong>{item.bill}</p>
                      <p className="card-text"> <strong>Category: </strong> <small className="text-muted">{item.category}</small></p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img src={item.image} className="img-fluid rounded-start" alt="Image"/>
                  </div>
                </div>
              </div>
              <div>
                <h4>Threads Reply:</h4>
                {item.threadsreply.map((reply, replyIndex) => (
                  <div key={replyIndex}>
                    <div className="card mb-5" style={{borderRadius:"15px"}}>
                      <div className="card-body p-4">
                          <h2 className="mb-3">{reply.loginuser_id.businessname}</h2>
                          <p className="small mb-0">Delivery Status : {reply.deliverystatus.toString()==='true'?<span style={{color:"#16FF00"}}><b>True</b></span>:<span style={{color:"red"}}><b>False</b></span>}<span className="mx-2">|</span> Reply Message: 
                          <strong> {reply.replymessage}</strong><span className="mx-2">|</span>Deal : {reply.deal.toString()==='true'?<span style={{color:"#16FF00"}}><b>True</b></span>:<span style={{color:"red"}}><b>False</b></span>}</p>
                        </div>
                    </div>
                  </div>
                ))}
              </div>           
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>}
    </div>
    </>
  )
}

export default Threadresponse
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import {  toast } from 'react-toastify';

// const Threadresponse = () => {

//     const [data, setData] = useState([]);
//     const [email,setemail]=useState("");

//     useEffect(()=>{
//         try{
//           const fetch = async()=>{
//         const userdata = JSON.parse(localStorage.getItem('customerLogin'));
//         console.log(userdata.email);
//         setemail(userdata.email);
//           }
//         fetch();
//       }
//         catch(err){
//           console.log(err);
//         }
      
//     },[]);

//     const fetchData = async (e) => {
//         e.preventDefault();
//         const formdata={
//           email:email
//         }

//       try {
      
//         const response = await axios.post('http://localhost:5000/customer/getreplydata',formdata);
//         console.log(response.data)
//         setData(response.data.result);
//         console.log(data)
   
        
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     function orderconfirm(){
//       toast.success("Order Confirmed")
//     }

//   return (
//     <>
//     <center>
//       <button onClick={fetchData} style={{border:"0", backgroundColor:"white"}}>Refresh <i class="fa fa-refresh"></i></button><br></br><br></br>
//       <div>Refresh to get the Latest Responses</div><br></br><hr></hr>
//     </center><br></br><br></br>
    
//     <h2 style={{textAlign:"center"}}>Latest Responses</h2><br></br>
//     <div className="container">
//     {/* {
//       data.map((el)=>{
//         return (
//           <>
//             <div className="card" style={{width: "18rem",marginRight:"20px"}}>
//               <div className="card-body">
//                 <h5 className="card-title">{el.loginuser_id.businessname}</h5>
//                 <p className="card-text">delivery Status: {el.deliverystatus}<br></br>replymessage : {el.replymessage}</p>
//                <a href="#" className="btn btn-success" onClick={orderconfirm}>Confirm Order</a>
//               </div>
//             </div>
//           </>
//         )
//       })
//     } */}
//     { <div>
//       {data.map((item, index) => (
        
//         <div key={index}>
//           <div className="container py-5 h-100">
//             <div className="row d-flex justify-content-center  h-100">
//               <div className="col col-xl-10">
//               {/* <p>Image: {item.image}</p> */}
//               <p>Heading: {item.heading}</p>
//               <p>Bill: {item.bill}</p>
//               <p>Category: {item.category}</p>
//               <div>
//                 <p>Threads Reply:</p>
//                 {item.threadsreply.map((reply, replyIndex) => (
//                   <div key={replyIndex}>
//                     <div className="card mb-5" style={{borderRadius:"15px"}}>
//                       <div className="card-body p-4">
//                           <h2 className="mb-3">{reply.loginuser_id.businessname}</h2>
//                           <p className="small mb-0">Delivery Status : {reply.deliverystatus.toString()}<span className="mx-2">|</span> Reply Message: 
//                           <strong> {reply.replymessage}</strong><span className="mx-2">|</span>Deal : {reply.deal.toString()}<span className="mx-2">|</span>{reply.loginuser_id.availabilitystatus?<>Shop is opened</>:<>Shop is closed</>}</p>
//                         </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>           
//             </div>
//           </div>
//         </div>
//       </div>
//       ))}
//     </div>}
//     </div>
//     </>
//   )
// }

// export default Threadresponse;
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import {  toast } from 'react-toastify';

// const Threadresponse = () => {

//     const [data, setData] = useState([]);
//     const [email,setemail]=useState("");

//     useEffect(()=>{
//         try{
//           const fetch = async()=>{
//         const userdata = JSON.parse(localStorage.getItem('customerLogin'));
//         console.log(userdata.email);
//         setemail(userdata.email);
//           }
//         fetch();
//       }
//         catch(err){
//           console.log(err);
//         }
      
//     },[]);

//     const fetchData = async (e) => {
//         e.preventDefault();
//         const formdata={
//           email:email
//         }

//       try {
      
//         const response = await axios.post('http://localhost:5000/customer/getreplydata',formdata);
//         console.log(response.data)
//         setData(response.data.result);
//         console.log(data)
   
        
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     function orderconfirm(){
//       toast.success("Order Confirmed")
//     }

//   return (
//     <>
//     <center>
//       <button onClick={fetchData} style={{border:"0", backgroundColor:"white"}}>Refresh <i class="fa fa-refresh"></i></button><br></br><br></br>
//       <div>Refresh to get the Latest Responses</div><br></br><hr></hr>
//     </center><br></br><br></br>
    
//     <h2 style={{textAlign:"center"}}>Latest Responses</h2><br></br>
//     <div className="container d-flex">
//     {/* {
//       data.map((el)=>{
//         return (
//           <>
//             <div className="card" style={{width: "18rem",marginRight:"20px"}}>
//               <div className="card-body">
//                 <h5 className="card-title">{el.loginuser_id.businessname}</h5>
//                 <p className="card-text">delivery Status: {el.deliverystatus}<br></br>replymessage : {el.replymessage}</p>
//                <a href="#" className="btn btn-success" onClick={orderconfirm}>Confirm Order</a>
//               </div>
//             </div>
//           </>
//         )
//       })
//     } */}
//     { <div>
//       {data.map((item, index) => (
//          <div key={index}>
//           <p>Image: {item.image}</p>
//           <p>Heading: {item.heading}</p>
//           <p>Bill: {item.bill}</p>
//           <p>Category: {item.category}</p>
//           <div>
//             <p>Threads Reply:</p>
//             {item.threadsreply.map((reply, replyIndex) => (
//               <div key={replyIndex}>
//                 <p>Business name: {reply.loginuser_id.businessname}</p>
//                 <p>Delivery Status: {reply.deliverystatus.toString()}</p>
//                 <p>Reply Message: {reply.replymessage}</p>
//                 <p>Deal: {reply.deal.toString()}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>}
//     </div>
//     </>
//   )
// }

// export default Threadresponse;  