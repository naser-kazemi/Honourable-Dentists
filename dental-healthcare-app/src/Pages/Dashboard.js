import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PatientDashboard from './PatientDashboard';
import DentistDashboard from './DentistDashboard'; // Assuming you have a DentistDashboard component
import TechnicianDashboard from './TechnicianDashboard'; // Assuming you have a TechnicianDashboard component

function Dashboard() {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    const userType = localStorage.getItem('user_type');

    // check if the user is authenticated
    useEffect(() => {
        if (!token) {
            navigate('/registerlogin/login');
        }
    }, []);

    // render the appropriate dashboard based on the user type

    console.log('User type:', userType);


    switch (userType) {
        case 'patient':
            return <PatientDashboard />;
        case 'dentist':
            return <DentistDashboard />;
        case 'technician':
            return <TechnicianDashboard />;
        default:
            return null;
    }
}

export default Dashboard;
