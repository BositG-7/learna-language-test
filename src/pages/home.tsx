import { FunctionComponent, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

import AllLearn from 'components/all-learn';
import Category from 'components/category';
import Footer from 'components/footer';
import Header from 'components/header';
import HomeLearns from 'components/home-learns';

import Translator from '../components/translator';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
	const i = 0;
	const [isButton, setIsButton] = useState(false);

	const handleButton = () => {
		setIsButton(!isButton);
	};

	if (isButton) return <AllLearn onButton={handleButton} />;
	return (
		<>
			<Box width="100%" maxWidth="100%" overflow="hidden">
				<Box
					sx={{
						display: 'flex',
						width: '100%',
						bgcolor: 'red',
						height: '500px',
						alignItems: 'center',
						backgroundSize: 'cover',
						backgroundImage: 'url(https://www.learnalanguage.com/themes/demo/assets/images/banner.jpg)',
						padding: '10px 50px',
						flexDirection: 'column'
					}}>
					<Header />
					<Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={5}>
						<Typography color="#FFFFFF" fontSize={32} fontWeight={400} variant="h1" component="h2">
							Learn a Language
						</Typography>
						<Typography sx={{ fontSize: '16px', lineHeight: '18px', color: '#FFFFFF', maxWidth: '530px' }} component="p">
							Learn a language right here with hundreds of free language-learning lessons, games and activities. Join us and have some fun.
						</Typography>
						<Button onClick={handleButton} sx={{ bgcolor: '#28c3dd', color: '#fff', padding: '16px 32px' }}>
							Start learning now
						</Button>
					</Box>
				</Box>
				{/* Header tugashi */}

				<HomeLearns />

				<Category />
				<Translator />
			</Box>
			<Footer />
		</>
	);
};

export default Home;
