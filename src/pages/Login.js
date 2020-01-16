import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setEmail, setPassword, setIsLoggedIn, checkUser } from '../redux/actions/userActions';

const Login = ({ dispatch, email, password, isLoggedIn }) => {
  //const [email, setEmail] = React.useState('');
  //const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const verify = () => {
    const userLogIn = dispatch(checkUser(email, password))
  };

  const updateEmail = (newEmail) => {
    if (newEmail.length < 20) {
      dispatch(setEmail(newEmail));
    }
  };

  const updatePassword = (newPassword) => {
    if (newPassword.length < 20) {
        dispatch(setPassword(newPassword))
        return true;
    }
}

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <h2>Login</h2>
      <div>
      <div>
          <input
            name="email"
            type="email"
            value={email}
            placeholder="email@email.com"
            onChange={e => updateEmail(e.target.value)}

            
          />
          </div>
          <div>
          <input
            name="password"
            type="password"
            value={password}
            placeholder="password"
            onChange={e => updatePassword(e.target.value)}
            
          />
        </div>
        <div>
          <button onClick={verify}>
            Submit
          </button>
          <p>Enter: email@email.com to bypass validation</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  email: state.userReducer.email,
  password: state.userReducer.password,
  isLoggedIn: state.userReducer.isLoggedIn,
});

export default connect(mapStateToProps)(Login);