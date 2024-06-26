import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Donation from "./Pages/Donation";
import CenterInfo from "./Pages/CentersInfo";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import PatientRegistration from "./Pages/PatientRegistration";
import DentistRegistration from "./Pages/DentistRegistration";
import TechnicianRegistration from "./Pages/TechnicianRegistration";
import { AuthProvider } from './AuthContext';

import PatientDashboard from "./Pages/PatientDashboard";
import TechnicianDashboard from "./Pages/TechnicianDashboard";
import AppointmentDetail from "./Pages/AppointmentDetail"
import PatientEditProfile from "./Pages/EditPatientProfile";
import MakeAppointment from "./Pages/MakeAppointment";
import RadiologyCenterAppointment from "./Pages/RadiologyCenterAppointment";
import MedicalRecord from "./Pages/MedicalRecords";


import PatientsHistory from "./Pages/PatientsHistory";
import DentistDashboard from "./Pages/DentistDashboard";
import EditProfileForm from "./Pages/EditDentistProfile";
import PatientAppointmentHistory from "./Pages/PatientAppointmentHistory";
import ImageShowcase from "./Pages/ImageShowcase";
import ImagingAppointment from "./Pages/ImagingAppointment";


const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/donation" element={<Donation />} />
                    <Route path="/centersinfo" element={<CenterInfo />} />
                    <Route path="/registerlogin" element={<Registration />} />
                    <Route path="/registerlogin/login" element={<Login />} />
                    <Route path="/registerlogin/patient" element={<PatientRegistration />} />
                    <Route path="/registerlogin/dentist" element={<DentistRegistration />} />
                    <Route path="/registerlogin/radiology" element={<TechnicianRegistration />} />
                    <Route path="/patientdashboard" element={<PatientDashboard />} />
                    <Route path="/patientdashboard/editpatientprofile" element={<PatientEditProfile />} />
                    <Route path="/patientdashboard/appointmentdetail" element={<AppointmentDetail />} />
                    <Route path="/appointment/:id" element={<AppointmentDetail />} />
                    <Route path="/appointment/patienthistory" element={<PatientAppointmentHistory />} />
                    <Route path="/patientdashboard/makeappointment" element={<MakeAppointment />} />
                    <Route path="/patientdashboard/radiologyappointment" element={<RadiologyCenterAppointment />} />
                    <Route path="/patientdashboard/imagingappointment" element={<ImagingAppointment />} />
                    <Route path="/patientdashboard/medicalrecord" element={<MedicalRecord />} />
                    <Route path="/dentistdashboard" element={<DentistDashboard />} />
                    <Route path="/dashboard" element={<DentistDashboard />} />
                    <Route path="/dentistdashboard/patientshistory" element={<PatientsHistory />} />
                    <Route path="/dentistdashboard/editdentistprofile" element={<EditProfileForm />} />
                    <Route path="/dentistdashboard/imageshowcase" element={<ImageShowcase />} />
                    <Route path="/techniciandashboard" element={<TechnicianDashboard />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
