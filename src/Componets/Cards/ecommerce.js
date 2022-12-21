import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import ecommerce from '../../assets/ecommerce.jpg';

export default function Ecommerce() {
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
			<a href="https://github.com/Azarel35/bianca-bravo-capstone-frontend">
				<CardMedia component="img" alt="ecommerce" image={ecommerce} />
			</a>
			<CardContent>
				<div className="titulo-card">E-commerce</div>
				<div className="contenido-card">
					Este fue un proyecto final es un simulador de e-commerce, se creó el
					back-end con Python, Flask, SQLite, también una API para ser consumida
					por el front-end con React js.
				</div>
			</CardContent>
			<CardActions>
				<Button
					sx={styles}
					size="small"
					href="https://github.com/Azarel35/bianca-bravo-capstone-frontend">
					Ir a codigo front-end
				</Button>

				<Button
					sx={styles}
					size="small"
					href="https://github.com/Azarel35/bianca-ecommerce-backend">
					ir a codigo back-end
				</Button>
			</CardActions>
		</Card>
	);
}
