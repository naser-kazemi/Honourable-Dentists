import React from 'react';

const SignupScreen = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col items-center">
                <div className="text-4xl mb-4">🔵</div>
                <h1 className="text-2xl font-bold mb-8">ثبت‌نام</h1>
                <div className="w-80 mb-4">
                    <label className="block text-right mb-1">شماره همراه</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md"
                        value="09125840906"
                    />
                </div>
                <div className="w-80 mb-4 relative">
                    <input
                        type="password"
                        className="w-full px-3 py-2 border border-red-500 rounded-md"
                        placeholder="رمز عبور"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">🔒</div>
                </div>
                <div className="w-80 mb-8 relative">
                    <input
                        type="password"
                        className="w-full px-3 py-2 border border-red-500 rounded-md"
                        placeholder="تکرار رمز عبور"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">🔒</div>
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500">⚠️</div>
                </div>
                <button className="w-80 py-3 bg-blue-500 text-white rounded-md">ثبت‌نام</button>
                <div className="mt-4 text-sm text-center">
                    <span>حساب کاربری دارید؟</span>
                    <a href="#" className="text-blue-500 ml-2">ورود</a>
                </div>
            </div>
        </div>
    );
};

export default SignupScreen;
