import React from 'react';

const PatientDashboardScreen = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <header className="w-full bg-white shadow-md py-4">
                <div className="flex items-center justify-center">
                    <img src="../resources/profile.jpg" alt="Profile" className="w-12 h-12 rounded-full mr-4"/>
                    <h2 className="text-xl font-semibold">John Doe</h2>
                </div>
            </header>
            <main className="w-full p-4">
                <section className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Upcoming Appointments</h3>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p>Dr. Smith - 10:00 AM, 20th June</p>
                    </div>
                </section>
                <section className="mb-8">
                    <div className="flex justify-around">
                        <button className="w-1/3 py-3 bg-blue-500 text-white rounded-md">Book Appointment</button>
                        <button className="w-1/3 py-3 bg-blue-500 text-white rounded-md">View History</button>
                        <button className="w-1/3 py-3 bg-blue-500 text-white rounded-md">Update Profile</button>
                    </div>
                </section>
                <section>
                    <h3 className="text-lg font-semibold mb-4">Notifications</h3>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p>Upcoming appointment reminder</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default PatientDashboardScreen;
