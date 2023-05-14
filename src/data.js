import thumbnail1 from './assets/event-thumbnail-01.jpg'
import thumbnail2 from './assets/event-thumbnail-02.jpg'
import thumbnail3 from './assets/event-thumbnail-03.jpg'

export const events = [
	{
		id: 1,
		title: 'Event One',
		image: thumbnail1,
		date: 'April 2023',
		venue: 'London',
		url: '#',
	},
	{
		id: 2,
		title: 'Event Two',
		image: thumbnail2,
		date: 'April 2023',
		venue: 'London',
		url: '#',
	},
	{
		id: 3,
		title: 'Event Three',
		image: thumbnail3,
		date: 'April 2023',
		venue: 'London',
		url: '#',
	},
	{
		id: 4,
		title: 'Event Four',
		image: thumbnail1,
		date: 'April 2023',
		venue: 'London',
		url: '#',
	},
	{
		id: 5,
		title: 'Event Four',
		image: thumbnail2,
		date: 'April 2023',
		venue: 'London',
		url: '#',
	},
	{
		id: 6,
		title: 'Event Four',
		image: thumbnail3,
		date: 'April 2023',
		venue: 'London',
		url: '#',
	},
]

export const recentSales = {
	columns: [
		{ field: 'id', headerName: 'ID', width: 10 },
		{
			field: 'profilePic',
			headerName: 'Picture',
			width: 100,
			renderCell: params => (
				<img
					src={params.value}
					alt={`Profile pic of ${params.row.firstName} ${params.row.lastName}`}
					style={{ width: 50, height: 'auto', padding: '2px' }}
					className='profile-picture'
				/>
			),
		},
		{
			field: 'fullName',
			headerName: 'Full name',
			width: 150,
			editable: true,
		},
		{
			field: 'email',
			headerName: 'Email',
			width: 150,
			editable: true,
		},
	],
	rows: [
		{
			id: 1,
			profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
			fullName: 'Snow White',
			email: 'snowwhiteizm@gmail.com',
		},
		{
			id: 2,
			profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
			fullName: 'Cinderella',
			email: 'cinderellamagic@gmail.com',
		},
		{
			id: 3,
			profilePic: 'https://randomuser.me/api/portraits/men/3.jpg',
			fullName: 'Prince Charming',
			email: 'princecharming2022@gmail.com',
		},
		{
			id: 4,
			profilePic: 'https://randomuser.me/api/portraits/women/4.jpg',
			fullName: 'Ariel Mermaid',
			email: 'arielmermaid@disney.com',
		},
		{
			id: 5,
			profilePic: 'https://randomuser.me/api/portraits/men/5.jpg',
			fullName: 'Aladdin',
			email: 'aladdinmagic@gmail.com',
		},
		{
			id: 6,
			profilePic: 'https://randomuser.me/api/portraits/women/6.jpg',
			fullName: 'Jasmine',
			email: 'jasminemagic@gmail.com',
		},
		{
			id: 7,
			profilePic: 'https://randomuser.me/api/portraits/men/7.jpg',
			fullName: 'Tarzan',
			email: 'tarzanadventurer@gmail.com',
		},
		{
			id: 8,
			profilePic: 'https://randomuser.me/api/portraits/women/8.jpg',
			fullName: 'Belle',
			email: 'bellemagic@gmail.com',
		},
		{
			id: 9,
			profilePic: 'https://randomuser.me/api/portraits/men/9.jpg',
			fullName: 'Hercules',
			email: 'herculesstrong@gmail.com',
		},
		{
			id: 10,
			profilePic: 'https://randomuser.me/api/portraits/women/10.jpg',
			fullName: 'Pocahontas',
			email: 'pocahontasnative@gmail.com',
		},
		{
			id: 11,
			profilePic: 'https://randomuser.me/api/portraits/men/11.jpg',
			fullName: 'Simba',
			email: 'simbalionking@gmail.com',
		},
		{
			id: 12,
			profilePic: 'https://randomuser.me/api/portraits/women/12.jpg',
			fullName: 'Mulan',
			email: 'mulanwarrior@gmail.com',
		},
		{
			id: 13,
			profilePic: 'https://randomuser.me/api/portraits/men/13.jpg',
			fullName: 'Peter Pan',
			email: 'peterpanmagic@gmail.com',
		},
		{
			id: 14,
			profilePic: 'https://randomuser.me/api/portraits/women/14.jpg',
			fullName: 'Aurora Sleeping Beauty',
			email: 'aurorasleepingbeauty@gmail.com',
		},
	],
}

