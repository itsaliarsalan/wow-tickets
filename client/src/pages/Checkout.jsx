import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { useState } from "react"
import LockScroll from "../components/layout/LockScroll"
import { DatePicker } from "@mui/x-date-pickers"
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded"
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded"
import AddRoundedIcon from "@mui/icons-material/AddRounded"
import { useDispatch, useSelector } from "react-redux"
import { getCheckoutSessionUrl } from "../actions/stripeActions"
import { useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"

const rows = [
  { id: 1, col1: "Hello", col2: 3 },
  { id: 2, col1: "DataGridPro", col2: 2 },
  { id: 3, col1: "MUI", col2: 5 },
]
const columns = [
  { field: "col1", headerName: "Ticket Name", width: 150 },
  { field: "col2", headerName: "Quantity", width: 100 },
  {
    field: "col3",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => (
      <ButtonGroup size='small' aria-label='small button group'>
        <Button>
          {" "}
          <RemoveRoundedIcon />{" "}
        </Button>
        <Button>
          <AddRoundedIcon />
        </Button>
        <Button>
          <DeleteOutlineRoundedIcon />
        </Button>
      </ButtonGroup>
    ),
  },
]
export default function Checkout() {
  // Form data
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const items = JSON.parse(localStorage.getItem("checkout"))
  const [country, setCountry] = useState("")
  const [gender, setGender] = useState("")

  const stripeCheckout = useSelector((state) => state.stripeCheckout)
  const { loading, error, success, session } = stripeCheckout

  // Track Menu to lock scroll
  const [isScrollDisabled, setIsScrollDisabled] = useState(false)

  const handlePay = () => {
    dispatch(getCheckoutSessionUrl(items.stripe_pri_id, items.qty))
  }

  useEffect(() => {
    if (success) {
      console.log(session.data)
    }
  }, [success, session])

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                facere!
              </Typography>
            </Box>
            <Box sx={{ height: 300, width: "100%" }}>
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
              marginBottom: 2,
            }}
          >
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant='h5' gutterBottom>
                Contact Information
              </Typography>
              <Typography variant='body1' color='text.secondary'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                facere!
              </Typography>
            </Box>
            <hr />
            <Box
              component='form'
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                marginBottom: 4,
              }}
            >
              <TextField fullWidth required id='fullname' label='Full Name' />
              <TextField fullWidth required id='address' label='Address' />
              <Stack direction={{ sx: "column", md: "row" }} spacing={1}>
                <FormControl fullWidth required>
                  <InputLabel id='select-country-label'>Country</InputLabel>
                  <Select
                    labelId='select-country-label'
                    id='select-country'
                    value={country}
                    label='Country'
                    onChange={(e) => setCountry(e.target.value)}
                    onOpen={() => setIsScrollDisabled(true)}
                    onClose={() => setIsScrollDisabled(false)}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  required
                  id='postal-code'
                  label='Postal Code'
                />
              </Stack>
              <TextField
                fullWidth
                required
                id='mobile-number'
                label='Mobile Number'
                type='phone'
              />
              <TextField
                fullWidth
                required
                type='email'
                id='email'
                label='Email'
              />
              <Stack direction={{ sx: "column", md: "row" }} spacing={1}>
                <DatePicker />
                <FormControl fullWidth required>
                  <InputLabel id='select-gender-label'>Gender</InputLabel>
                  <Select
                    labelId='select-gender'
                    id='select-gender'
                    value={gender}
                    label='Gender'
                    onChange={(e) => setGender(e.target.value)}
                    onOpen={() => setIsScrollDisabled(true)}
                    onClose={() => setIsScrollDisabled(false)}
                  >
                    <MenuItem value='male'>Male</MenuItem>
                    <MenuItem value='female'>Female</MenuItem>
                    <MenuItem value='prefer-not-to-say'>
                      Prefer not to say
                    </MenuItem>
                    <MenuItem value='other'>Other</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Box>
          </Paper>

          <Paper
            sx={{
              padding: { xs: 3, md: 5 },
              background: "#fff",
              width: "100%",
              mb: 2,
            }}
          >
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant='h5' gutterBottom>
                Payment Information
              </Typography>
              <Typography variant='body1' color='text.secondary'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                facere!
              </Typography>
            </Box>
            <hr />
            <Box
              component='form'
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                marginBottom: 4,
              }}
            >
              <TextField
                fullWidth
                required
                id='cardNumber'
                label='Card Number'
              />
              <Stack direction={{ sx: "column", md: "row" }} spacing={1}>
                <FormControl fullWidth required>
                  <InputLabel id='select-card-label'>Card</InputLabel>
                  <Select
                    labelId='select-card-label'
                    id='select-country'
                    value={country}
                    label='Country'
                    onChange={(e) => setCountry(e.target.value)}
                    onOpen={() => setIsScrollDisabled(true)}
                    onClose={() => setIsScrollDisabled(false)}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <TextField fullWidth required id='postal-code' label='CVV' />
              </Stack>
            </Box>
          </Paper>

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
                  {items.price}
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
            {success ? (
              <div>
                <a href={session.data}>Pay</a>
              </div>
            ) : (
              <span></span>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
