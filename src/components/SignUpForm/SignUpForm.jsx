import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {name, email, password} = this.state;
      const formData = {name, email, password};
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Signup failed, please try again!' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <form className='sform sSignUpForm' autoComplete="off" onSubmit={this.handleSubmit}>
          <h3>Create new account</h3>
          <label className='slabel' for="name">Name</label>
          <input className='sinput' type="text" placeholder="Enter name" id="name" name="name" value={this.state.name} onChange={this.handleChange} required />
          <label className='slabel' for="email">Email</label>
          <input className='sinput' type="email" placeholder="Enter email" id="email" name="email" value={this.state.email} onChange={this.handleChange} required />
          <label className='slabel' for="password">Password</label>
          <input className='sinput' type="password" placeholder="Enter password" id="password" name="password" value={this.state.password} onChange={this.handleChange} required />
          <label className='slabel' for="confirm">Confirm Password</label>
          <input className='sinput' type="password" placeholder="Enter confirm password" id="confirm" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
          <button className='sbutton' type="submit" disabled={disable}>Signup</button>
        </form>
        <span className="floating-alert">{this.state.error}</span>
      </div>
    );
  }
}