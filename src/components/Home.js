import React from 'react';

import Sidenav from './Sidenav';
import Posts from './Posts';

const Home = () => (
	<main className="home">
		<Sidenav />
		<Posts />
	</main>
);

export default Home;