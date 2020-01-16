import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setEmail, setRPassword, setIsRegister, addUser } from '../redux/actions/userActions';
import md5 from 'md5'

const Register = ({ dispatch, email, rpassword , isRegister}) => {
  //const [email, setEmail] = React.useState('');
  //const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const verify = () => {
    if (email !== null && rpassword !== null) {
        dispatch(addUser(email, md5(rpassword)));          
    };
  };
  

  const updateEmail = (newEmail) => {
    if (newEmail.length < 20) {
      dispatch(setEmail(newEmail));
    }
  };

  const updatePassword = (newPassword) => {
      if (newPassword.length < 20) {
          dispatch(setRPassword(newPassword))
      }
  }
  if (isRegister) {
    return <Redirect to="/login" />; 
  }
  return (
    <div>
      <h2>Register New User</h2>
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
            value={rpassword}
            placeholder="password"
            onChange={e => updatePassword(e.target.value)}
            
          />
        </div>
        <div>
          <button 
          onClick={verify}
          
          >
            Submit
          </button>
        <div>
        <a href="/login">Already Have one ?</a>
        </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  email: state.userReducer.email,
  rpassword: state.userReducer.rpassword,
});

export default connect(mapStateToProps)(Register);