import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import "./Style.css"
import logo from "../assets/250x150.svg"
import { Container } from "@mui/material"
import {
  Avatar,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  ListItemIcon,
} from "@mui/material"

// Icons
import Dashboard from "@mui/icons-material/Dashboard"
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined"
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"
import PersonAdd from "@mui/icons-material/PersonAdd"
import Settings from "@mui/icons-material/Settings"
import Logout from "@mui/icons-material/Logout"
import { useSelector, useDispatch } from "react-redux"
import { signout } from "../actions/userActions"

function Navbar() {
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  const [isOpen, setOpen] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const signoutHandler = () => {
    dispatch(signout())
    navigate("/")
  }

  function handleClick() {
    if (!isOpen) {
      document.documentElement.style.overflow = "hidden"
      setOpen(true)
    } else {
      document.documentElement.style.overflow = "auto"
      setOpen(false)
    }
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleAvatarClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <nav className='top-nav'>
        <Container
          maxWidth='lg'
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className='logo'>
            <Link to='/'>
              <img src={logo} alt='main logo' />
            </Link>
          </div>
          <button
            className='menu-toggle'
            aria-label='Open Navigation Menu'
            onClick={handleClick}
          >
            <span className='menu-icon' />
          </button>
          <ul className={isOpen ? "menu open" : "menu"}>
            <li>
              <Link className='nav-link' to='/events'>
                Explore Events
              </Link>
            </li>
            <li>
              <Link to='/signin' className={userInfo ? "nav-link" : "nav-cta"}>
                Your Tickets
              </Link>
            </li>
            {userInfo ? (
              <>
                <Tooltip title='Account settings'>
                  <IconButton
                    onClick={handleAvatarClick}
                    size='small'
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar
                      alt={userInfo.name}
                      src={userInfo.image}
                      sx={{ width: 32, height: 32 }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorEl}
                  id='account-menu'
                  open={open}
                  onClose={handleAvatarClose}
                  onClick={handleAvatarClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleAvatarClose}>
                    <Avatar /> Profile
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleAvatarClose}>
                    <ListItemIcon>
                      <Dashboard fontSize='small' />
                    </ListItemIcon>
                    Dashboard
                  </MenuItem>
                  <MenuItem onClick={handleAvatarClose}>
                    <ListItemIcon>
                      <CalendarTodayOutlinedIcon fontSize='small' />
                    </ListItemIcon>
                    Events
                  </MenuItem>

                  <MenuItem onClick={handleAvatarClose}>
                    <ListItemIcon>
                      <ReceiptOutlinedIcon fontSize='small' />
                    </ListItemIcon>
                    Orders
                  </MenuItem>
                  <MenuItem onClick={signoutHandler}>
                    <ListItemIcon>
                      <Logout fontSize='small' />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : null}
          </ul>
        </Container>
      </nav>
      {/* Darken background when menu opens */}
      <div
        className={isOpen ? "overlay visible" : "overlay"}
        onClick={handleClick}
      />
    </>
  )
}

export default Navbar
