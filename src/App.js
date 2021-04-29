import React, { useState, useEffect } from 'react';
import Card from './components/ProductCard';
import Search from './components/Search';
import Logo from './components/Logo';
import Details from './components/Details';
import LogoImg from './components/LogoML.png';
import './App.css';
import './components/Search.scss';
import './components/Card.scss';
import './components/Logo.scss';

const App = () => {
	const [ products, setProducts ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ value, setValue ] = useState('');
	const [ id, setId ] = useState('');
	const [ view, setView ] = useState('search');
	// const [ cardDetails, setCardDetails ] = useState('');

	useEffect(
		() => {
			fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${value}`).then((res) => res.json()).then((info) => {
				setProducts(info.results);
			});
		},
		[ search, id ]
	);

	const handleClick = () => {
		setSearch(value);
	};

	const handleOnChange = (e) => {
		e.preventDefault();
		// console.log('estas buscando', e.target.value);
		setValue(e.target.value);
	};

	const handleClickInfo = (id) => {
		setId(id);
		setView('detail');
	};

	// useEffect(
	// 	() => {
	// 		fetch(`https://api.mercadolibre.com/items/${id}`).then((res) => res.json()).then((info) => {
	// 			setCardDetails(info.results);
	// 		});
	// 	},
	// 	[ id ]
	// );

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearch(value);
	};

	return (
		<div>
			<Logo logo={LogoImg} />
			<Search
				handleSubmit={handleSubmit}
				inputValue={value}
				handleClick={handleClick}
				handleOnChange={handleOnChange}
			/>
			<div className="App">
				{products.map((product) => {
					return view === 'search' ? (
						<Card handleClickInfo={handleClickInfo} key={product.id} product={product} />
					) : (
						<Details key={product.id} id={product.id} />
					);
				})};
			</div>
		</div>
	);
};

export default App;
