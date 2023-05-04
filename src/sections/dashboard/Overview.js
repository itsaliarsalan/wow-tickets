import DashboardContent from '../../components/DashboardContent'
import 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import BtnDropdown from '../../components/BtnDropdown'

const Overview = () => {
	return (
		<DashboardContent>
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
				</div>
				<aside className='side-content'>
					<div className='card-primary'>
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
		</DashboardContent>
	)
}

export default Overview
