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
import { useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import LoadingBox from "../components/LoadingBox"
import MessageBox from "../components/MessageBox"
import { useDispatch, useSelector } from "react-redux"
import LockScroll from "../components/layout/LockScroll"
import AddRoundedIcon from "@mui/icons-material/AddRounded"
import { getCheckoutSessionUrl } from "../actions/stripeActions"
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded"
// import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded"

export default function Checkout() {
  // Form data
  const dispatch = useDispatch()

  const items = JSON.parse(localStorage.getItem("checkout"))
  const [qty, setQty] = useState(items?.qty || 0)

  const stripeCheckout = useSelector((state) => state.stripeCheckout)
  const { loading, error, success, session } = stripeCheckout

  // Track Menu to lock scroll
  let isScrollDisabled = false

  const handlePay = () => {
    dispatch(
      getCheckoutSessionUrl(
        items?.stripe_pri_id,
        items?.qty,
        items?.price,
        items?.stripe_acc_id
      )
    )
  }

  useEffect(() => {
    if (success) {
      window.location.replace(session.data)
    }
  }, [success, session])

  const columns = [
    { field: "col1", headerName: "Ticket Name", width: 200 },
    { field: "col2", headerName: "Cost", width: 70 },
    { field: "col3", headerName: "Quantity", width: 100 },
    {
      field: "col4",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <ButtonGroup size='small' aria-label='small button group'>
          <Button
            onClick={() => {
              setQty(qty - 1)
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
          {/* <Button>
            <DeleteOutlineRoundedIcon />
          </Button> */}
        </ButtonGroup>
      ),
    },
  ]

  const rows = [
    {
      id: 1,
      col1: items?.name,
      col2: items?.price,
      col3: qty,
    },
  ]

  return (
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
                Please note: Your tickets have been reserved for few moments.
                Please ensure you complete your transaction now to avoid
                disappointment.
              </Typography>
            </Box>
            <Box sx={{ height: 300, width: "100%" }} md={{ marginTop: 2 }}>
              <DataGrid rows={rows} columns={columns} hideFooter autoHeight />
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
                  {items?.price} * {items?.qty} QTY
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
                {items.price * items.qty}
              </Typography>
            </Box>
          </Paper>
          <Box sx={{ textAlign: "end" }}>
            <Button
              variant='contained'
              sx={{ marginTop: 2, minWidth: 200 }}
              onClick={() => {
                handlePay()
              }}
            >
              Proceed
            </Button>
            {loading ? (
              <LoadingBox>Creating checkout session</LoadingBox>
            ) : error ? (
              <MessageBox variant='danger'>{error}</MessageBox>
            ) : (
              <></>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
