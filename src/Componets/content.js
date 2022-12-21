import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Collapse } from '@mui/material';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import ButtonPdf from '../Componets/buttonPdf';

import '../styles/Content.scss';
import fondo from '../assets/fondo.jpg';

export default function Content() {
	const [checked, setChecked] = useState(false);
	useEffect(() => {
		setChecked(true);
	}, []);

	return (
		<Box
			sx={{
				width: '100%',
				minHeight: '100vh',
				backgroundImage: `url(${fondo})`,
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}>
			<Collapse
				in={checked}
				{...(checked ? { timeout: 2000 } : {})}
				sx={{ backgroundColor: 'black' }}>
				<div className="contenido-bianca">Bianca Bravo</div>

				<div className="contenedor-segundo">Desarrollador Front-end</div>
			</Collapse>
			<Collapse
				in={checked}
				{...(checked ? { timeout: 2000 } : {})}
				sx={{ backgroundColor: 'black' }}>
				<div className="contenedor-links">
					<Link to="/acerca" className="contenedor-tercero">
						ACERCA DE MÍ
					</Link>
					<Link to="/proyectos">
						<div className="contenedor-tercero">PROYECTOS</div>
					</Link>
				</div>
			</Collapse>
			<div className="aqui">
				<ButtonPdf />
			</div>
		</Box>
	);
}
