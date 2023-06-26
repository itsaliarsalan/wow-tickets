import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Checkout from "./Checkout"

function StripeContainer() {
  const stripePromise = loadStripe(
    "pk_test_51MtPzeB9Mcrw68O0vsl1QivnpgPRoFml4ReUmxqwGOchlzPlwMDDfZOQKCDvvA0gw6tCT7sLAZKtrF8xN4fZkgmH003PxYeF4Z"
  )

  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  )
}

export default StripeContainer
