import 'chart.js/auto'
import DashboardHeader from '../../components/DashboardHeader'
import Modal from '../../components/Modal'
import DropFiles from '../../components/DropFiles'
import { Box } from '@mui/material'
import { eventCategories } from '../../data'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

function ManageCategories() {
	return (
		<Box sx={{ margin: '30px 0' }}>
			<DashboardHeader
				title='Event Categories'
				links={[
					{ name: 'Home', route: '/dashboard' },
					{ name: 'Event Categories', route: './' },
				]}
			/>
			<section className='manage-categories'>
				<div className='content'>
					<div className='main'>
						<div className='card-primary'>
							<DataGrid
								rows={eventCategories.rows}
								columns={eventCategories.columns}
								sx={{ border: '0' }}
								slots={{
									toolbar: GridToolbar,
								}}
								checkboxSelection={true}
							/>
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
												style={{ resize: 'none' }}
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
