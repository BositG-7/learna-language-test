import { FunctionComponent } from 'react';
import { Box, Typography } from '@mui/material';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
	const i = 0;

	return (
		<Box p="20px 50px" display="flex" justifyContent="space-between" alignItems="center" gap={8} height={250} bgcolor="#173857" width="100%">
			<Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={5}>
				<img src="https://www.learnalanguage.com/themes/demo/assets/images/learnlanguage.svg" alt="" />
				<Typography sx={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)' }}>© 2023 Net Train Limited. All rights reserved</Typography>
			</Box>
			<Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={5}>
				<Typography
					sx={{
						fontSize: '14px',
						color: '#28c3dd',
						fontFamily: 'Rockwell, sans-serif'
					}}>
					Learn Language Online:
				</Typography>
				<Box ml={5} justifyContent="center" alignItems="center" display="flex" gap={5}>
					<Typography
						sx={{
							fontSize: '13px',
							display: 'block',
							color: '#fff'
						}}>
						English
					</Typography>
					<Typography
						sx={{
							fontSize: '13px',
							display: 'block',
							color: '#fff'
						}}>
						Turkish
					</Typography>
					<Typography
						sx={{
							fontSize: '13px',
							display: 'block',
							color: '#fff'
						}}>
						German
					</Typography>
				</Box>

				<Box ml={5} justifyContent="center" alignItems="center" display="flex" gap={5}>
					<Typography
						sx={{
							fontSize: '13px',
							display: 'block',
							color: '#fff'
						}}>
						French
					</Typography>
					<Typography
						sx={{
							fontSize: '13px',
							display: 'block',
							color: '#fff'
						}}>
						Spanish
					</Typography>
					<Typography
						sx={{
							fontSize: '13px',
							display: 'block',
							color: '#fff'
						}}>
						Italian
					</Typography>
				</Box>
			</Box>

			<Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={5}>
				<Typography
					sx={{
						fontSize: '14px',
						color: '#28c3dd',
						fontFamily: 'Rockwell, sans-serif'
					}}>
					LearnLanguages:
				</Typography>
				<Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={3}>
					<Typography
						sx={{
							fontSize: '13px',
							display: 'block',
							color: '#fff'
						}}>
						About Us
					</Typography>
					<Typography
						sx={{
							fontSize: '13px',
							display: 'block',
							color: '#fff'
						}}>
						Contact Us
					</Typography>
				</Box>
			</Box>
			<Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={5}>
				<Typography
					sx={{
						fontSize: '14px',
						color: '#28c3dd',
						fontFamily: 'Rockwell, sans-serif'
					}}>
					Contact us by Email
				</Typography>

				<Typography
					sx={{
						fontSize: '13px',
						display: 'block',
						color: '#fff'
					}}>
					support@learnlanguage.com
				</Typography>
			</Box>
		</Box>
	);
};

export default Footer;
