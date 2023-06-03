import 'chart.js/auto'
import { useEffect } from "react"
import { Box } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { listVenues } from "../../actions/venueActions"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import DashboardHeader from "../../components/DashboardHeader"
import LoadingBox from "../../components/LoadingBox"
import MessageBox from "../../components/MessageBox"

function Venues() {
  const columns = [
    { field: "_id", headerName: "ID", width: 10 },
    {
      field: "image",
      headerName: "Venue Image",
      width: 150,
      renderCell: (params) => <img alt={params.row.name} src={params.value} />,
    },
    {
      field: "name",
      headerName: "Venue Name",
      width: 80,
      editable: true,
    },
    {
      field: "streetAddress",
      headerName: "Street Address",
      width: 200,
      editable: true,
    },
    {
      field: "city",
      headerName: "City/Town",
      width: 200,
      editable: true,
    },
    {
      field: "state",
      headerName: "State/Province",
      width: 200,
      editable: true,
    },
    {
      field: "postalCode",
      headerName: "Zip/Postal Code",
      width: 100,
      editable: true,
    },

    {
      field: "country",
      headerName: "Country",
      width: 200,
      editable: true,
    },
  ]

  const dispatch = useDispatch()
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  const venueList = useSelector((state) => state.venueList)
  const { loading, error, venues } = venueList

  useEffect(() => {
    dispatch(listVenues())
  }, [dispatch])
  return (
    <Box sx={{ margin: "30px 0" }}>
      <DashboardHeader
        title='Venues'
        links={[
          { name: "Home", route: "/dashboard" },
          { name: "Audience", route: "./" },
        ]}
      />
      <section className='manage-categories'>
        <div className='content'>
          <div className='main'>
            <div className='card-primary'>
              {loading ? (
                <LoadingBox />
              ) : error ? (
                <MessageBox variant='danger'>{error}</MessageBox>
              ) : (
                <DataGrid
                  getRowId={(row) => row._id}
                  rows={venues}
                  columns={columns}
                  pageSize={6}
                  sx={{ border: "0" }}
                  slots={{
                    toolbar: GridToolbar,
                  }}
                  // checkboxSelection={true}
                  rowsPerPageOptions={[10]}
                  getRowHeight={() => "auto"}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </Box>
  )
}
export default Venues
