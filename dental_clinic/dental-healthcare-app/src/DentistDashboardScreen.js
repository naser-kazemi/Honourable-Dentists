import React from 'react';

const DentistDashboardScreen = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <header className="w-full bg-white shadow-md py-4">
                <div className="flex items-center justify-center">
                    <img src="profile.jpg" alt="Profile" className="w-12 h-12 rounded-full mr-4"/>
                    <h2 className="text-xl font-semibold">Dr. Smith</h2>
                </div>
            </header>
            <main className="w-full p-4">
                <section className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Today's Appointments</h3>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p>John Doe - 10:00 AM</p>
                    </div>
                </section>
                <section className="mb-8">
                    <button className="w-full py-3 bg-blue-500 text-white rounded-md">View Patient Histories</button>
                </section>
                <section>
                    <h3 className="text-lg font-semibold mb-4">Notifications</h3>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p>New patient booking</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default DentistDashboardScreen;
