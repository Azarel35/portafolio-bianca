import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import tweets from '../../assets/tweets.jpg';

export default function Tweets() {
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
			<a href="https://incomparable-caramel-69e3f7.netlify.app/">
				<CardMedia component="img" alt="tweets" image={tweets} />
			</a>

			<CardContent>
				<div className="titulo-card">Tweets</div>
				<div className="contenido-card">
					Este proyecto es un simulador de tweets, se hizo con React js y
					Material UI.
				</div>
			</CardContent>
			<CardActions>
				<Button
					sx={styles}
					size="small"
					href="https://incomparable-caramel-69e3f7.netlify.app/">
					Ir a sitio
				</Button>

				<Button
					sx={styles}
					size="small"
					href="https://github.com/Azarel35/tweets-simulator-react">
					ir a codigo
				</Button>
			</CardActions>
		</Card>
	);
}
