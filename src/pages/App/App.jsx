import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ScorePage from '../ScorePage/ScorePage';

import TriviaPage from '../TriviaPage/TriviaPage';
import NavBar from '../../components/NavBar/NavBar';
// import Questions from '../Questions/Questions';

export default function App() {
  
  const [user, setUser] = useState(getUser());
      
  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/scores/new" element={<ScorePage />} />
              <Route path="/" element={<TriviaPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
