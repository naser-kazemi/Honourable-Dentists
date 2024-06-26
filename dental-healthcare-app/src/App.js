import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import PatientRegistration from "./Pages/PatientRegistration";
import DentistRegistration from "./Pages/DentistRegistration";
import { AuthProvider } from './AuthContext';

import PatientDashboard from "./Pages/PatientDashboard";
import AppointmentDetail from "./Pages/AppointmentDetail"
import PatientEditProfile from "./Pages/EditProfile";
import MakeAppointment from "./Pages/MakeAppointment";
import RadiologyCenterAppointment from "./Pages/RadiologyCenterAppointment";
import MedicalRecord from "./Pages/MedicalRecords";


import PatientsHistory from "./Pages/PatientsHistory";
import DentistDashboard from "./Pages/DentistDashboard";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/registerlogin" element={<Registration />} />
                    <Route path="/registerlogin/login" element={<Login />} />
                    <Route path="/registerlogin/patient" element={<PatientRegistration />} />
                    <Route path="/registerlogin/dentist" element={<DentistRegistration />} />
                    <Route path="/registerlogin/radiology" element={<Login />} />
                    <Route path="/patientdashboard" element={<PatientDashboard />} />
                    <Route path="/patientdashboard/editprofile" element={<PatientEditProfile />} />
                    <Route path="/patientdashboard/appointmentdetail" element={<AppointmentDetail />} />
                    <Route path="/patientdashboard/makeappointment" element={<MakeAppointment />} />
                    <Route path="/patientdashboard/radiologyappointment" element={<RadiologyCenterAppointment />} />
                    <Route path="/patientdashboard/medicalrecord" element={<MedicalRecord />} />
                    <Route path="/dentistdashboard" element={<DentistDashboard />} />
                    <Route path="/dentistdashboard/patientshistory" element={<PatientsHistory />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
