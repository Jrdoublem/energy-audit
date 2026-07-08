import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RESEND_SECONDS = 60;

function Verify() {
  const navigate = useNavigate();
  const location = useLocation();
  const nextPage = location.state?.next || '/login';
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
  const inputsRef = useRef([]);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  const handleChange = (index, value) => {
    const digit = value.replace(/[^0-9]/g, '').slice(-1);
    const next = [...code];
    next[index] = digit;
    setCode(next);
    setError('');
    if (digit && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    const digits = e.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, 6).split('');
    if (digits.length === 0) return;
    e.preventDefault();
    const next = [...code];
    digits.forEach((d, i) => { next[i] = d; });
    setCode(next);
    setError('');
    inputsRef.current[Math.min(digits.length, 5)]?.focus();
  };

  const handleVerify = () => {
    if (code.some((d) => !d)) {
      setError('กรุณากรอกรหัสให้ครบ 6 หลัก');
      return;
    }
    navigate(nextPage);
  };

  const handleResend = () => {
    if (secondsLeft > 0) return;
    setSecondsLeft(RESEND_SECONDS);
    setCode(['', '', '', '', '', '']);
    setError('');
    inputsRef.current[0]?.focus();
  };

  return (
    <div className="min-h-screen w-full bg-animated-gradient flex flex-col items-center sm:justify-center font-sans relative overflow-x-hidden">
      <div className="w-full max-w-md relative pt-16 pb-6 sm:hidden z-10"></div>
      <div className="bg-[#F7F8F0] w-full max-w-md rounded-t-[3rem] sm:rounded-[2.5rem] px-6 sm:px-8 py-10 shadow-2xl z-10 flex-1 sm:flex-none flex flex-col">
        <div className="text-center mb-8">
          <svg className="w-20 h-20 mx-auto text-[#0F2854] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <h2 className="text-3xl font-extrabold text-[#0F2854]">Check your email</h2>
          <p className="text-sm text-gray-600 mt-2">เราได้ส่งรหัส 6 หลักไปที่ email ของคุณแล้ว</p>
        </div>

        <div className="flex gap-2 sm:gap-3 mb-3">
          {code.map((digit, i) => (
            <input
              key={i}
              ref={(el) => (inputsRef.current[i] = el)}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              onPaste={handlePaste}
              autoFocus={i === 0}
              className={`flex-1 aspect-square min-w-0 text-center border-2 rounded-xl focus:ring-2 focus:ring-[#0F2854] font-bold text-lg sm:text-xl transition-colors ${
                error ? 'border-red-400' : 'border-gray-200'
              }`}
            />
          ))}
        </div>

        <p className={`text-center text-xs text-red-500 mb-5 transition-opacity ${error ? 'opacity-100' : 'opacity-0'}`}>
          {error || ' '}
        </p>

        <button type="button" onClick={handleVerify} className="w-full bg-[#0F2854] text-white font-bold py-4 rounded-2xl hover:bg-[#1C4D8D] transition-all mb-4">Verify</button>
        <p className="text-center text-sm text-gray-500">
          ไม่ได้รับรหัส?{' '}
          <button
            type="button"
            onClick={handleResend}
            disabled={secondsLeft > 0}
            className={`font-bold ${secondsLeft > 0 ? 'text-gray-400 cursor-not-allowed' : 'text-[#0F2854] hover:underline'}`}
          >
            ส่งอีกครั้ง{secondsLeft > 0 ? ` (${secondsLeft}s)` : ''}
          </button>
        </p>

        <div className="text-center mt-auto pt-8 text-base font-medium text-gray-600 pb-2">
          อีเมลผิด? <button type="button" onClick={() => navigate('/forgot-password')} className="text-[#0F2854] font-bold hover:underline">กลับไปแก้ไข</button>
        </div>
      </div>
    </div>
  );
}
export default Verify;