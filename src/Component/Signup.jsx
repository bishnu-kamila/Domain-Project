import React from 'react'

const Signup = () => {
  return (
      <>
      <div className='flex justify-center '>
        <table className='border-4'>
          <tr>
            <td>Name</td>
            <td><input type="text" placeholder="Enter Your Name: " /></td>
          </tr>
          <tr>
            <td>Username</td>
            <td><input type="text" placeholder="Username: " /></td>
          </tr>
          <tr>
            <td>Password</td>
            <td><input type="password" /></td>
          </tr>
        </table>
      </div>
      <button className='flex justify-center '>Sign-Up</button>
    </>
  )
}

export default Signup
