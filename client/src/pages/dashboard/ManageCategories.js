import "chart.js/auto"
import Axios from "axios"
import { Box } from "@mui/material"
import {
  deleteCategory,
  listCategories,
  updateCategory,
  createCategory,
} from "../../actions/categoryActions"
import {
  CATEGORY_ADD_RESET,
  CATEGORY_DELETE_RESET,
  CATEGORY_UPDATE_RESET,
} from "../../constants/categoryConstants"
import Button from "@mui/material/Button"
import Modal from "../../components/Modal"
import { useEffect, useState } from "react"
import LoadingBox from "../../components/LoadingBox"
import MessageBox from "../../components/MessageBox"
import { useSelector, useDispatch } from "react-redux"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import DashboardHeader from "../../components/DashboardHeader"

function ManageCategories() {
  const dispatch = useDispatch()

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")

  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  const categoryList = useSelector((state) => state.categoryList)
  const { loading, error, categories } = categoryList

  const categoryCreate = useSelector((state) => state.categoryCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    category: createdCategory,
  } = categoryCreate


  const categoryDelete = useSelector((state) => state.categoryDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = categoryDelete

  const categoryUpdate = useSelector((state) => state.categoryUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = categoryUpdate

  const [loadingUpload, setLoadingUpload] = useState(false)
  const [errorUpload, setErrorUpload] = useState("")

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: CATEGORY_ADD_RESET })
    }
    if (successDelete) {
      dispatch({ type: CATEGORY_DELETE_RESET })
    }
    if (successUpdate) {
      dispatch({ type: CATEGORY_UPDATE_RESET })
    }
    dispatch(listCategories())
  }, [dispatch, successCreate, successDelete, successUpdate])

  const uploadFileHandler = async (e, params, newCategory) => {
    const file = e.target.files[0]
    const bodyFormData = new FormData()
    bodyFormData.append("image", file)
    setLoadingUpload(true)
    try {
      const { data } = await Axios.post("/api/uploads", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      })

      if (newCategory) {
        setImage(data)
      } else {
        categories.map((category) => {
          if (category._id === params.row._id) {
            category.image = data
            dispatch(updateCategory(category))
          }
          return 0
        })
      }

      setLoadingUpload(false)
    } catch (error) {
      setErrorUpload(error.message)
      setLoadingUpload(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createCategory({ name, description, image }))
  }

  const handleDelete = (params) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteCategory(params.row._id))
    }
  }

  const handleEdit = (params) => {
    if (window.confirm("Are you sure to update?")) {
      categories.map((category) => {
        if (category._id === params.row._id) {
          category._id = params.row._id
          category.name = params.row.name
          category.description = params.row.description
          category.image = params.row.image
          dispatch(updateCategory(category))
        }
        return 0
      })
    }
  }

  const renderActionButton = (params) => {
    return (
      <strong>
        <input
          type='file'
          id='imageFile'
          label='Choose Image'
          onChange={(e) => {
            uploadFileHandler(e, params, false)
          }}
        ></input>
        <Button
          type='button'
          variant='contained'
          color='primary'
          size='small'
          style={{ marginLeft: 16 }}
          onClick={() => {
            handleEdit(params)
          }}
        >
          Edit
        </Button>
        <Button
          type='button'
          variant='contained'
          color='primary'
          size='small'
          style={{ marginLeft: 16 }}
          onClick={() => {
            handleDelete(params)
          }}
        >
          Delete
        </Button>
      </strong>
    )
  }

  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => <img alt={params.row.name} src={params.value} />,
    },
    {
      field: "name",
      headerName: "Category Name",
      editable: true,
      width: 300,
    },
    {
      field: "description",
      headerName: "Category Description",
      editable: true,
      width: 300,
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      renderCell: renderActionButton,
      width: 500,
    },
  ]

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
              {loading || loadingUpload || loadingDelete || loadingUpdate ? (
                <LoadingBox />
              ) : error || errorUpload || errorDelete || errorUpdate ? (
                <MessageBox variant='danger'>
                  {error
                    ? { error }
                    : errorUpload
                    ? { errorUpload }
                    : errorDelete
                    ? { errorDelete }
                    : { errorUpdate }}
                </MessageBox>
              ) : (
                <DataGrid
                  getRowId={(row) => row._id}
                  rows={categories}
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

            <div className='text-end mt-1'>
              <label className='btn btn-main' htmlFor='modal-1'>
                Add Category
              </label>
            </div>
            {/* Modal */}
            <input className='modal-state' id='modal-1' type='checkbox' />
            <Modal id='modal-1' title='New Category'>
              <form
                name='createCategoryForm'
                action=''
                onSubmit={(e) => {
                  handleSubmit(e)
                }}
              >
                <div className='ui form'>
                  <div className='field'>
                    <label>Name</label>
                    <input
                      type='text'
                      placeholder='Category Name'
                      onChange={(e) => {
                        setName(e.target.value)
                      }}
                    />
                  </div>
                  <div className='field'>
                    <label>Description</label>
                    <textarea
                      rows='2'
                      placeholder='Short Description'
                      style={{ resize: "none" }}
                      onChange={(e) => {
                        setDescription(e.target.value)
                      }}
                    ></textarea>
                  </div>
                  <div className='field'>
                    <label>Category Image</label>
                    <div className='drop-files'>
                      <input
                        type='file'
                        id='imageFile'
                        label='Choose Image'
                        onChange={(e) => {
                          uploadFileHandler(e, null, true)
                        }}
                      ></input>
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
