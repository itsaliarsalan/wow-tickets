import "./Style.css"
import React from "react"
import { Link } from "react-router-dom"
function Cta() {
  return (
    <section className='cta'>
      <div className='container'>
        <div className='content'>
          <h2>Join our community of event sellers and start selling today!</h2>
          <Link to='/seller-signup' className='btn btn-main'>
            Register Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta
