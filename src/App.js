import React, { useState, useEffect } from 'react';
import Card from './components/ProductCard';
import Search from './components/Search';
import './App.css';
import './components/Search.scss';
import './components/Card.scss';

const App = () => {
	const [ products, setProducts ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ value, setValue ] = useState([]);

	useEffect(
		() => {
			fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${value}`).then((res) => res.json()).then((info) => {
				setProducts(info.results);
			});
		},
		[ search, value ]
	);

	const handleClick = () => {
		setSearch(value);
	};

	const handleOnChange = (e) => {
		console.log('estas buscando', e.target.value);
		setValue(e.target.value);
	};

	return (
		<div>
			<Search inputValue={value} handleClick={handleClick} handleOnChange={handleOnChange} />
			<div className="App">
				{products.map((product) => {
					return <Card key={product.id} product={product} />;
				})};
			</div>
		</div>
	);
};

export default App;
