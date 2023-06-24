import {
	Container,
	Paper,
	Box,
	Typography,
	Grid,
	Avatar,
	TextField,
	Button,
} from "@mui/material"
import { useSelector } from "react-redux"

export default function Profile() {
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  return (
    <Container sx={{ mt: 3, mb: 5 }}>
      {/* Header */}
      <Box sx={{ mb: 3 }}>
        <Avatar sx={{ height: 100, width: 100, margin: "0.5rem auto" }} />
        <Typography variant='h4' sx={{ textAlign: "center" }}>
          {userInfo.name}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ padding: { xs: 2, md: 3 } }}>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant='h5' gutterBottom>
                Basic Details
              </Typography>
              <Typography variant='body1' color='text.secondary'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                facere!
              </Typography>
              <hr style={{ marginTop: "1rem" }} />
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
                <Box sx={{ textAlign: "end" }}>
                  <Button variant='contained' type='submit'>
                    Update
                  </Button>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ padding: { xs: 2, md: 3 } }}>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant='h5' gutterBottom>
                Account Security
              </Typography>
              <Typography variant='body1' color='text.secondary'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                facere!
              </Typography>
              <hr style={{ marginTop: "1rem" }} />
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
                  id='password'
                  label='Password'
                  type='password'
                />
                <TextField
                  fullWidth
                  required
                  id='confirm-password'
                  label='Confirm Password'
                  type='password'
                />
                <Box sx={{ textAlign: "end" }}>
                  <Button variant='contained' type='submit'>
                    Update
                  </Button>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
