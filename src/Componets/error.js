import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

import '../styles/error.scss';

export default function Error() {
	return (
		<Box
			sx={{
				width: '100%',
				minHeight: '100vh',
				backgroundColor: 'black',
			}}>
			<div className="error">Error</div>

			<div className="error">Pagina no encontrada</div>
			<div className="error">
				<Link to="/" className="error-link">
					Volver
				</Link>
			</div>
		</Box>
	);
}
