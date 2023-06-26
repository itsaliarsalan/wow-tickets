import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material"
import { useState } from "react"
import { DataGrid } from "@mui/x-data-grid"
import LockScroll from "../components/layout/LockScroll"
import AddRoundedIcon from "@mui/icons-material/AddRounded"
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded"
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
    },
    invalid: {
      iconColor: "#ffc7ee",
    },
  },
}

export default function Checkout() {
  const navigate = useNavigate()
  const stripe = useStripe()
  const elements = useElements()
  const [success, setSuccess] = useState(false)

  const items = JSON.parse(localStorage.getItem("checkout"))
  const [qty, setQty] = useState(items?.qty || 0)

  // Track Menu to lock scroll
  let isScrollDisabled = false
  const columns = [
    { field: "col1", headerName: "Ticket Name", width: 200 },
    { field: "col2", headerName: "Cost", width: 50 },
    { field: "col3", headerName: "Qty", width: 50 },
    {
      field: "col4",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <ButtonGroup size='small' aria-label='small button group'>
          <Button
            onClick={() => {
              if (qty > 0) {
                setQty(qty - 1)
              } else {
                setQty(0)
              }
            }}
          >
            {" "}
            <RemoveRoundedIcon />{" "}
          </Button>
          <Button
            onClick={() => {
              setQty(qty + 1)
            }}
          >
            <AddRoundedIcon />
          </Button>
          <Button>
            <DeleteOutlineRoundedIcon />
          </Button>
        </ButtonGroup>
      ),
    },
  ]

  const rows = [
    {
      id: 1,
      col1: items?.ticket?.name,
      col2: items?.ticket?.price,
      col3: qty,
    },
  ]

  const handlePay = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })
    if (!error) {
      try {
        const { id } = paymentMethod
        const response = await axios.post("/api/stripe/payment", {
          amount: items?.ticket?.price * qty * 100,
          id,
          stripe_acc_id: items?.ticket?.user?.stripe_acc_id,
        })
        if (response.data.success) {
          setSuccess(true)
        }
      } catch (err) {
        console.log("Payment Error ::: ", err)
      }
    } else {
      console.log("Payment Error ::: ", error)
    }
  }

  return (
    <>
      {success ? (
        navigate("/")
      ) : (
        <Container>
          {isScrollDisabled && <LockScroll />}
          <Grid container sx={{ marginY: 5 }} spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  padding: { xs: 3, md: 5 },
                  background: "#fff",
                  width: "100%",
                  paddingBottom: 8,
                }}
              >
                <Box sx={{ marginBottom: 2 }}>
                  <Typography variant='h5' gutterBottom>
                    Order Summary
                  </Typography>
                  <Typography variant='body1' color='text.secondary'>
                    Please note: Your tickets have been reserved for few
                    moments. Please ensure you complete your transaction now to
                    avoid disappointment.
                  </Typography>
                </Box>
                <Box sx={{ height: 300, width: "100%" }} md={{ marginTop: 2 }}>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    hideFooter
                    autoHeight
                  />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  padding: { xs: 3, md: 5 },
                  background: "#fff",
                  width: "100%",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box
                    sx={{
                      display: "flex",
                      direction: { xs: "column", md: "row" },
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Typography variant='subtitle1'>Tickets</Typography>
                    <Typography variant='body1' color='text.secondary'>
                      {items?.ticket?.price} * {qty} QTY
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      direction: { xs: "column", md: "row" },
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  ></Box>
                </Box>
                <hr style={{ margin: "1rem 0" }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant='h5' gutterBottom>
                    Total Amount
                  </Typography>
                  <Typography variant='h5' gutterBottom>
                    {items?.ticket?.price * qty}
                  </Typography>
                </Box>
              </Paper>
              <hr />
              <Paper
                sx={{
                  padding: { xs: 3, md: 5 },
                  background: "#fff",
                  width: "100%",
                }}
              >
                <Box sx={{ textAlign: "end" }}>
                  <form onSubmit={handlePay}>
                    <CardElement options={CARD_OPTIONS} />
                    <Button
                      type='submit'
                      variant='contained'
                      sx={{ marginTop: 2, minWidth: 200 }}
                    >
                      Pay
                    </Button>
                  </form>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  )
}

