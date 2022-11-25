import React from 'react'
import'../App.css'
function Error() {
  return (
    <>
    
    <h1 className='Error text-center'>404! Page not found</h1>
    <p className='text-center'>We’re sorry, the page you have looked for does not exist in our website! <br/>Maybe go to our home page or try to use a search?</p>
    <button className='btn btn-info Errorb  p-3'>Go Back To Home</button>
    </>
  )
}

export default Error