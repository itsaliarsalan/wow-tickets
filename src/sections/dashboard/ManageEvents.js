import { Link } from 'react-router-dom'

function ManageEvents() {
	return (
		<section className='manage-events'>
			<div className='main'>
				<div className='head'>
					<h2>Manage All Events</h2>
					<ul className='breadcrumb'>
						<li>
							<a href='/' className='breadcrumb-link'>
								Home
							</a>
						</li>
						<li className='divider'>&gt;</li>
						<li>
							<a href='/' className='breadcrumb-link'>
								Events
							</a>
						</li>
					</ul>
					<hr />
				</div>
				<div className='card-primary'>
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
										Location <i className='arrow down icon small'></i>
									</th>
									<th>
										Start date <i className='arrow down icon small'></i>
									</th>
									<th>
										Sales <i className='arrow down icon small'></i>
									</th>
									<th>
										Manage <i className='arrow down icon small'></i>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td></td>
									<td>
										<input type='checkbox' id='' />
									</td>
									<td>Music Festival</td>
									<td>
										<i className='icon check circle clr-success'></i>Active
									</td>
									<td>Beach</td>
									<td>14 August</td>
									<td>20</td>
									<td className='center aligned'>
										<i class='ellipsis vertical icon'></i>
									</td>
								</tr>
								<tr>
									<td></td>
									<td>
										<input type='checkbox' id='' />
									</td>
									<td>Art Exhibition</td>
									<td>
										<i className='icon check circle clr-success'></i>Active
									</td>
									<td>Gallery</td>
									<td>28 June</td>
									<td>18</td>
									<td className='center aligned'>
										<i class='ellipsis vertical icon'></i>
									</td>
								</tr>
								<tr>
									<td></td>
									<td>
										<input type='checkbox' id='' />
									</td>
									<td>Nightmare Fantasy</td>
									<td>
										<i className='icon times circle clr-danger'></i>Closed
									</td>
									<td>Haunted House</td>
									<td>28 June</td>
									<td>18</td>
									<td className='center aligned'>
										<i class='ellipsis vertical icon'></i>
									</td>
								</tr>
							</tbody>
							<tfoot className='full-width text-center'>
								<tr>
									<td></td>
									<td colSpan='7'>
										<div className='d-flex'>
											<h5>Showing Results 1 to 10 out of 200</h5>
											<div className='dropdown'>
												<select multiple='' class='form results-dropdown'>
													<option value='AF'>10</option>
													<option value='AX'>20</option>
													<option value='AL'>30</option>
												</select>
												Per Page
											</div>
											<div className='pagination'>
												<i class='angle left icon'></i>
												<i class='angle right icon'></i>
											</div>
										</div>
									</td>
									<td></td>
								</tr>
							</tfoot>
						</table>
					</div>
				</div>
				<div className='mt-2 text-end'>
					<Link to='/dashboard/new-event' className='btn btn-main'>
						Create New Event
					</Link>
				</div>
			</div>
		</section>
	)
}
export default ManageEvents
