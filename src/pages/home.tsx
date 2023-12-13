import { useNavigate } from 'react-router-dom';
import { Box, Container, Grid, Typography } from '@mui/material';

interface HomeProps {}

const Home = () => {
	const navigete = useNavigate();

	return (
		<>
			<Container sx={{ background: 'red', height: 'fit-content', padding: '24px', minHeight: '100vh' }} maxWidth="xl">
				<Typography variant="h1" component="h2">
					Learna-Language Testing
				</Typography>

				<Grid mt={10} width="100%" container spacing={2}>
					<Grid
						onClick={() => {
							navigete('/language/eng');
						}}
						height="500px"
						item
						xs={4}
						sm={6}
						md={4}
						lg={3}>
						<Box
							width="100%"
							height="100%"
							sx={{
								backgroundImage: 'url(https://www.learnalanguage.com/storage/app/uploads/public/5cf/62a/501/5cf62a5011e94517528621.png)',
								backgroundSize: 'cover'
							}}>
							ds
						</Box>
					</Grid>
					<Grid
						onClick={() => {
							navigete('/language/ru');
						}}
						height="500px"
						sm={6}
						md={4}
						lg={3}
						item
						xs={4}>
						<Box
							width="100%"
							height="100%"
							sx={{
								backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png)',
								backgroundSize: 'cover'
							}}>
							ds
						</Box>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Home;
