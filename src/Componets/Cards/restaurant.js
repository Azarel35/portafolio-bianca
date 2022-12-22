import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import restaurant from '../../assets/restaurant.jpg';

export default function Restaurant() {
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
				href="https://superb-speculoos-95c47e.netlify.app/"
				target="_blank"
				rel="noopener noreferrer">
				<CardMedia component="img" alt="restaurant" image={restaurant} />
			</a>
			<CardContent>
				<div className="titulo-card">Devcamp´s</div>
				<div className="contenido-card">
					Este proyecto es una pagina creada con HTML y CSS, fue el primer
					proyecto.
				</div>
			</CardContent>
			<CardActions>
				<Button
					sx={styles}
					size="small"
					href="https://superb-speculoos-95c47e.netlify.app/"
					target="_blank">
					Ir a sitio
				</Button>

				<Button
					sx={styles}
					size="small"
					href="https://github.com/Azarel35/Project-devcamp"
					target="_blank">
					ir a codigo
				</Button>
			</CardActions>
		</Card>
	);
}
