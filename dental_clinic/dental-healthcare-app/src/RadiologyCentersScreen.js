import React from 'react';

const RadiologyCentersScreen = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <header className="w-full bg-white shadow-md py-4">
                <h2 className="text-xl font-semibold text-center">Radiology Centers</h2>
            </header>
            <main className="w-full p-4">
                <section className="w-full mb-8">
                    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-lg font-semibold">Center Name</h3>
                        <p><strong>Distance:</strong> 2 miles</p>
                        <p><strong>Contact:</strong> 123-456-7890</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-lg font-semibold">Another Center</h3>
                        <p><strong>Distance:</strong> 5 miles</p>
                        <p><strong>Contact:</strong> 987-654-3210</p>
                    </div>
                </section>
                <button className="w-full py-3 bg-blue-500 text-white rounded-md">Book Appointment</button>
            </main>
        </div>
    );
};

export default RadiologyCentersScreen;
