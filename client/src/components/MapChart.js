import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

// url to a valid topojson file
const geoUrl =
	'https://raw.githubusercontent.com/deldersveld/topojson/master/countries/pakistan/pakistan-provinces.json'

const MapChart = () => {
	return (
		<div style={{ width: '800px', height: '600px' }}>
			<ComposableMap>
				<Geographies geography={geoUrl}>
					{({ geographies }) =>
						geographies.map(geo => (
							<Geography key={geo.rsmKey} geography={geo} />
						))
					}
				</Geographies>
			</ComposableMap>
		</div>
	)
}

export default MapChart
