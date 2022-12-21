import React from 'react';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Collapse } from '@mui/material';

import bianca from '../assets/bianca.jpg';

export default function Image() {
	const [checked, setChecked] = useState(false);
	useEffect(() => {
		setChecked(true);
	}, []);

	return (
		<Box sx={{ display: 'flex', justifyContent: 'center' }}>
			<Collapse
				in={checked}
				{...(checked ? { timeout: 2000 } : {})}
				sx={{
					backgroundColor: 'black',
				}}>
				<img
					src={bianca}
					alt="some value"
					style={{
						width: '200px',
						height: '200px',
						borderRadius: '50%',
						objectFit: 'cover',
						transition: '1s',
					}}
				/>
			</Collapse>
		</Box>
	);
}
