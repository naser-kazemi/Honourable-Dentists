import React, {useState} from 'react';

const HistoryRecordsScreen = () => {
    const [activeTab, setActiveTab] = useState('appointments');

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <header className="w-full bg-white shadow-md py-4">
                <h2 className="text-xl font-semibold text-center">History & Records</h2>
            </header>
            <main className="w-full p-4">
                <nav className="w-full flex justify-around mb-4">
                    <button
                        className={`w-1/2 py-2 ${activeTab === 'appointments' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setActiveTab('appointments')}
                    >
                        Appointments
                    </button>
                    <button
                        className={`w-1/2 py-2 ${activeTab === 'services' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setActiveTab('services')}
                    >
                        Services
                    </button>
                </nav>
                <section className="w-full">
                    {activeTab === 'appointments' && (
                        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                            <p><strong>Date:</strong> 20th June</p>
                            <p><strong>Service:</strong> Filling</p>
                        </div>
                    )}
                    {activeTab === 'services' && (
                        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                            <p><strong>Date:</strong> 15th June</p>
                            <p><strong>Service:</strong> Cleaning</p>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
};

export default HistoryRecordsScreen;
