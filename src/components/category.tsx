import { FunctionComponent } from 'react';
import { Box, Typography } from '@mui/material';

interface CategoryProps {}

const Category: FunctionComponent<CategoryProps> = () => {
	const i = 0;

	return (
		<>
			<Box flexDirection="column" height="fit-content" mt={10} p={24} pt={0} display="flex" justifyItems="center" alignItems="center" width="100%">
				<Typography
					sx={{
						fontWeight: 400,
						fontFamily: 'Rockwell, sans-serif',
						fontSize: '32px',
						color: '#173857'
					}}>
					What do you?
				</Typography>

				<Box
					mt={5}
					display="flex"
					sx={{
						'@media (max-width:700px)': {
							flexDirection: 'column',
							gap: '10px',
							pr: '0'
						}
					}}
					justifyContent="space-between"
					width="100%"
					alignItems="center">
					<Box justifyItems="center" gap={3} alignItems="center" flexDirection="column" display="flex">
						<Typography
							sx={{
								fontWeight: 400,
								fontFamily: 'Rockwell, sans-serif',
								fontSize: '24px',
								color: '#173857'
							}}>
							Speak
						</Typography>

						<Typography fontSize={16} color="#173857" maxWidth={260}>
							Speak with native speakers on any topic you want (not just about the weather). Make friends in different parts of the Earth!
						</Typography>
					</Box>
					<Box justifyItems="center" gap={3} alignItems="center" flexDirection="column" display="flex">
						<Typography
							sx={{
								fontWeight: 400,
								fontFamily: 'Rockwell, sans-serif',
								fontSize: '24px',
								color: '#173857'
							}}>
							Read
						</Typography>

						<Typography fontSize={16} color="#173857" maxWidth={260}>
							Read literature in the original language. Grow your vocabulary, master the language’s grammar, and broaden your horizons!
						</Typography>
					</Box>
					<Box justifyItems="center" gap={3} alignItems="center" flexDirection="column" display="flex">
						<Typography
							sx={{
								fontWeight: 400,
								fontFamily: 'Rockwell, sans-serif',
								fontSize: '24px',
								color: '#173857'
							}}>
							Understand
						</Typography>

						<Typography fontSize={16} color="#173857" maxWidth={260}>
							Understand new things about the foreign country, its culture and traditions. Feel yourself like a piece of something global!
						</Typography>
					</Box>
					<Box justifyItems="center" gap={3} alignItems="center" flexDirection="column" display="flex">
						<Typography
							sx={{
								fontWeight: 400,
								fontFamily: 'Rockwell, sans-serif',
								fontSize: '24px',
								color: '#173857'
							}}>
							Write
						</Typography>

						<Typography fontSize={16} color="#173857" maxWidth={260}>
							Write to your foreign friends or conduct business correspondence with people from other countries and even continents!
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Category;
