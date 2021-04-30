import React, { useState, useEffect } from 'react';
import Results from './components/Results';
import Search from './components/Search';
import Logo from './components/Logo';
import Detail from './components/Detail';
import LogoImg from './components/LogoML.png';
import Shipping from './components/Shipping';
import LocationOptions from './components/LocationOptions';
import Cost from './components/Cost';
import Condition from './components/Condition';
import Brand from './components/Brand';
import './App.css';
import './components/Search.scss';
import './components/Card.scss';
import './components/Logo.scss';
import './components/Filters.scss';

const App = () => {
	// const [ loading, setLoading ] = useState(false);
	const [ products, setProducts ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ value, setValue ] = useState('');
	const [ id, setId ] = useState('');
	const [ view, setView ] = useState('search');
	const [ cardDetail, setCardDetail ] = useState('');
	// const [ description, setDescription ] = useState('');
	// const [ filteredProdcuts, setFilteredProducts ] = useState([]);
	// const [ location, setLocation ] = useState([]);
	useEffect(
		() => {
			// setLoading(true);
			fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${value}`).then((res) => res.json()).then((info) => {
				setProducts(info.results);
			});
			// setLoading(false);
		},
		[ search ]
	);

	const handleClick = () => {
		setSearch(value);
	};

	const handleOnChange = (e) => {
		e.preventDefault();
		setValue(e.target.value);
	};

	useEffect(
		() => {
			fetch(`https://api.mercadolibre.com/items/${id}`).then((res) => res.json()).then((info) => {
				setCardDetail(info);
			});
		},
		[ id ]
	);

	const handleClickInfo = (id) => {
		setId(id);
		setView('detail');
	};

	// useEffect(() => {
	// 	fetch(`https://api.mercadolibre.com/items/${id}description`).then((res) => res.json()).then((info) => {
	// 		setView(info);
	// 	}, [ id, view ]);
	// });

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearch(value);
	};

	const handleChangeSelect = () => {
		console.log('Filtrando por provincia');
	};

	return (
		<div>
			<Search
				handleSubmit={handleSubmit}
				inputValue={value}
				handleClick={handleClick}
				handleOnChange={handleOnChange}
			/>
			<Logo logo={LogoImg} />
			<section className="Content">
				<div className="Filters">
					<Shipping />
					<LocationOptions handleChangeSelect={handleChangeSelect} />
					<Cost />
					<Condition />
					<Brand />
				</div>
				<div className="App">
					{view === 'search' && <Results products={products} handleClickInfo={handleClickInfo} />}
					{view === 'detail' && <Detail cardDetail={cardDetail} />}
				</div>
			</section>
		</div>
	);
};

export default App;
