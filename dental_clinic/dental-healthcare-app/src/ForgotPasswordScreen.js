import React from 'react';

const ForgotPasswordScreen = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-8">فراموشی رمز عبور</h1>
                <button className="w-80 py-3 bg-blue-500 text-white rounded-md">بازنشانی رمز عبور</button>
            </div>
        </div>
    );
};

export default ForgotPasswordScreen;
