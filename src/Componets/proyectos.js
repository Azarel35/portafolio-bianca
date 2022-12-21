import React, { useState } from 'react';
import { Collapse } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useEffect } from 'react';

import Peliculas from './Cards/peliculas';
import Ecommerce from './Cards/ecommerce';
import Restaurant from './Cards/restaurant';
import Tweets from './Cards/tweets';
import '../styles/proyectos.scss';

export default function Proyectos() {
	const [checked, setChecked] = useState(false);
	useEffect(() => {
		setChecked(true);
	}, []);

	return (
		<Box
			sx={{
				width: '100%',
				minHeight: '100vh',
				backgroundColor: 'black',
				flexGrow: 1,
			}}>
			<div className="titulo-proyectos">Proyectos</div>
			<Collapse
				in={checked}
				{...(checked ? { timeout: 2000 } : {})}
				sx={{ backgroundColor: 'black' }}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<Peliculas />
					</Grid>
					<Grid item xs={12} md={6}>
						<Tweets />
					</Grid>
					<Grid item xs={12} md={6}>
						<Restaurant />
					</Grid>
					<Grid item xs={12} md={6}>
						<Ecommerce />
					</Grid>
				</Grid>
			</Collapse>
		</Box>
	);
}
