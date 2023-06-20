import "./Style.css"
import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/250x150.svg"
import { useSelector } from "react-redux"
import { Box, Container } from "@mui/material"

export default function Footer() {
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  return (
    <Box component='footer' sx={{ position: "relative", zIndex: 4 }}>
      <Container maxWidth='lg'>
        <Box className='footer-menu'>
          <div className='logo'>
            <img src={logo} alt='website logo' />
            <p>
              Get ready for unforgettable experiences and book your tickets now
              on our website for the hottest events in town!
            </p>
          </div>
          <div className='sub-menu sitemap'>
            <h4>Customer</h4>
            <ul>
              <li>
                <Link
                  to={userInfo ? "/dashboard/orders" : "/signin"}
                  className='nav-item'
                >
                  My Tickets
                </Link>
              </li>
              <li>
                <Link to='/events' className='nav-item'>
                  Explore Events
                </Link>
              </li>
              <li>
                <Link to='/' className='nav-item'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className='sub-menu account'>
            <h4>Seller</h4>
            <ul>
              <li>
                <Link
                  to={userInfo ? "/dashboard" : "/signin"}
                  className='nav-item'
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to={
                    userInfo && userInfo.isSeller
                      ? "/dashboard/tickets/add"
                      : "/"
                  }
                  className='nav-item'
                >
                  Add Ticket
                </Link>
              </li>
              <li>
                <Link
                  to={userInfo && userInfo.isSeller ? "/dashboard/orders" : "/"}
                  className='nav-item'
                >
                  Orders
                </Link>
              </li>
            </ul>
          </div>
          <div className='sub-menu subscribe'>
            <h4>Join Us</h4>
            <ul>
              <li>
                <Link
                  to={userInfo ? "/dashboard/profile" : "/signin"}
                  className='nav-item'
                >
                  Customer Account
                </Link>
              </li>
              <li>
                <Link
                  to={userInfo ? "/dashboard/profile" : "/signin"}
                  className='nav-item'
                >
                  Seller Account
                </Link>
              </li>
            </ul>
          </div>
        </Box>
        <hr />
        <p className='copyright'>
          ©2023 Furiosa Ltd t/a Wow Tickets | All Rights Reserved
        </p>
      </Container>
    </Box>
  )
}
