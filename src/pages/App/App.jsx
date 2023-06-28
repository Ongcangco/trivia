import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ScorePage from '../ScorePage/ScorePage';
import HomePage from '../HomePage/HomePage';

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
              <Route path="/" element={<HomePage />} />
              <Route path="/Trivia" element={<TriviaPage />} />
              <Route path="/scores" element={<ScorePage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
