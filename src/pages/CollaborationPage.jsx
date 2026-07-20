import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Chip, Button } from '@mui/material';

import Header from '../components/Header';
import Footer from '../components/Footer';

import collaborations from '../data/collaborations.json';

import baseline from '../assets/teal_baseline.webp';

const CollaborationPage = () => {
	const footerRef = useRef(null);
	const { id } = useParams();

	const collaboration = collaborations.find(
		(collab) => collab.id === id
	);

	if (!collaboration) {
		return (
			<>
				<Header type="light" footerRef={footerRef} />
				<Box sx={{ textAlign: 'center', py: 8 }}>
					<Typography variant="h4">
						Collaboration not found
					</Typography>
				</Box>
				<Footer footerRef={footerRef} />
			</>
		);
	}

	return (
		<>
			<Header type="light" footerRef={footerRef} />

			<div className="COLLABORATION">
				<Typography
					sx={{
						color: '#027F7B',
						fontFamily: 'Poppins',
						fontWeight: 600,
						textAlign: 'center',
						fontSize: {
							xs: '2.6rem',
							sm: '3.5rem',
							md: '4rem',
						},
						lineHeight: 1.2,
						wordBreak: 'break-word',
					}}
				>
					{collaboration.title}
				</Typography>

				<Box
					sx={{
						width: '120px',
						height: '4px',
						backgroundColor: '#027F7B',
						margin: {
							xs: '1rem auto 0',
							md: '1.5rem auto 0',
						},
						borderRadius: '2px',
					}}
				/>

				<Box
					sx={{
						maxWidth: '1000px',
						margin: '0 auto',
						padding: '2rem',
					}}
				>
					<img
						src={collaboration.image}
						alt={collaboration.title}
						style={{
							display: 'block',
							width: '100%',
							height: 'auto',
							border: '2px solid #027F7B',
							borderRadius: '10px',
							marginBottom: '2rem',
						}}
					/>
					<Chip
							label={collaboration.category}
							sx={{
								backgroundColor: '#027F7B',
								color: '#fff',
								fontFamily: 'Poppins',
								fontWeight: 500,
								mb: 2,
							}}
					/>

					{/* Right-aligned info */}
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							mb: 5,
						}}
					>
						<Typography
							variant="h6"
							sx={{
								fontFamily: 'Poppins',
								fontWeight: 600,
							}}
						>
							Coupon Code
						</Typography>

						<Typography
							sx={{
								fontFamily: 'Poppins',
								fontWeight: 700,
								fontSize: '1.35rem',
								color: '#027F7B',
								mt: 0.5,
							}}
						>
							20% OFF • NICOLLAB20
						</Typography>

						<Box
							sx={{
								display: 'flex',
								gap: 2,
								flexWrap: 'wrap',
								justifyContent: 'center',
								mt: 3,
							}}
						>
							{collaboration.websites.map((site) => (
								<Button
									key={site.name}
									variant="contained"
									href={site.url}
									target="_blank"
									rel="noopener noreferrer"
									sx={{
										backgroundColor: '#027F7B',
										fontFamily: 'Poppins',
										'&:hover': {
											backgroundColor: '#025F5B',
										},
									}}
								>
									{site.name}
								</Button>
							))}
						</Box>
					</Box>

					{/* Section Heading */}
					<Typography
						variant="h4"
						sx={{
							fontFamily: 'Poppins',
							fontWeight: 700,
							mb: 3,
						}}
					>
						{collaboration.title}
					</Typography>

					{/* Description */}
					<Typography
						variant="body1"
						sx={{
							fontFamily: 'Poppins',
							lineHeight: 2,
							whiteSpace: 'pre-line',
						}}
					>
						{collaboration.description}
					</Typography>
				</Box>

				<div className="baselinediv">
					<img
						className="baseline"
						src={baseline}
						alt="Divider"
					/>
				</div>
			</div>

			<Footer footerRef={footerRef} />
		</>
	);
};

export default CollaborationPage;