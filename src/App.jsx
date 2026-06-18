import React, { useState } from 'react';
import Login from './pages/Login'; 
import SignUp from './pages/SignUp';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <>
      {currentPage === 'login' && <Login onGoToSignUp={() => setCurrentPage('signup')} />}
      {currentPage === 'signup' && <SignUp onGoToLogin={() => setCurrentPage('login')} />}
      {currentPage === 'verify' && <Verify onBack={() => setCurrentPage('login')} />}
      {currentPage === 'forgotPassword' && <ForgotPassword onBack={() => setCurrentPage('login')} />}

    </>
  );
}

export default App;