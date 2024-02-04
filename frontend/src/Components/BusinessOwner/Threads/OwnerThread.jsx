import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  toast } from 'react-toastify';
const OwnerThread = () => {

   const[category,setCategory] = useState("");
   const[location,setlocation]= useState("");
   const[userid,setUserid]=useState("");
   const[replymsg,setReplymsg]=useState("");
   const[deliverystatus,setdeliverystaus] = useState("");

  useEffect(()=>{
    try{
      const userdata = JSON.parse(localStorage.getItem('userlogin'))
      setCategory(userdata.category);
      setlocation(userdata.location);
      setUserid(userdata._id);
    }
    catch(err){
      console.log(err);
    }
  },[])
  const [data, setData] = useState([]);


    const fetchData = async () => {
      const formdata={
        category:category,
        location:location
      }
      console.log(formdata);
      try {
        const response = await axios.post('http://localhost:5000/customer/getuserthreads',formdata);
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const threadreply= async(tid)=>{
      const threadreplydata={
        threads_id:tid,
        loginuser_id:userid,
        deliverystatus:1,
        replymessage:replymsg,
        deal:1
      }
      console.log(threadreplydata);
      try {
        const response = await axios.post('http://localhost:5000/customer/createthreadreply',threadreplydata);
        console.log(response.data);
        toast.success("Deal has been sent");
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }







  return (
    <>
    <center>
      <button onClick={fetchData} style={{border:"0", backgroundColor:"white"}}>Refresh <i class="fa fa-refresh"></i></button><br></br><br></br>
      <div>Refresh to get the Latest Responses</div><br></br><hr></hr>
    </center><br></br><br></br>
    <h2 style={{textAlign:"center"}}>My Threads</h2><br></br>
    <div className="container d-flex">
    {
      data.map((el,key)=>{
        return (
          <>
            <div className="card" style={{width: "18rem",marginRight:"20px"}}>
              <div className="card-body">
                <h5 className="card-title">{el.heading}</h5>
                <p className="card-text">Location: {el.location}<br></br>Bill : {el.bill}<br></br>Landmark: {el.landmark}</p>
                
                {el.image?
                <div className="col-md-4">
                    <img src={el.image} className="img-fluid rounded-start" alt="Image"/>
                  </div>:<></>}
                <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example3">Reply Message</label>
                    <input type="text" id="form3Example3" className="form-control"   onChange={(e)=>setReplymsg(e.target.value)} />
                    <select className='cpf1f2i'
                            id="category"
                            value={deliverystatus}
                            onChange={(e)=>setdeliverystaus(e.target.value)}
                            required
                            >
                  <option value="" disabled>Select a Category</option>
                  <option value="1">yes</option>
                  <option value="0">no</option>
              
                </select>
                </div>
                <a href="#" className="btn btn-danger" style={{marginRight:"10px"}}>Decline Order</a><a href="#" className="btn btn-success" onClick={()=>{ threadreply(el._id)}}>Make a deal</a>
              </div>
            </div>
          </>
        )
      })
    }
    </div>
    </>
    
  )
}

export default OwnerThread