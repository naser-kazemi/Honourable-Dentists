import React from 'react';

const ServiceManagementScreen = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <header className="w-full bg-white shadow-md py-4">
                <h2 className="text-xl font-semibold text-center">Current Appointment</h2>
            </header>
            <main className="w-full p-4">
                <section className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Patient Information</h3>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p><strong>Name:</strong> John Doe</p>
                        <p><strong>Age:</strong> 30</p>
                        <p><strong>Problem:</strong> Toothache</p>
                    </div>
                </section>
                <section className="mb-8">
                    <label className="block mb-4">
                        <span className="block text-right mb-1">Examination Notes:</span>
                        <textarea className="w-full px-3 py-2 border rounded-md" rows="4"></textarea>
                    </label>
                </section>
                <section className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Service Options</h3>
                    <label className="block mb-2">
                        <input type="checkbox" className="mr-2"/> Filling
                    </label>
                    <label className="block mb-2">
                        <input type="checkbox" className="mr-2"/> Cleaning
                    </label>
                </section>
                <button className="w-full py-3 bg-blue-500 text-white rounded-md mb-4">Suggest Radiology Center</button>
                <section>
                    <label className="block mb-4">
                        <span className="block text-right mb-1">Upload X-ray:</span>
                        <input type="file" className="w-full px-3 py-2 border rounded-md"/>
                    </label>
                </section>
            </main>
        </div>
    );
};

export default ServiceManagementScreen;
