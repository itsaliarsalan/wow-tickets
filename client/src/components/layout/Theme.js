import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
	typography: {
		fontFamily: ['Poppins'].join(','),
		h1: {
			fontSize: '2.027rem',
		},
		h2: {
			fontSize: '1.802rem',
		},
		h3: {
			fontSize: '1.602rem',
		},
		h4: {
			fontSize: '1.424rem',
		},
		h5: {
			fontSize: '1.266rem',
		},
		h6: {
			fontSize: '1.125rem',
		},
		subtitle2: {
			fontSize: '0.833rem',
		},
	},
	palette: {
		primary: {
			main: '#AA1894',
		},
	},
})
