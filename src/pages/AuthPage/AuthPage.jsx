import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  
  return (
    <main>
      {showSignUp ? (
        <SignUpForm setUser={setUser} />
      ) : (
        <LoginForm setUser={setUser} />
      )}
      <div className='authContainer'>
        <span className='authLabel'>{showSignUp ? 'Already have account' : 'New user'}, please&nbsp;<button className='authButton' onClick={() => setShowSignUp(!showSignUp)}>
          {showSignUp ? 'Log In' : 'Sign Up'}
        </button></span>
      </div>
    </main>
  );
}