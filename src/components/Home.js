import React,{useContext} from 'react'
import { userContext } from '../context.js/AuthContext'

const Home = () => {
    const { user, logoutUser } = useContext(userContext)
  return (
    <div>
        { user && <h2>Welcome {user.username}  you have finally arrived home.</h2>}
        <p onClick={logoutUser}>Logout</p>
    </div>
  )
}

export default Home