export const eventDetails = {
	columns: [
		{ field: 'id', headerName: 'ID', width: 10 },
		{
			field: 'eventName',
			headerName: 'Event name',
			width: 150,
			editable: true,
		},
		{
			field: 'status',
			headerName: 'Status',
			width: 150,
			editable: true,
		},
		{
			field: 'venue',
			headerName: 'Venue',
			width: 150,
			editable: true,
		},
		{
			field: 'startDate',
			headerName: 'Start Date',
			width: 150,
			editable: true,
		},
		{
			field: 'sales',
			headerName: 'Sales',
			width: 150,
			editable: true,
		},
	],
	rows: [
		{
			id: 1,
			eventName: 'Nightmare Fantasy',
			status: 'Active',
			venue: 'Venue',
			startDate: '13 June, 2023',
			sales: 20,
		},
		{
			id: 2,
			eventName: 'Dreamland Adventure',
			status: 'Inactive',
			venue: 'Auditorium',
			startDate: '21 August, 2023',
			sales: 50,
		},
		{
			id: 3,
			eventName: 'Winter Wonderland',
			status: 'Active',
			venue: 'Outdoor Arena',
			startDate: '26 December, 2023',
			sales: 75,
		},
		{
			id: 4,
			eventName: 'The Great Circus',
			status: 'Active',
			venue: 'Big Top Tent',
			startDate: '10 April, 2024',
			sales: 40,
		},
		{
			id: 5,
			eventName: 'Summer Music Fest',
			status: 'Inactive',
			venue: 'Beachfront Stage',
			startDate: '17 July, 2024',
			sales: 60,
		},
		{
			id: 6,
			eventName: 'Food & Wine Expo',
			status: 'Active',
			venue: 'Convention Center',
			startDate: '21 October, 2024',
			sales: 35,
		},
		{
			id: 7,
			eventName: 'Festival of Lights',
			status: 'Active',
			venue: 'City Park',
			startDate: '10 December, 2024',
			sales: 80,
		},
		{
			id: 8,
			eventName: 'Spring Fashion Show',
			status: 'Inactive',
			venue: 'Fashion Hall',
			startDate: '15 March, 2025',
			sales: 55,
		},
		{
			id: 9,
			eventName: 'Comedy Night Live',
			status: 'Active',
			venue: 'Comedy Club',
			startDate: '27 June, 2025',
			sales: 25,
		},
		{
			id: 10,
			eventName: 'Art & Culture Expo',
			status: 'Inactive',
			venue: 'Museum',
			startDate: '18 September, 2025',
			sales: 45,
		},
	],
}

export const eventCategories = {
	columns: [
		{ field: 'id', headerName: 'ID', width: 10 },
		{
			field: 'categoryName',
			headerName: 'Category Name',
			width: 150,
			editable: true,
		},
		{
			field: 'status',
			headerName: 'Status',
			width: 150,
			editable: true,
		},
		{
			field: 'categoryDescription',
			headerName: 'Category Description',
			width: 250,
			editable: true,
		},
	],
	rows: [
		{
			id: 1,
			categoryName: 'Music',
			status: 'active',
			categoryDescription:
				'All kinds of music festivals and events that include music.',
		},
		{
			id: 2,
			categoryName: 'Food',
			status: 'inactive',
			categoryDescription:
				'Events related to food, such as cooking competitions, food festivals, etc.',
		},
		{
			id: 3,
			categoryName: 'Sports',
			status: 'active',
			categoryDescription:
				'Events related to sports, such as football, basketball, cricket, etc.',
		},
		{
			id: 4,
			categoryName: 'Arts',
			status: 'active',
			categoryDescription:
				'Events related to art, such as painting exhibitions, art fairs, etc.',
		},
		{
			id: 5,
			categoryName: 'Fashion',
			status: 'inactive',
			categoryDescription:
				'Events related to fashion, such as fashion shows, beauty pageants, etc.',
		},
	],
}
