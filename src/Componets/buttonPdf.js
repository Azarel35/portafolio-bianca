import React from 'react';
import Button from '@mui/material/Button';

export default function ButtonPdf() {
	const onDownload = () => {
		const link = document.createElement('a');
		link.download = `CV-bianca.pdf`;
		link.href = './CV-bianca.pdf';
		link.click();
	};

	const styles = {
		'&.MuiButton-outlined': {
			color: 'white',
			borderColor: 'white',
			fontFamily: 'Barlow Condensed',
			fontSize: '20px',
			'&:hover': {
				color: '#D76A69',
				borderColor: '#D76A69',
			},
		},
	};

	return (
		<Button sx={styles} onClick={onDownload} variant="outlined">
			Descargar CV
		</Button>
	);
}
