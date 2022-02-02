import React, { useEffect, useRef, useState } from 'react';
import './loginform.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/userSlice';
import { useRouter } from 'next/router';
import { RootState } from '../../redux/store';

const LoginForm = () => {
  const [message, setMessage] = useState(''); //error messages
  const user = useSelector((state: RootState )=> state.user)
  const dispatch = useDispatch();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();


  const sendLoginReq = async() => {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    await dispatch(loginUser({username : username, password : password}))
  }

  useEffect(()=>{
    if (user.user.id != -1) router.push('/');

    setMessage(user.message);

  }, [message, router, user.message, user.user.id])

  return (
    <div className="loginform">
        <p>{message}</p>
        <input type="text" className="username" ref={usernameRef}/>
        <input type="text" className="password" ref={passwordRef}/>
        <button className="login" onClick={() => sendLoginReq()}>Login</button>
        <button className="signup">Create account</button>
    </div>
  )
};

export default LoginForm;
