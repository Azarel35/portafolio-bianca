import React from 'react';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Componets/NavBar';
import Content from './Componets/content';
import Acerca from './Componets/acerca';
import Proyectos from './Componets/proyectos';
import Error from './Componets/error';

const App = () => {
	return (
		<Box>
			<Router>
				<NavBar />

				<Routes>
					<Route exact path="/" element={<Content />}></Route>
					<Route exact path="/acerca" element={<Acerca />}></Route>
					<Route exact path="/proyectos" element={<Proyectos />}></Route>
					<Route exact path="/*" element={<Error />}></Route>
				</Routes>
			</Router>
		</Box>
	);
};

export default App;
