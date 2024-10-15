import React from 'react'

const Signup = () => {
  return (
      <>
      {/* <div className='bg-[url("./src/images/pexels-eberhardgross-2098428.jpg")] h-[1000px] w-[1500px] '> */}
      <div className='flex justify-center mt-[200px]'>
        
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
      <div className='flex justify-center'>
        <button>Sign-Up</button>
        <button className='ml-[30px]'>Reset</button>
      </div>
      {/* </div> */}
    </>
  )
}

export default Signup
