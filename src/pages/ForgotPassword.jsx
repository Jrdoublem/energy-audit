import React from 'react';

function ForgotPassword({ onBack }) {
  return (
    <div className="min-h-screen w-full bg-animated-gradient flex flex-col items-center font-sans relative overflow-hidden">
      {/* เอฟเฟกต์ตารางวิศวกรรม */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-full h-[150%] top-[-25%] bg-tech-grid animate-grid-pan opacity-80"></div>
      </div>

      <div className="w-full max-w-md relative pt-20 pb-8 z-10 px-6">
        <button onClick={onBack} className="text-white flex items-center hover:text-gray-300 transition-colors">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Login
        </button>
      </div>

      <div className="bg-[#FBF9F4] w-full max-w-md rounded-t-[3rem] sm:rounded-[2.5rem] px-8 py-10 shadow-2xl z-10 flex-1 flex flex-col">
        <div className="text-center mb-8">
           <svg className="w-20 h-20 mx-auto text-[#091242] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
           </svg>
           <h2 className="text-3xl font-extrabold text-[#091242]">Forgot password?</h2>
           <p className="text-sm text-gray-600 mt-2">Enter your email, and we'll send you a verification code to reset your password.</p>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-bold text-gray-900 ml-1">E-mail</label>
          <input type="email" placeholder="example@email.com" className="w-full px-6 py-4 bg-white border border-transparent rounded-2xl focus:ring-2 focus:ring-[#091242] shadow-md" />
          <button className="w-full bg-[#091242] text-white font-bold py-4 rounded-2xl hover:bg-blue-900 transition-all">Send</button>
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;