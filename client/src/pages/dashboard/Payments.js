import { Box, Button, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { stripeOnboarding } from "../../actions/stripeActions"

function Payments() {
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  const stripeConnectOnboarding = useSelector(
    (state) => state.stripeConnectOnboarding
  )
  const { url } = stripeConnectOnboarding

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [onboardingURI, setOnboardingURI] = useState("")

  useEffect(() => {
    if (userInfo) {
      dispatch(stripeOnboarding(userInfo.stripe_acc_id))
    }
    if (url) {
      setOnboardingURI(url)
    }
  }, [dispatch, userInfo, url])
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
        {onboardingURI ? (
          <Button
            variant='contained'
            onClick={() => {
              navigate(onboardingURI)
            }}
          >
            Connect Stripe
          </Button>
        ) : (
          <span></span>
        )}
      </section>
    </Box>
  )
}
export default Payments
