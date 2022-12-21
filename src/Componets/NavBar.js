import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar, styled, Avatar, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import bianca from '../assets/bianca.jpg';

const Icons = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '20px',
	[theme.breakpoints.up('sm')]: {
		display: 'flex',
		gap: '10px',
	},
}));

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
	backgroundColor: 'black',
	padding: '10px',
});

const NavBar = () => {
	return (
		<AppBar position="sticky">
			<StyledToolbar>
				<Link to="/">
					<Avatar alt="Bianca Bravo" src={bianca}></Avatar>
					<KeyboardArrowUpIcon
						sx={{
							color: 'white',
							'&:hover': {
								color: '#ffc0cb',
								borderColor: '#ffc0cb',
							},
						}}
					/>
				</Link>

				<StyledToolbar>
					<Icons>
						<a
							href="https://github.com/Azarel35"
							target="_blank"
							rel="noopener noreferrer">
							<GitHubIcon
								sx={{
									color: 'white',
									'&:hover': {
										color: '#ffc0cb',
										borderColor: '#ffc0cb',
									},
								}}
							/>
						</a>

						<a
							href="https://www.linkedin.com/in/bianca-bravo-desarrollo-web-0a0bb0239/"
							target="_blank"
							rel="noopener noreferrer">
							<LinkedInIcon
								sx={{
									color: 'white',
									'&:hover': {
										color: '#ffc0cb',
										borderColor: '#ffc0cb',
									},
								}}
							/>
						</a>
						<a
							href="https://www.instagram.com/bianca.bravo.50/"
							target="_blank"
							rel="noopener noreferrer">
							<InstagramIcon
								sx={{
									color: 'white',
									'&:hover': {
										color: '#ffc0cb',
										borderColor: '#ffc0cb',
									},
								}}
							/>
						</a>
					</Icons>
				</StyledToolbar>
			</StyledToolbar>
		</AppBar>
	);
};

export default NavBar;
