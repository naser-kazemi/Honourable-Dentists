import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Donation from "./Pages/Donation";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import PatientRegistration from "./Pages/PatientRegistration";
import DentistRegistration from "./Pages/DentistRegistration";
import TechnicianRegistration from "./Pages/TechnicianRegistration";
import {AuthProvider} from './AuthContext';
import PatientDashboard from "./Pages/PatientDashboard";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/donation" element={<Donation/>}/>
                    <Route path="/registerlogin" element={<Registration/>}/>
                    <Route path="/registerlogin/login" element={<Login/>}/>
                    <Route path="/registerlogin/patient" element={<PatientRegistration/>}/>
                    <Route path="/registerlogin/dentist" element={<DentistRegistration/>}/>
                    <Route path="/registerlogin/radiology" element={<TechnicianRegistration/>}/>
                    <Route path="/patientdashboard" element={<PatientDashboard/>}/>
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
