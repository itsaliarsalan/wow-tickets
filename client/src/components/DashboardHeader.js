import Breadcrumb from './Breadcrumb'

function DashboardHeader(props) {
	return (
		<div className='head'>
			<h2>{props.title}</h2>
			<Breadcrumb links={props.links} />
			<hr />
		</div>
	)
}
export default DashboardHeader
