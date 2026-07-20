import React, { useRef } from 'react';
import { Box } from '@mui/material';

import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';
import PartnerCard from '../components/PartnerCard';

import collaborations from '../data/collaborations.json';

import baseline from '../assets/teal_baseline.webp';

const BrandColabs = () => {
	const footerRef = useRef(null);

	return (
		<>
			<Header type={'light'} footerRef={footerRef} />

			<div className="BRANDCOLABS">
				<Title
					titleName="Brand Collaborations"
					themeColor="teal"
				/>

				<Box
					display="flex"
					flexWrap="wrap"
					justifyContent="center"
					gap={3}
					sx={{
						maxWidth: '1400px',
						margin: '0 auto',
						padding: '2rem',
					}}
				>
					{collaborations.map((collab) => (
						<PartnerCard
							key={collab.id}
							id={collab.id}
							image={collab.image}
							name={collab.title}
							category={collab.category}
							description={collab.shortDescription}
						/>
					))}
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

export default BrandColabs;