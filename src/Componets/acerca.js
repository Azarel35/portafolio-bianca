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
				flexGrow: 1,
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
							2020.He desarrollado más habilidades como Front-End, soy
							autodidacta, creativa y me gusta la resolución de problemas y
							aprender constantemente, por ello estaría encantada de formar
							parte de un equipo y así aportar mis conocimientos y habilidades.
							Éstos son algunos conocimientos y usos en proyectos: HTML, CSS,
							Sass, Bootstrap, JavaScript, jQuery, React.js, PHP:laravel,
							consumo de API Rest, Material UI, Ant Design, Figma, UML, Bases de
							datos SQL y noSQL, Flask con Python, Git entre otros.
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
				<Grid item xs={12} md={8} sx={{ marginBottom: '50px' }}>
					<div className="contenido">
						<a href="mailto:azarelbravo9@gmail.com">azarelbravo9@gmail.com</a>
					</div>
				</Grid>
				<Grid item xs={12} md={8} sx={{ marginBottom: '50px' }}>
					<div className="acerca-footer">
						2022 Portafolio BB | Desarrollo web
					</div>
				</Grid>
			</Grid>
		</Box>
	);
}
