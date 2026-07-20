import React from 'react';
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Button,
	Chip,
	Stack,
} from '@mui/material';
import { Link } from 'react-router-dom';

const PartnerCard = ({
	id,
	image,
	name,
	category = 'Official Knowledge Partner',
	description,
}) => {
	return (
		<Card
			sx={{
				width: { xs: '95%', md: '34%' },
				margin: 4,
				padding: '1rem',
				boxShadow: 3,
				borderRadius: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 580,
			}}
		>
			<CardMedia
				component="img"
				image={image}
				alt={name}
				sx={{
					borderRadius: 1,
					height: { xs: 180, md: 200 },
					borderStyle: 'solid',
					borderWidth: 2,
					borderColor: '#027F7B',
				}}
			/>

			<CardContent
				sx={{
					display: 'flex',
					flexDirection: 'column',
					flexGrow: 1,
					paddingX: 0,
				}}
			>
				<Stack direction="row" spacing={1} mb={2}>
					<Chip
						label={category}
						sx={{
							backgroundColor: '#027F7B',
							color: '#fff',
							fontFamily: 'Poppins',
							fontWeight: 500,
						}}
					/>
				</Stack>

				<Typography
					variant="h5"
					sx={{
						fontFamily: 'Poppins',
						fontWeight: 600,
						mb: 2,
					}}
				>
					{name}
				</Typography>

				<Typography
					variant="body1"
					color="text.secondary"
					sx={{
						fontFamily: 'Poppins',
						flexGrow: 1,
						lineHeight: 1.8,
					}}
				>
					{description}
				</Typography>

				<Button
					component={Link}
					to={`/brand-colabs/${id}`}
					variant="contained"
					sx={{
						mt: 'auto',
						width: '100%',
						fontFamily: 'Poppins',
						backgroundColor: '#027F7B',
						'&:hover': {
							backgroundColor: '#025F5B',
						},
					}}
				>
					Learn More
				</Button>
			</CardContent>
		</Card>
	);
};

export default PartnerCard;