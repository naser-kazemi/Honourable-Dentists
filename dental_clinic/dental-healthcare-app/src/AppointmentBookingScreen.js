import React from 'react';

const AppointmentBookingScreen = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <header className="w-full bg-white shadow-md py-4">
                <h2 className="text-xl font-semibold text-center">Book Appointment</h2>
            </header>
            <main className="w-full p-4">
                <form className="bg-white p-6 rounded-lg shadow-md w-80 mx-auto">
                    <label className="block mb-4">
                        <span className="block text-right mb-1">Date:</span>
                        <input type="date" className="w-full px-3 py-2 border rounded-md"/>
                    </label>
                    <label className="block mb-4">
                        <span className="block text-right mb-1">Time:</span>
                        <input type="time" className="w-full px-3 py-2 border rounded-md"/>
                    </label>
                    <label className="block mb-4">
                        <span className="block text-right mb-1">Problem Description:</span>
                        <textarea className="w-full px-3 py-2 border rounded-md" rows="4"></textarea>
                    </label>
                    <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-md">Confirm</button>
                </form>
            </main>
        </div>
    );
};

export default AppointmentBookingScreen;
