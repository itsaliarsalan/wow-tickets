import 'chart.js/auto'
import DashboardHeader from '../../components/DashboardHeader'
import Modal from '../../components/Modal'
import DropFiles from '../../components/DropFiles'

function ManageCategories() {
	return (
		<>
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
						<div className='card-primary table'>
							<div className='scroll-x'>
								<table className='ui very basic table unstackable'>
									<thead>
										<tr>
											<th></th>
											<th className=''>
												<input type='checkbox' id='' />
											</th>
											<th>
												Event name <i className='arrow down icon small'></i>
											</th>
											<th>
												Status <i className='arrow down icon small'></i>
											</th>
											<th>
												Manage <i className='arrow down icon small'></i>
											</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td></td>
											<td>
												<input type='checkbox' id='' />
											</td>
											<td>Music</td>
											<td>
												<i className='icon check circle clr-success'></i>Active
											</td>
											<td className='center aligned'>
												<i className='ellipsis vertical icon'></i>
											</td>
											<td></td>
										</tr>
										<tr>
											<td></td>
											<td>
												<input type='checkbox' id='' />
											</td>
											<td>Birthday</td>
											<td>
												<i className='icon check circle clr-success'></i>Active
											</td>
											<td className='center aligned'>
												<i className='ellipsis vertical icon'></i>
											</td>
											<td></td>
										</tr>
										<tr>
											<td></td>
											<td>
												<input type='checkbox' id='' />
											</td>
											<td>Food</td>
											<td>
												<i className='icon times circle clr-danger'></i>Closed
											</td>
											<td className='center aligned'>
												<i className='ellipsis vertical icon'></i>
											</td>
											<td></td>
										</tr>
									</tbody>
								</table>
							</div>
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
		</>
	)
}
export default ManageCategories
