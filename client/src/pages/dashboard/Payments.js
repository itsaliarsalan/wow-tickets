import DashboardHeader from "../../components/layout/DashboardHeader"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { Box, Button, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2" // Grid version 2
import "chart.js/auto"
import { Chart } from "react-chartjs-2"

// fetch data
import { paymentDetails } from "../../data"

// Icons
import LocalAtmIcon from "@mui/icons-material/LocalAtm"

function Payments() {
	return (
		<Box sx={{ margin: "30px 0", minHeight: 300 }}>
			<section className="content">
				<Typography variant="h2" gutterBottom>
					Connect Stripe
				</Typography>
				<Typography
					variant="body1"
					color="text.secondary"
					sx={{ marginBottom: 1 }}
				>
					To view and manage payment details, you need to connect your wallet
				</Typography>
				<Button variant="contained">Connect Stripe</Button>
			</section>
		</Box>
	)
}
export default Payments
