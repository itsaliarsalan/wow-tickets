import ScrollToTop from '../../utilities/ScrollToTop'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'

// Localization for datepicker
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

// Custom Theme
import { theme } from './Theme'

export default function AppWrapper(props) {
	return (
		<ThemeProvider theme={theme}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<BrowserRouter>
					<ScrollToTop />
					{props.children}
				</BrowserRouter>
			</LocalizationProvider>
		</ThemeProvider>
	)
}
