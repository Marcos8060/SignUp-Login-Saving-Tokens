import React,{useContext} from 'react'
import { userContext } from '../context.js/AuthContext'


const Login = () => {
  const { loginUser,message } = useContext(userContext)

  return (
    <div className='container'>
      { message &&
      <div className="alert alert-danger alert-dismissible fade show" role="alert">
                   {message}
                   <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                   </div>
        
      }
        <form onSubmit={loginUser}>
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" placeholder='username' name='username' />
            <label htmlFor="password">Password</label>
            <input type="text" className="form-control" placeholder='password' name='password' />
            <button className='btn btn-primary m-3'>Login</button>
        </form>
    </div>
  )
}

export default Login