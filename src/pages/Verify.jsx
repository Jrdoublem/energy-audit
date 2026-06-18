import React from 'react';

function Verify({ onBack }) {
  return (
    <div className="min-h-screen w-full bg-animated-gradient flex flex-col items-center font-sans relative overflow-hidden">
      <div className="bg-[#FBF9F4] w-full max-w-md rounded-[2.5rem] px-8 py-10 shadow-2xl z-10 mt-20">
        <div className="text-center mb-8">
          <svg className="w-20 h-20 mx-auto text-[#091242] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <h2 className="text-3xl font-extrabold text-[#091242]">Check your email</h2>
          <p className="text-sm text-gray-600 mt-2">We've sent a 6-digit code to user@email.com</p>
        </div>

        {/* ช่องกรอกรหัส 6 ช่อง */}
        <div className="flex justify-between mb-8">
          {[...Array(6)].map((_, i) => (
            <input key={i} type="text" maxLength="1" className="w-12 h-14 text-center border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#091242] font-bold text-xl" />
          ))}
        </div>

        <button className="w-full bg-[#091242] text-white font-bold py-4 rounded-2xl hover:bg-blue-900 transition-all mb-4">Verify</button>
        <p className="text-center text-sm text-gray-500">Didn't receive the code? <button className="font-bold text-[#091242]">Resend(Time)</button></p>
      </div>
    </div>
  );
}
export default Verify;