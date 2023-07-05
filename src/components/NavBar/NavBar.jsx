
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';


export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div>
      <nav class="snavbar">
        <div class="snavbar-right">
          <a href="/" class="snavbar-link">Home</a> |&nbsp;&nbsp;
          <a href="/scores" class="snavbar-link">My Score</a> |&nbsp;&nbsp;
          <a href="" onClick={handleLogOut} class="snavbar-link">Log-out</a>
        </div>
      </nav>
      <div class="swelcome">
        Welcome, {user.name}
      </div>
    </div>
  );
}