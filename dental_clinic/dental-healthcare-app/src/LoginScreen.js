import React from 'react';

const LoginScreen = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col items-center">
                <div className="text-4xl mb-4">🔵</div>
                <h1 className="text-2xl font-bold mb-8">ورود</h1>
                <div className="w-80 mb-4">
                    <label className="block text-right mb-1">شماره همراه</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-green-500 rounded-md"
                        value="09125840906"
                    />
                </div>
                <div className="w-80 mb-8 relative">
                    <input
                        type="password"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="رمز عبور"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">🔒</div>
                </div>
                <button className="w-80 py-3 bg-blue-500 text-white rounded-md">ورود</button>
                <div className="mt-4 text-sm text-center">
                    <a href="#" className="text-blue-500">ثبت‌نام کنید</a>
                    <span> | </span>
                    <a href="#" className="text-blue-500">فراموشی رمز عبور</a>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
