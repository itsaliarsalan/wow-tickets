import { useEffect } from "react"
import { Box, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { stripeOnboarding } from "../../actions/stripeActions"

function Payments() {
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  const stripeConnectOnboarding = useSelector(
    (state) => state.stripeConnectOnboarding
  )
  const { loading, error, success, url } = stripeConnectOnboarding

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(stripeOnboarding(userInfo.stripe_acc_id))
  }, [dispatch, userInfo.stripe_acc_id])

  return (
    <Box sx={{ margin: "30px 0", minHeight: 300 }}>
      <section className='content'>
        <Typography variant='h2' gutterBottom>
          Connect Stripe
        </Typography>
        <Typography
          variant='body1'
          color='text.secondary'
          sx={{ marginBottom: 1 }}
        >
          To view and manage payment details, you need to connect your wallet
        </Typography>
        {loading ? (
          <span>Loading....</span>
        ) : error ? (
          <span>{error}</span>
        ) : (
          <span></span>
        )}
        {success ? (
          <a href={url.data}>Complete Your Stripe Onboarding </a>
        ) : (
          <span></span>
        )}
      </section>
    </Box>
  )
}
export default Payments
