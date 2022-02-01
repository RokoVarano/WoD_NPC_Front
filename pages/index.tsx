import type { NextPage } from 'next'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const Home: NextPage = (props) => {
const currentUser = useSelector((state: RootState )=> state.user.user);

  return (
    <Fragment>
      <h1>Index Page</h1>
      <h2>{currentUser.username}, {currentUser.id}</h2>
    </Fragment>
  )
}

export default Home
