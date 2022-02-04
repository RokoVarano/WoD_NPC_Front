import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import User from '../object-classes/User'
import { RootState } from '../redux/store'
import { authUserWithToken } from '../redux/userSlice'

const Home: NextPage = () => {
  const currentUser = useSelector((state: RootState )=> state.user.user);
  const router = useRouter();
  const dispatch = useDispatch();

  const auth = async () => {
    if (currentUser && currentUser.id != -1) return;

    const key = localStorage.getItem("key");

    if (key) {
      await dispatch(authUserWithToken(key));
      
      if (currentUser && currentUser.id != -1) return;

      localStorage.removeItem("key");
    }

    router.push('login');
  }

  useEffect(()=> {

    auth();
    
  }, [])

  return (
    <Fragment>
      <h1>Index Page</h1>
      <h2>{currentUser.username}, {currentUser.id}</h2>
    </Fragment>
  )
}

export default Home
