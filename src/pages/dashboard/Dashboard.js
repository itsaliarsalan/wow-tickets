import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import DashboardContent from '../../components/DashboardContent'

function Dashboard() {
	return (
		<div className='d-flex'>
			<Sidebar />
			<DashboardContent>
				<Outlet />
			</DashboardContent>
		</div>
	)
}

export default Dashboard
