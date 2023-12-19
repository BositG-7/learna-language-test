import { FunctionComponent } from 'react';
import { Box, Typography } from '@mui/material';

import Footer from 'components/footer';
import Navbar from 'components/navbar';

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
	const i = 0;

	return (
		<>
			<Navbar />
			<Box display="flex" mt={13} flexDirection="column" gap={3} alignItems="center" height="calc(100vh - 350px)">
				<Box>
					<Typography color="#173857">Home / About</Typography>
				</Box>
				<Box>
					<Typography
						variant="h2"
						sx={{
							fontWeight: 400,
							fontFamily: 'Rockwell, sans-serif',
							fontSize: '32px',
							color: '#173857'
						}}>
						Saving the World One Language at a Time
					</Typography>
				</Box>
				<Box>
					<Typography
						sx={{
							fontSize: '14px',
							lineHeight: 1.4,
							color: '#173857',
							maxWidth: '980px'
						}}>
						Learnalanguage.com is owned and operated by Net Train Limited (Unit 7, 11/F Prosperity Place, 6 Shing Yip St Kwun Tong Kln, Hong
						Kong). It exists to help people bridge communication gaps and to give back to the world in which we live.
					</Typography>
				</Box>
			</Box>
			<Footer />
		</>
	);
};

export default About;
