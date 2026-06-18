import React from 'react';

function SignUp({ onGoToLogin }) {
  return (
    <div className="min-h-screen w-full bg-animated-gradient flex flex-col items-center font-sans relative overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center z-0">
        <div className="absolute w-full h-[150%] top-[-25%] bg-tech-grid animate-grid-pan opacity-80"></div>
      </div>

      <div className="w-full max-w-md relative pt-20 pb-8 sm:pt-24 sm:pb-12 z-10">
        <div className="absolute top-6 left-6 sm:top-8 z-20">
          <button 
            type="button"
            onClick={onGoToLogin}
            className="flex items-center text-white text-sm sm:text-base font-medium hover:text-gray-300 transition-colors drop-shadow"
          >
            <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
            Back
          </button>
        </div>
      </div>

      <div className="bg-[#FBF9F4] w-full max-w-md rounded-t-[3rem] sm:rounded-[2.5rem] px-8 py-8 sm:py-10 shadow-[0_-10px_20px_rgba(0,0,0,0.15)] sm:shadow-2xl sm:mb-12 z-10 flex-1 flex flex-col relative">
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#091242] mb-6 sm:mb-8 tracking-wide">
          Sign up
        </h2>

        <form className="space-y-4 sm:space-y-5">
          
          <div>
            <label className="block text-sm sm:text-base font-bold text-gray-900 mb-1.5 ml-1">Full Name</label>
            <div className="relative shadow-[0_4px_15px_rgba(0,0,0,0.04)] rounded-2xl">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="First name Last name"
                className="w-full pl-12 pr-4 py-3.5 sm:py-4 bg-white border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#091242] text-base sm:text-lg text-gray-700 font-medium placeholder-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm sm:text-base font-bold text-gray-900 mb-1.5 ml-1">E-mail</label>
            <div className="relative shadow-[0_4px_15px_rgba(0,0,0,0.04)] rounded-2xl">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full pl-12 pr-4 py-3.5 sm:py-4 bg-white border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#091242] text-base sm:text-lg text-gray-700 font-medium placeholder-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm sm:text-base font-bold text-gray-900 mb-1.5 ml-1">Password</label>
            <div className="relative shadow-[0_4px_15px_rgba(0,0,0,0.04)] rounded-2xl">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                </svg>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full pl-12 pr-12 py-3.5 sm:py-4 bg-white border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#091242] text-base sm:text-lg text-gray-700 font-medium placeholder-gray-400"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-black cursor-pointer">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm sm:text-base font-bold text-gray-900 mb-1.5 ml-1">Confirm Password</label>
            <div className="relative shadow-[0_4px_15px_rgba(0,0,0,0.04)] rounded-2xl">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                </svg>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full pl-12 pr-12 py-3.5 sm:py-4 bg-white border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#091242] text-base sm:text-lg text-gray-700 font-medium placeholder-gray-400"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-black cursor-pointer">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="pt-2 sm:pt-4">
            <button
              type="button"
              className="w-full bg-[#091242] text-white font-bold text-xl py-4 rounded-2xl hover:bg-blue-900 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(9,18,66,0.5)] hover:-translate-y-1 tracking-wide"
            >
              Sign up
            </button>
          </div>
        </form>

        <div className="text-center mt-auto pt-6 sm:pt-8 text-sm font-medium text-gray-600 pb-2">
          มีบัญชีอยู่แล้ว? <button type="button" onClick={onGoToLogin} className="text-[#091242] font-bold hover:underline">เข้าสู่ระบบ</button>
        </div>

      </div>
    </div>
  );
}

export default SignUp;