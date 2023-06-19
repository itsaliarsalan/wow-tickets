import "./TicketWidget.css"
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material"
import { useState } from "react"
import LockScroll from "../layout/LockScroll"
import { useNavigate } from "react-router-dom"
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory"

const TicketWidget = (props) => {
  const navigate = useNavigate()
  function returnEventName(name) {
    const openingBracketIndex = name ? name.indexOf("(") : ""
    if (openingBracketIndex !== -1) {
      const eventName = name
        ? name.substring(0, openingBracketIndex).trim()
        : ""
      return eventName
    } else {
      return name.trim()
    }
  }

  function returnTextWithBracket(name) {
    const openingBracketIndex = name.indexOf("(")
    const closingBracketIndex = name.indexOf(")")
    if (
      openingBracketIndex !== -1 &&
      closingBracketIndex !== -1 &&
      closingBracketIndex > openingBracketIndex
    ) {
      const startIndex = openingBracketIndex + 1
      const endIndex = closingBracketIndex
      const textWithBracket = name.substring(startIndex, endIndex).trim()
      return textWithBracket
    } else {
      return ""
    }
  }

  // State to track when menu is open and lock scroll
  const [disableScroll, setDisableScroll] = useState(false)
  // State to store active value
  const [activeValue, setActiveValue] = useState(0)

  return (
    <Box className='widget' type='ticket' sx={{ width: "100%" }}>
      <Box
        className='content'
        sx={{
          background: "#fff",
          padding: "0.5rem 1rem",
          minHeight: 180,
          paddingTop: 2,
        }}
      >
        {/* Top */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            gap: 2,
          }}
        >
          <div className='event-name'>
            <h3>{returnEventName(props.props.name)}</h3>
            <h5 style={{ fontWeight: 400 }}>
              {returnTextWithBracket(props.props.name)}
            </h5>
          </div>
          <div classNameName='ticket-price'>
            <h2 style={{ color: "#036204" }}>€{props.props.price}</h2>
          </div>
        </Box>
        {/* Description */}
        <Typography
          variant='subtitle2'
          color='text.secondary'
          gutterBottom
          sx={{ marginTop: 1 }}
        >
          {props.props.description}
        </Typography>
      </Box>
      <div className='rip'></div>
      <Box sx={{ backgroundColor: "#fff", paddingY: 1, paddingX: 2 }}></Box>
      <Box className='bottom' sx={{ display: "flex", gap: 1 }}>
        <Button
          variant='contained'
          size='small'
          sx={{ minWidth: 150 }}
          onClick={() => {
            localStorage.setItem(
              "checkout",
              JSON.stringify({
                qty: activeValue,
                ticket: props.props,
              })
            )
            navigate("/checkout")
          }}
        >
          BUY TICKET
        </Button>
        <FormControl fullWidth size='small'>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={activeValue}
            onChange={(e) => setActiveValue(e.target.value)}
            onOpen={() => setDisableScroll(true)}
            onClose={() => setDisableScroll(false)}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 200,
                },
              },
            }}
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={9}>10</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {disableScroll && <LockScroll />}
    </Box>
  )
}

export default TicketWidget
