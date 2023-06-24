import React from "react"
import { Container } from "@mui/material"

function StripeFailed() {
  return (
    <section className='features'>
      <Container className='mb-3 mt-3'>
        <h1>Stripe Onboarding Failed</h1>
        <p>
          Please retry and if you need any support write an email to{" "}
          <a href='mailto:adam@wow.tickets'>adam@wow.tickets</a>.
        </p>
      </Container>
    </section>
  )
}

export default StripeFailed
