import React, { useState, useEffect } from 'react';
import Card from './components/ProductCard';
import Search from './components/Search';
import Logo from './components/Logo';
import LogoImg from './components/LogoML.png';
import './App.css';
import './components/Search.scss';
import './components/Card.scss';
import './components/Logo.scss';

const App = () => {
	const [ products, setProducts ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ value, setValue ] = useState([]);
	const [ id, setId ] = useState('');

	useEffect(
		() => {
			fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${value}`).then((res) => res.json()).then((info) => {
				setProducts(info.results);
			});
		},
		[ search, value, id ]
	);

	const handleClick = () => {
		setSearch(value);
	};

	const handleOnChange = (e) => {
		console.log('estas buscando', e.target.value);
		setValue(e.target.value);
	};

	const handleClickInfo = () => {
		setId(console.log('queres ver info del producto'));
	};

	return (
		<div>
			<Logo logo={LogoImg} />
			<Search inputValue={value} handleClick={handleClick} handleOnChange={handleOnChange} />
			<div className="App">
				{products.map((product) => {
					return <Card handleClickInfo={handleClickInfo} key={product.id} product={product} />;
				})};
			</div>
		</div>
	);
};

export default App;
