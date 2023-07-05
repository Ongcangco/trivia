import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Login failed, please try again!');
    }
  }

  return (
    <div>
      <form className='sform' autoComplete="off" onSubmit={handleSubmit}>
          <h3>Login To Trivia</h3>
          <label className='slabel' for="email">Email</label>
          <input className='sinput' type="email" placeholder="Enter email" id="email" name="email" value={credentials.email} onChange={handleChange} required />
          <label className='slabel' for="password">Password</label>
          <input className='sinput' type="password" placeholder="Enter password" id="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button className='sbutton' type="submit">Login</button>
      </form>
      <span className="floating-alert">{error}</span>
    </div>
  );
}