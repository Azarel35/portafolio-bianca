import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import peliculas from '../../assets/peliculas.jpg';

export default function Peliculas() {
	const styles = {
		'&.MuiButton-text': {
			color: '#ffc0cb',
			fontFamily: 'Barlow Condensed',
			fontSize: '17px',
			'&:hover': {
				color: 'white',
			},
		},
	};

	return (
		<Card sx={{ maxWidth: 645, backgroundColor: 'black', margin: '35px' }}>
			<a
				href="https://lively-daifuku-fb4b83.netlify.app/"
				target="_blank"
				rel="noopener noreferrer">
				<CardMedia component="img" alt="peliculas" image={peliculas} />
			</a>
			<CardContent>
				<div className="titulo-card">Web de Peliculas</div>
				<div className="contenido-card">
					Este proyecto es un simulador de web de peliculas, se hizo con React
					js, Ant Design, y consumo de API.
				</div>
			</CardContent>
			<CardActions>
				<Button
					sx={styles}
					size="small"
					href="https://lively-daifuku-fb4b83.netlify.app/"
					target="_blank">
					Ir a sitio
				</Button>

				<Button
					sx={styles}
					size="small"
					href="https://github.com/Azarel35/ProjectReactMovie"
					target="_blank">
					ir a codigo
				</Button>
			</CardActions>
		</Card>
	);
}
