const LocationOptions = ({ handleChangeSelect }) => {
	return (
		<label>
			Ubicacion
			<select value="variable selectedLocation" onChange={handleChangeSelect}>
				<option value="Mendoza">Mendoza</option>
				<option value="Buenos Aires">Buenos Aires</option>
			</select>
		</label>
	);
};

export default LocationOptions;
