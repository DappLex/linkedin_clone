import React, { useState } from 'react';
import './Login.css';
import linkedIn from './assets/linkedin.png'
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { userSlice } from './store/userSlice';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();
  const { login } = userSlice

  const loginToApp = (e) => {
    e.preventDefault();
  };

  const register = () => {
    if (!name) {
      return alert('please enter a full name!');
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) =>{
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      })
      .then(() =>{
        console.log({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoURL: profilePic
        })
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoURL: profilePic
        }));
      });
    })
    .catch((error) => alert(error));
  };

  return (
    <div className='login'>
      <img src={linkedIn} alt="" />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />

        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>

      <p>If you are not a member?{''}
        <span className='login__register' onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login;
