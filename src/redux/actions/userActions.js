import axios from "axios";

export const setEmail = email => ({ // 1 param = no parentheses
  type: 'SET_EMAIL',
  email,
  // email: email,
});

export const setIsLoggedIn = isLoggedIn => ({
  type: 'SET_IS_LOGGED_IN',
  isLoggedIn,
});

export const setPassword = password => ({
  type: 'SET_PASSWORD',
  password,
})

export const setRPassword = rpassword => ({
  type: 'SET_RPASSWORD',
  rpassword,
})

export const setIsRegister = isRegister => ({
  type: 'SET_IS_REGISTER',
  isRegister,
});

//pass 2 parameters email and password to create new user
export const addUser = (email, rpassword) => (dispatch, getState) => {
  //const {email, password} = getState().userReducer;
  //post request to routes using query on url
  const body = {email: email, password: rpassword}
  axios.post(`/users`, body)
    .then(res => dispatch({
      type: 'REGISTER_SUCCESS',
      payload: res.data
    }))
    .catch(err => {
      dispatch({
        type: 'REGISTER_FAIL'
      })
    });
};

export const checkUser = (email, password) => (dispatch, getState) => {
  //const {email, password} = getState().userReducer;
  const options = {
    withCredentials: true
  };
  //post request to routes using query on url
  axios.get('/service1', options)
  .then((res) => {
    console.log(res)
  })
  .catch(console.log);

  
  const body = {email: email, password: password}
  axios.post(`/auth`,body)
  
    .then(res => dispatch({
      type: 'LOGIN_SUCCESS',
      payload: res.data
    }))
    .catch(err => {
      dispatch({
        type: 'LOGIN_FAIL'
      })
    });
};