import 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import BtnDropdown from '../../components/BtnDropdown'

const Overview = () => {
	return (
		<>
			<h2>Welcome back, James!</h2>
			<div className='overview'>
				<div className='main'>
					<div className='first-row'>
						<div className='dashboard-card-secondary'>
							<div className='icons'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='30'
									height='30'
									fill='currentColor'
									className='bi bi-wallet2'
									viewBox='0 0 16 16'
								>
									<path d='M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z' />
								</svg>
								<BtnDropdown>
									<ul>
										<li className='btn-dropdown-item'>
											<a href='/'>Test</a>
										</li>
										<li className='btn-dropdown-item'>
											<a href='/'>Another action</a>
										</li>
										<li className='btn-dropdown-item'>
											<a href='/'>Something else here</a>
										</li>
									</ul>
								</BtnDropdown>
							</div>
							<h3>$2023</h3>
							<p>Your Available Balance</p>
						</div>
						<div className='dashboard-card-secondary'>
							<div className='icons'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='30'
									height='30'
									fill='currentColor'
									class='bi bi-calendar-event'
									viewBox='0 0 16 16'
								>
									<path d='M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z' />
									<path d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z' />
								</svg>
								<BtnDropdown>
									<ul>
										<li className='btn-dropdown-item'>
											<a href='/'>Test</a>
										</li>
										<li className='btn-dropdown-item'>
											<a href='/'>Another action</a>
										</li>
										<li className='btn-dropdown-item'>
											<a href='/'>Something else here</a>
										</li>
									</ul>
								</BtnDropdown>
							</div>
							<h3>03</h3>
							<p>Currently Active Events</p>
						</div>
						<div className='dashboard-card-secondary'>
							<div className='icons'>
								<svg
									width='45'
									height='45'
									viewBox='0 0 48 48'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M34 30V28.989C34 27.3382 35.3382 26 36.989 26V26C38.6381 26 39.9756 27.3356 39.978 28.9847L39.99 37.1853C39.9955 40.9473 36.9473 44 33.1853 44H25.6472C21.2342 44 17.0822 41.9088 14.4552 38.363L10.19 32.6062C9.46968 31.6339 9.40592 30.3235 10.0285 29.2858V29.2858C11.0299 27.6168 13.3332 27.3332 14.7096 28.7096L16 30V16C16 14.3431 17.3431 13 19 13V13C20.6569 13 22 14.3431 22 16V27.875V21.0263C22 19.3549 23.3549 18 25.0263 18V18C26.6977 18 28.0526 19.3549 28.0526 21.0263V29V27.8987C28.0526 26.2564 29.384 24.925 31.0263 24.925V24.925C32.6686 24.925 34 26.2564 34 27.8987V30Z'
										stroke='#333'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
									<path
										d='M32 4V12'
										stroke='#333'
										stroke-width='2'
										stroke-linecap='round'
									/>
									<path
										d='M16 20H6V16C8 16 10 14.5 9.97403 12C9.94805 9.5 8 8 6 8V4H42V8C40 8 38.0519 9.5 38.026 12C38 14.5 40 16 42 16V20H28'
										stroke='#333'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
								<BtnDropdown>
									<ul>
										<li className='btn-dropdown-item'>
											<a href='/'>Test</a>
										</li>
										<li className='btn-dropdown-item'>
											<a href='/'>Another action</a>
										</li>
										<li className='btn-dropdown-item'>
											<a href='/'>Something else here</a>
										</li>
									</ul>
								</BtnDropdown>
							</div>
							<h3>23</h3>
							<p>
								Total Tickets <br /> Sold
							</p>
						</div>
						<div className='dashboard-card-secondary'>
							<div className='icons'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='30'
									height='30'
									fill='currentColor'
									className='bi bi-wallet2'
									viewBox='0 0 16 16'
								>
									<path d='M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z' />
								</svg>
								<BtnDropdown>
									<ul>
										<li className='btn-dropdown-item'>
											<a href='/'>Test</a>
										</li>
										<li className='btn-dropdown-item'>
											<a href='/'>Another action</a>
										</li>
										<li className='btn-dropdown-item'>
											<a href='/'>Something else here</a>
										</li>
									</ul>
								</BtnDropdown>
							</div>
							<h3>$2023</h3>
							<p>Your Available Balance</p>
						</div>
					</div>
					<div className='card-primary sales'>
						<Chart
							type='line'
							data={{
								labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
								datasets: [
									{
										label: '# of Views',
										data: [12, 19, 3, 5, 2, 3],
										borderWidth: 1,
									},
									{
										label: '# of Sales',
										data: [6, 12, 0, 3, 1, 2],
										borderWidth: 1,
									},
								],
							}}
							options={{ responsive: true, maintainAspectRatio: true }}
						/>
					</div>
					<div className='card-primary recent-sales'>
						<h4>Recent Sales</h4>
						<div className='table-wrapper'>
							<table className='primary'>
								<colgroup>
									<col style={{ width: '10%' }} />
									<col style={{ width: '40%' }} />
									<col style={{ width: '30%' }} />
									<col style={{ width: '20%' }} />
								</colgroup>
								<tbody>
									<tr>
										<td>
											<img
												className='profile-picture'
												src='https://xsgames.co/randomusers/assets/avatars/female/1.jpg'
												alt='profile'
											/>
										</td>
										<td>hannahmorgans@gmail.com</td>
										<td>Nightmare Fantasy</td>
										<td>25$</td>
										<td>1:24 PM</td>
									</tr>
									<tr>
										<td>
											<img
												className='profile-picture'
												src='https://xsgames.co/randomusers/assets/avatars/female/2.jpg'
												alt='profile'
											/>
										</td>
										<td>bennieakemon@gmail.com</td>
										<td>Nightmare Fantasy</td>
										<td>25$</td>
										<td>3:48 PM</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<aside className='side-content'>
					<div className='card-primary'>
						<h4>Customers Overview</h4>
						<Chart
							type='pie'
							data={{
								labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
								datasets: [
									{
										label: '# of Views',
										data: [12, 19, 3, 5, 2, 3],
										borderWidth: 1,
									},
									{
										label: '# of Sales',
										data: [6, 12, 0, 3, 1, 2],
										borderWidth: 1,
									},
								],
							}}
							options={{ responsive: true, maintainAspectRatio: true }}
						/>
					</div>
					<div className='card-primary'>
						<h4>Card Placeholders</h4>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
							fugit corporis ea incidunt, officiis odit recusandae repellendus
							tempore! A, ad!
						</p>
					</div>
				</aside>
			</div>
		</>
	)
}

export default Overview
