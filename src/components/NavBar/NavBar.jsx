import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div>
      <nav>
        <Link to="/">Trivia</Link>
        &nbsp; | &nbsp;
        <Link to="/scores">My Score</Link>
        &nbsp;&nbsp;
        &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
        <div>
        <span>Welcome, {user.name}</span>
        </div>
      </nav>
       
    </div>
  );
}