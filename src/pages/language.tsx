import { FunctionComponent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';

import Navbar from 'components/navbar';

interface LanguageProps {}

const Language: FunctionComponent<LanguageProps> = () => {
	const { language } = useParams();
	const navigete = useNavigate();

	return (
		<>
			<Navbar />
			<Container
				sx={{
					width: '100%',
					background: 'white',
					height: 'calc(100vh - 100px)',

					padding: '0px'
				}}
				maxWidth="xl">
				<Box
					sx={{
						backgroundColor: '#efefef',
						width: '100%',
						WebkitBoxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.16)',
						boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.16)',
						paddingTop: '26px',
						paddingBottom: '24px',
						position: 'fixed',
						top: '88px',
						left: '0',
						zIndex: 99,
						maxHeight: 'fit-content'
					}}
					gap={20}
					padding={0}
					display="flex"
					bgcolor="red"
					justifyContent="center"
					alignItems="center"
					height={75}>
					<Typography
						onClick={() => {
							navigete(`/dashboard/language/${language}`);
						}}>
						Learn {language}
					</Typography>
					<Typography
						onClick={() => {
							navigete('/dashboard/vocabulary');
						}}>
						Quiz testing
					</Typography>
				</Box>
				<Box
					mt="80px"
					sx={{
						'@media (max-width:700px)': {
							marginTop: '200px'
						}
					}}
					display="flex"
					justifyContent="center"
					alignItems="center">
					<Typography sx={{ color: 'color: #173857' }}>Home / English</Typography>
				</Box>
				<Box display="flex" justifyContent="center" alignItems="center" gap={10}>
					<Box
						sx={{
							'@media (max-width:700px)': {
								display: 'none'
							}
						}}>
						<img width="400px" height="100%" src="https://www.learnalanguage.com/themes/demo/assets/images/maps/English.png" alt="" />
					</Box>
					<Box justifyContent="center" flexDirection="column" alignItems="center" display="flex" gap={3}>
						<Typography
							sx={{
								fontWeight: 400,
								fontFamily: 'Rockwell, sans-serif',
								fontSize: '32px',
								color: '#173857'
							}}>
							Learn {language}
						</Typography>

						<Box flexDirection="column" justifyContent="center" alignItems="center" display="flex" gap={3}>
							<Typography
								sx={{
									fontSize: '14px',
									lineHeight: 1.4,
									color: '#173857'
								}}>
								map English Being the language of science, diplomacy, tourism, IT, the media industry, English bridges nations all over the
								world and contributes to progress. This is evidence of its lingua franca status. Do you want to travel anywhere in the world?
								English is here for you!
							</Typography>

							<Typography
								sx={{
									fontSize: '14px',
									lineHeight: 1.4,
									color: '#173857'
								}}>
								English is one of the most widely spoken languages in the world. It is the official language in 55 countries, which include
								primarily the USA, the UK, Australia, and New Zealand. In 27 territories, English has the official status of the language used
								mainly for interactions with the government officials. This refers to Hong Kong, the Isle of Man, Puerto Rico, among many.
								Being a lingua franca language, it is spoken all over the world on almost all continents. It is spoken in European countries,
								in India, Pakistan, the Philippines, Nigeria, and others.
							</Typography>
							<Typography
								sx={{
									fontSize: '14px',
									lineHeight: 1.4,
									color: '#173857'
								}}>
								English is the third most-spoken native language (after Chinese and Spanish) in the world. If we speak about native speakers,
								there are 360-400 million people worldwide. As for the number of people who learn English as a second language, this is about
								750 million individuals, and 600 million learn it as a foreign language.
							</Typography>
						</Box>
					</Box>
				</Box>
			</Container>
		</>
	);
};

export default Language;
