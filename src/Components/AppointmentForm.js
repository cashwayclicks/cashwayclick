import { useEffect, useRef, useState } from "react";
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import SliderComponent from "../Pages/slider";
import { useNavigate  } from "react-router-dom";
import home from "./home.mp3"
function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [username, setusername] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [val, setval] = useState(900);
  const [valo, setvalo] = useState(77);
  const [childData, setChildData] = useState(2100);
  const [minms, setminm] = useState(2100);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  



  const handleChildData = (dataFromChild) => {
    setChildData(dataFromChild);
  };
  const handleNameChange = (e) => {
    e.preventDefault();
    setPatientName(e.target.value);
  };
  const handleidChange = (e) => {
    e.preventDefault();
    setusername(e.target.value);
  };

  const setpref = (e) => {
    e.preventDefault();
    setPreferredMode(e.target.value);
  };


  useEffect(() => {
    audioRef.current = new Audio(home); 
    const playAudio = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Error playing the audio:', error);
      }
    };
    playAudio();

    // Clean up function to stop the audio when the component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(!isPlaying);
    }
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const allls= "Client name : " + patientName + "\n client username: " + username +"\n client time: " + appointmentTime +"\n client course: " + patientGender +"\n client price: " + childData  + "\n client Batch: "+ preferredMode;


    const webhookUrl = "https://discordapp.com/api/webhooks/1255908211601703004/1jM3LEzTu25bTOY48y6xDKtJO-U8ZkKSz8O9jXS5X-df4RdFOVvXiOerG2HJQq6zxvEO";
    const payload = {
      content: allls

    };
    const headers = {
      Authorization: "MTE4NDE1OTI4NjE3NjI2ODM1OA.GoRXyJ.w_Oqd6Wj40SwZ2JUrZdBUlMhCkrexxE0gpJAKw"
  };
    try {
       fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers
      },
        body: JSON.stringify(payload),
      });
      alert('your slot is shortlisted proceed for payment !');
    } catch (error) {
      console.error('Error handling request:', error);
    }
    
    navigate("/payment");
  ;


    // Validate form inputs
    const errors = {};
    

    // Reset form fields and errors after successful submission
    setPatientName("");
    setPatientNumber("");
    setPatientGender("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setFormErrors({});

    toast.success("Application Sent to Cashway!", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Cashway Batch Form <span className="legal-siteSign">💸</span>
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Enter details carefully  </span>
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          <button className="text-appointment-btn" onClick={handleStop}> stop🎵</button>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>

        {(patientGender==="1")&&<SliderComponent valb={7399}  onDataUpdate={handleChildData} minm={2199} />}
          {(patientGender==="2")&&<SliderComponent valb={6520}  onDataUpdate={handleChildData} minm={1850} />}
          {(patientGender==="3")&&<SliderComponent valb={4300}  onDataUpdate={handleChildData} minm={1230} />}
          {(patientGender==="4")&&<SliderComponent valb={2600}  onDataUpdate={handleChildData} minm={745} />}
          {(patientGender==="5")&&<SliderComponent valb={2600}  onDataUpdate={handleChildData} minm={745} />}
          {(patientGender==="6")&&<SliderComponent valb={3600}  onDataUpdate={handleChildData} minm={1030} />}
          <br />
          <br />
          <label>
            Full Name :
            <input
              type="text"
              value={patientName}
              onChange={handleNameChange}
              required
            />
            {formErrors.patientName && <p className="error-message">{formErrors.patientName}</p>}
          </label>

          <br />
          
          <label>
            Enter cashway id (if not there Enter instagram username):
            <input
              type="text"
              value={username}
              onChange={handleidChange }
              required
            />
              </label>
              
          <br />
        
          <label>
            select course:
            <select
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="1">Web Flow Recursion</option>
              <option value="2">Lead Flipping</option>
              <option value="3">Job marketing</option>
              <option value="4">web development</option>
              <option value="5">app development</option>
              <option value="6">Trading fundamentals</option>
            </select>
            {formErrors.patientGender && <p className="error-message">{formErrors.patientGender}</p>}
          </label>
         


          <label>
  Selected Price:
  <input
    type="text"
    value={childData}
    onChange={(e) => setPatientNumber({childData})}
    required
  />
  {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
</label>


<br /><br />

      

        
          <label>
          provide the date you will be available to work : starting date
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
          </label>
          <label>
          provide the date you plan to Leave : minimum Five Months Required 
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
          </label>

           <br /> 

          
         
          <br />
          <label>
            Select the batch :
            <select
              value={preferredMode}
              onChange={setpref}
              required
            >
              <option value="default">Select</option>
              <option value="voice">morning batch 9.00 - 12.00</option>
              <option value="video">afternoon batch 12-00 - 3.00</option>
              <option value="video">evening batch 4.30 - 7.30</option>
              <option value="video">night batch 8.00 - 11.00</option>
            </select>
            {formErrors.preferredMode && <p className="error-message">{formErrors.preferredMode}</p>}
          </label>

          <br />
          <br />
          
         
          <button type="submit"  className="text-appointment-btn">
          
          Confirm Slot And proceed to Payment section 🟢
          
          
          </button>

          <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>details has been sent to the cashwayclicks team via webhooks.</p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2020-2024 cashway+. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
