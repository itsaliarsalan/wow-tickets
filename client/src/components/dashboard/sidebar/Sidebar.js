import "./Style.css"
import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import DropdownMenu from "./DropdownMenu"
import { Box, Typography } from "@mui/material"

// Icons
import DomainIcon from "@mui/icons-material/Domain"
import PaymentIcon from "@mui/icons-material/Payment"
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined"
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined"
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined"
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined"

function Sidebar() {
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  const [isOpen, setOpen] = useState(false)

  function handleSidebarClass() {
    if (!isOpen) {
      document.documentElement.style.overflow = "hidden"
      setOpen(true)
    } else {
      document.documentElement.style.overflow = "auto"
      setOpen(false)
    }
  }

  return (
    <>
      <Box
        className={isOpen ? "dashboard-menu open" : "dashboard-menu"}
        sx={{
          maxWidth: { xs: "16rem", md: "100%" },
          zIndex: { xs: 10, md: 4 },
        }}
      >
        <Box
          sx={{
            paddingX: 2,
            height: "100%",
            position: "fixed",
            top: 95,
          }}
        >
          <ul className='menu'>
            {userInfo && (
              <>
                {userInfo?.isAdmin && (
                  <>
                    <li className='nav-item'>
                      <Link to='/dashboard' className='nav-link'>
                        <GridViewOutlinedIcon />
                        <Typography variant='body1'>Dashboard</Typography>
                      </Link>
                    </li>
                    <DropdownMenu
                      title='Events'
                      icon={<CalendarTodayOutlinedIcon />}
                    >
                      <li className='dropdown-item'>
                        <Link to='events/add' className='dropdown-link'>
                          <Typography variant='body2' color='text.secondary'>
                            Add Event
                          </Typography>
                        </Link>
                      </li>
                      <li className='dropdown-item'>
                        <Link to='tickets/add' className='dropdown-link'>
                          <Typography variant='body2' color='text.secondary'>
                            Add Ticket
                          </Typography>
                        </Link>
                      </li>
                      <li className='dropdown-item'>
                        <Link to='events/manage' className='dropdown-link'>
                          <Typography variant='body2' color='text.secondary'>
                            Manage Events
                          </Typography>
                        </Link>
                      </li>
                      <li className='dropdown-item'>
                        <Link to='tickets/manage' className='dropdown-link'>
                          <Typography variant='body2' color='text.secondary'>
                            Manage Tickets
                          </Typography>
                        </Link>
                      </li>
                    </DropdownMenu>
                    <DropdownMenu title='Venue' icon={<DomainIcon />}>
                      <li className='dropdown-item'>
                        <Link to='venues/add' className='dropdown-link'>
                          <Typography variant='body2' color='text.secondary'>
                            Add Venue
                          </Typography>
                        </Link>
                      </li>
                      <li className='dropdown-item'>
                        <Link to='venues/manage' className='dropdown-link'>
                          <Typography variant='body2' color='text.secondary'>
                            Manage Venues
                          </Typography>
                        </Link>
                      </li>
                    </DropdownMenu>

                    <li className='nav-item'>
                      <Link to='/dashboard/organizers' className='nav-link'>
                        <GroupOutlinedIcon />
                        <Typography variant='body1'>Organizers</Typography>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/dashboard/users' className='nav-link'>
                        <GroupOutlinedIcon />
                        <Typography variant='body1'>Users</Typography>
                      </Link>
                    </li>
                  </>
                )}
                {userInfo?.isSeller && (
                  <>
                    <li className='nav-item'>
                      <Link to='/dashboard' className='nav-link'>
                        <GridViewOutlinedIcon />
                        <Typography variant='body1'>Dashboard</Typography>
                      </Link>
                    </li>
                    <DropdownMenu
                      title='Events'
                      icon={<CalendarTodayOutlinedIcon />}
                    >
                      <li className='dropdown-item'>
                        <Link to='events/add' className='dropdown-link'>
                          <Typography variant='body2' color='text.secondary'>
                            Add Event
                          </Typography>
                        </Link>
                      </li>
                      <li className='dropdown-item'>
                        <Link to='tickets/add' className='dropdown-link'>
                          <Typography variant='body2' color='text.secondary'>
                            Add Ticket
                          </Typography>
                        </Link>
                      </li>
                      <li className='dropdown-item'>
                        <Link to='events/manage' className='dropdown-link'>
                          <Typography variant='body2' color='text.secondary'>
                            Manage Events
                          </Typography>
                        </Link>
                      </li>
                      <li className='dropdown-item'>
                        <Link to='tickets/manage' className='dropdown-link'>
                          <Typography variant='body2' color='text.secondary'>
                            Manage Tickets
                          </Typography>
                        </Link>
                      </li>
                    </DropdownMenu>
                    <DropdownMenu title='Venue' icon={<DomainIcon />}>
                      <li className='dropdown-item'>
                        <Link to='venues/add' className='dropdown-link'>
                          <Typography variant='body2' color='text.secondary'>
                            Add Venue
                          </Typography>
                        </Link>
                      </li>
                      <li className='dropdown-item'>
                        <Link to='venues/manage' className='dropdown-link'>
                          <Typography variant='body2' color='text.secondary'>
                            Manage Venues
                          </Typography>
                        </Link>
                      </li>
                    </DropdownMenu>

                    <li className='nav-item'>
                      <Link to='/dashboard/payments' className='nav-link'>
                        <PaymentIcon />
                        <Typography variant='body1'>Payments</Typography>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link to='/' className='nav-link'>
                        <QrCodeScannerOutlinedIcon />
                        <Typography variant='body1'>QR Data Sync</Typography>
                      </Link>
                    </li>
                  </>
                )}
                <li className='nav-item'>
                  <Link to='/dashboard/orders' className='nav-link'>
                    <ReceiptOutlinedIcon />
                    <Typography variant='body1'>Orders</Typography>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </Box>
      </Box>
      <div
        className={
          isOpen ? "dashboard-menu-overlay visible" : "dashboard-menu-overlay"
        }
        onClick={handleSidebarClass}
      ></div>

      {/* Button */}
      <aside
        className={isOpen ? "btn-dashboard open" : "btn-dashboard"}
        onClick={handleSidebarClass}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='45'
          height='45'
          viewBox='0 0 16 16'
        >
          <circle cx='8' cy='8' r='7' fill='white' />
          <path
            d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z'
            fill='#aa1894'
          ></path>
        </svg>
      </aside>
    </>
  )
}

export default Sidebar
