import React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import Image from './Image';
import '../styles/acerca.scss';

export default function Acerca() {
	return (
		<Box
			sx={{
				width: '100%',
				minHeight: '100vh',
				backgroundColor: 'black',
			}}>
			<Image />
			<Grid
				container
				spacing={2}
				sx={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
				<Grid item xs={8}>
					<div className="titulo">Acerca de mí</div>
				</Grid>

				<Grid item xs={8}>
					<div className="contenido">
						<div>
							Hola! mi nombre es Bianca Bravo, estudie en Bottega University,
							obtuve conocimientos como desarrollador Full Stack desde el año
							2020.
							<div></div>
							Me gusta más el lado del front-end y he desarrollado más
							habilidades en ello, soy autodidacta, creativa y me gusta la
							resolución de problemas y aprender lo que se tenga que aprender
							para su ejecución, por ello estaría encantada de formar parte de
							un equipo y así aportar mis conocimientos y habilidades.
						</div>
					</div>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={2}
				sx={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
				<Grid item xs={12} md={8}>
					<div className="contenido">
						<a
							href="https://www.parchment.com/u/award/19a7b2717609e428b9814bc7198d3eaf "
							target="_blank"
							rel="noopener noreferrer">
							ir a CERTIFICADO
						</a>
					</div>
				</Grid>
				<Grid item xs={12} md={8}>
					<div className="contenido">
						<a
							href="https://api.whatsapp.com/send?phone=5213339671320"
							target="_blank"
							rel="noopener noreferrer">
							<WhatsAppIcon
								sx={{
									color: 'white',
									'&:hover': {
										color: '#ffc0cb',
										borderColor: '#ffc0cb',
									},
								}}
							/>
						</a>

						<div className="contenido">3339671320</div>
					</div>
				</Grid>
				<Grid item xs={12} md={8}>
					<div className="contenido">azarelbravo9@gmail.com</div>
				</Grid>
			</Grid>
		</Box>
	);
}
