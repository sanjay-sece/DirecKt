import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import {  toast } from 'react-toastify';
import './CustomerThread.css'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from '../customerThreads/firebase';
import { v4 } from "uuid";

const CustomerThread = () => {
 
  const [imageUrl,setImageUrl]= useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [heading, setHeading] = useState('');
  const [bill, setBill] = useState('');
  const [landmark, setLandmark] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

 const [imageUpload, setImageUpload] = useState(null);
 

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
   
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url)
        setImageUrl(url)
      });
    });
  };
  
  useEffect(()=>{
    try{
    const userdata = JSON.parse(localStorage.getItem('customerLogin'));
    console.log(userdata._id)
    setEmail(userdata.email);
  }
    catch(err){
      console.log(err);
    }
  },[]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        location: location,
        email: email,
        image: imageUrl,
        heading: heading,
        bill: bill,
        landmark: landmark,
        category: category,
      };
      console.log(data);
      const response = await axios.post('http://localhost:5000/customer/createthreads', data);
      console.log('Response:', response.data);
      localStorage.setItem('currentThreadId',JSON.stringify(response.data));
      toast.success("Thread Created Successfully"); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

    return (
      <>
    
    <form onSubmit={handleSubmit}>
    <section className="background-radial-gradient overflow-hidden">
  
      <div className="container-fluid px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{zIndex: "10"}}>
            <h1 className="my-5 display-4 fw-bold ls-tight" style={{color: "hsl(218, 81%, 95%)"}}>
              The best offer <br />
              <span style={{color: "white"}}>for your business</span>
            </h1>
            <p className="mb-4 opacity-70" style={{color: "hsl(218, 81%, 85%)"}}>
            Fostering Interaction, Amplifying Dialogue, Empowering Engagement. Experience the Power of Threads.
            Connect, Communicate, Collaborate: Threads at Your Service
            </p>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">Location</label>
                        <input type="text" id="form3Example1" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)}/>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">Choose Image</label>
                        <input type="file" id="form3Example2" className="form-control"  onChange={(event) => {
                         setImageUpload(event.target.files[0]);
                       }} />
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example3">Heading</label>
                    <input type="text" id="form3Example3" className="form-control"  value={heading} onChange={(e) => setHeading(e.target.value)} />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example4">Bill Items</label>
                    <textarea id="form3Example4" className="form-control" value={bill} onChange={(e) => setBill(e.target.value)}/>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example3">Landmark</label>
                    <input type="text" id="form3Example3" className="form-control" value={landmark} onChange={(e) => setLandmark(e.target.value)}/>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-4">
                    <label className="form-check-label" for="form2Example33">
                      Category  - 
                    </label>
                  <select className='cpf1f2i'
                            id="category"
                            value={category}
                            onChange={(e)=>setCategory(e.target.value)}
                            required
                            >
                  <option value="" disabled>Select a Category</option>
                  <option value="clothing">Clothing</option>
                  <option value="electronics">Electronics</option>
                  <option value="groceries">Groceries</option>
                  <option value="furniture">Furniture</option>
                  <option value="books">Books</option>
                  <option value="plumbing">plumbing</option>
                  <option value="sports">Sports Equipment</option>
                  <option value="medicine">medicine</option>
                </select>
                  </div>

                  <button type="submit" value="Submit" className="btn btn-primary btn-block mb-4" onClick={uploadFile}>
                    Create a Thread
                  </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </form>
    
      </>
    );
}

export default CustomerThread

// import React, { useState, useEffect } from 'react';

// const CustomerThread = () => {
//     const [message, setMessage] = useState('');
//     const [deletionMinutes, setDeletionMinutes] = useState(0);
//     const [deletionSeconds, setDeletionSeconds] = useState(10);
//     const [isMessageVisible, setIsMessageVisible] = useState(false);
  
//     useEffect(() => {
//       let timer;
  
//       if (isMessageVisible) {
//         const totalDeletionTime = deletionMinutes * 60 + deletionSeconds;
//         timer = setTimeout(() => {
//           setIsMessageVisible(false);
//           setMessage('');
//         }, totalDeletionTime * 1000);
//       }
  
//       return () => {
//         clearTimeout(timer);
//       };
//     }, [isMessageVisible, deletionMinutes, deletionSeconds]);
  
//     const handleCreateMessage = () => {
//       if (message.trim() !== '') {
//         setIsMessageVisible(true);
//       }
//     };
  
//     return (
//       <div>
//         <h1>Auto-Delete Message</h1>
//         <div>
//           <input
//             type="text"
//             placeholder="Enter your message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//           <button onClick={handleCreateMessage}>Create Message</button>
//         </div>
//         <div>
//           <label>Set Deletion Time:</label>
//           <input
//             type="number"
//             placeholder="Minutes"
//             value={deletionMinutes}
//             onChange={(e) => setDeletionMinutes(e.target.value)}
//           />
//           <span> : </span>
//           <input
//             type="number"
//             placeholder="Seconds"
//             value={deletionSeconds}
//             onChange={(e) => setDeletionSeconds(e.target.value)}
//           />
//         </div>
//         {isMessageVisible && (
//           <div className="message">
//             <p>{message}</p>
//             <p>
//               Will be deleted in {deletionMinutes} minutes {deletionSeconds} seconds
//             </p>
//           </div>
//         )}
//       </div>
//     );
// }

// export default CustomerThread