import { Box } from "@mui/material"
import Breadcrumb from "../Breadcrumb"

function DashboardHeader({ title, links, description, sx, children }) {
  return (
    <Box>
      <Box
        className='head'
        sx={{
          marginTop: 5,
          ...sx,
          ...(children && {
            display: { md: "flex" },
            justifyContent: "space-between",
            alignItems: "flex-end",
          }),
        }}
      >
        <Box>
          <h2>{title}</h2>
          {links && <Breadcrumb links={links} />}
          {description && (
            <p style={{ color: "var(--secondary-typo-color)" }}>
              {description}
            </p>
          )}
        </Box>
        {children && <Box sx={{ marginTop: { xs: 2, md: 0 } }}>{children}</Box>}
      </Box>
      <hr />
    </Box>
  )
}
export default DashboardHeader
