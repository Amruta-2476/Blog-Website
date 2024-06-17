import React from 'react'
import { Link } from 'react-router-dom';
import Error from '../images/404_error.svg'

const ErrorPage = () => {
  return (
    <section className='error-page'>
      <div className="error_container">
        <div className="error_right">
          <img src={Error} alt='error img'></img>
        </div>
        <div className="error_left">
          <h1>Oops...</h1>
          <h2>Page not found</h2>
          <p>We couldn't find the page you were looking for.</p>
          <Link to='/' className='btn primary'>Go Back to Homepage</Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
