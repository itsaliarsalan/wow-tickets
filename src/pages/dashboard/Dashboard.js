import Sidebar from '../../components/Sidebar'
import Overview from '../../sections/dashboard/Overview'

function Dashboard() {
	return (
		<div className='d-flex'>
			<Sidebar />
			<Overview />
		</div>
	)
}

export default Dashboard
