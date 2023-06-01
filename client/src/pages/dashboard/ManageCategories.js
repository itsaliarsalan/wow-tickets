import 'chart.js/auto'
import { useEffect } from "react"
import { Box } from "@mui/material"
import Modal from "../../components/Modal"
import { eventCategories } from "../../data"
import DropFiles from "../../components/DropFiles"
import LoadingBox from "../../components/LoadingBox"
import MessageBox from "../../components/MessageBox"
import { useSelector, useDispatch } from "react-redux"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { listCategories } from "../../actions/categoryActions"
import DashboardHeader from "../../components/DashboardHeader"

function ManageCategories() {
  const dispatch = useDispatch()
  const categoryList = useSelector((state) => state.categoryList)
  const { loading, error, categories } = categoryList

  useEffect(() => {
    dispatch(listCategories())
  }, [dispatch])
  return (
    <Box sx={{ margin: "30px 0" }}>
      <DashboardHeader
        title='Event Categories'
        links={[
          { name: "Home", route: "/dashboard" },
          { name: "Event Categories", route: "./" },
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
                  rows={categories}
                  columns={eventCategories.columns}
                  sx={{ border: "0" }}
                  slots={{
                    toolbar: GridToolbar,
                  }}
                  checkboxSelection={true}
                  owsPerPageOptions={[10]}
                />
              )}
            </div>

            <div className='text-end mt-1'>
              <label className='btn btn-main' htmlFor='modal-1'>
                Add Category
              </label>
            </div>
            <input className='modal-state' id='modal-1' type='checkbox' />
            <Modal id='modal-1' title='New Category'>
              <form action=''>
                <div className='modal-inner'>
                  <div class='ui form'>
                    <div class='field'>
                      <label>Name</label>
                      <input type='text' placeholder='Category Name' />
                    </div>
                    <div class='field'>
                      <label>Description</label>
                      <textarea
                        rows='2'
                        placeholder='Short Description'
                        style={{ resize: "none" }}
                      ></textarea>
                    </div>
                    <div className='field'>
                      <label>Category Image</label>
                      <div className='drop-files'>
                        <DropFiles />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='modal-footer'>
                  <div className=''></div>
                  <button type='submit' className='btn btn-main'>
                    Create Category
                  </button>
                </div>
              </form>
            </Modal>
          </div>
        </div>
      </section>
    </Box>
  )
}
export default ManageCategories
