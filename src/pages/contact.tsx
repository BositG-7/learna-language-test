import { FunctionComponent } from 'react';
import { Box, Typography } from '@mui/material';

import Footer from 'components/footer';
import Navbar from 'components/navbar';

interface ContactProps {}

const Contact: FunctionComponent<ContactProps> = () => {
	const i = 0;

	return (
		<>
			<Navbar />
			<Box display="flex" flexDirection="column" gap={3} alignItems="center" height="calc(100vh - 350px)">
				<Box>
					<Typography color="#173857">Home / Contact</Typography>
				</Box>

				<Box display="flex" gap={5} justifyContent="center" alignItems="center">
					<Box display="flex" flexDirection="column" justifyContent="center" gap={3}>
						<Typography color="#173857" sx={{ fontSize: '24px' }}>
							Mailing Address
						</Typography>
						<Typography
							color="#173857"
							sx={{
								fontSize: '14px',
								lineHeight: 1.4
							}}>
							Company name: Net Train Limited
						</Typography>
						<Typography
							color="#173857"
							sx={{
								fontSize: '14px',
								lineHeight: 1.4,
								maxWidth: '420px'
							}}>
							Unit 7, 11/F Prosperity Place, 6 Shing Yip St Kwun Tong Kln, Hong Kong
						</Typography>
					</Box>
					<Box display="flex" flexDirection="column" justifyContent="center" gap={3}>
						<Typography color="#173857" sx={{ fontSize: '24px' }}>
							Contact us by Email
						</Typography>

						<Typography
							color="#173857"
							sx={{
								fontSize: '14px',
								color: 'inherit',
								WebkitTextDecorationColor: 'rgba(23, 56, 87, 0.5)',
								textDecorationColor: 'rgba(23, 56, 87, 0.5)',
								WebkitTransition: '0.3s',
								OTransition: '0.3s',
								transition: '0.3s'
							}}>
							support@learnlanguage.com
						</Typography>
					</Box>
				</Box>
			</Box>
			<Footer />
		</>
	);
};

export default Contact;
