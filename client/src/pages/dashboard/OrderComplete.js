import React, { useEffect } from "react"
import { Container } from "@mui/material"

function OrderComplete() {
  useEffect(() => {
    localStorage.removeItem("checkout")
  })
  return (
    <Container className='features'>
      <h1>Order Completed</h1>
      <p>
        We appreciate your business! If you have any questions, please email
        <a href='mailto:adam@wow.tickets'>adam@wow.tickets</a>.
      </p>
    </Container>
  )
}

export default OrderComplete
