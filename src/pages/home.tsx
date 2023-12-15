import { useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/material';

interface HomeProps {}

const Home = () => {
	const navigete = useNavigate();

	return (
		<>
			<Container
				sx={{
					width: '95%',
					background: 'white',
					height: '100vh',
					marginBottom: '20px',
					marginTop: '20px',
					padding: '24px',
					boxShadow: '0px 2px 6px 0px rgba(0,0,0,.16)',
					border: '1px solid transparent',
					borderRadius: '16px',
					minHeight: 'calc(100vh - 48px)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '40px'
				}}
				maxWidth="xl">
				<Box
					onClick={() => {
						navigete('/dashboard/vocabulary');
					}}
					sx={{
						marginBottom: '20px',
						marginTop: '20px',
						padding: '24px',
						boxShadow: '0px 2px 6px 0px rgba(0,0,0,.16)',
						border: '1px solid transparent',
						borderRadius: '16px',
						height: '600px',
						color: 'red',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						cursor: 'pointer'
					}}
					width="50%">
					<h2
						style={{
							fontSize: '3em',
							fontWeight: 'bold',
							color: '#000000'
						}}>
						Vocabulary
					</h2>
					<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<img width={500} height={400} src="https://web-student.inter-nation.uz/images/word.png" alt="" />
					</Box>
				</Box>

				<Box
					onClick={() => {
						navigete('/dashboard/translator');
					}}
					sx={{
						marginBottom: '20px',
						marginTop: '20px',
						padding: '24px',
						boxShadow: '0px 2px 6px 0px rgba(0,0,0,.16)',
						border: '1px solid transparent',
						borderRadius: '16px',
						height: '600px',
						color: 'red',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						cursor: 'pointer'
					}}
					width="50%">
					<Box display="flex" justifyContent="center" alignItems="center">
						<svg width="100" height="100" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M2.86218 5H9.86218M16.8622 5H14.3622M9.86218 5H14.3622M9.86218 5V3M14.3622 5C13.5417 7.73513 11.8234 10.3206 9.86218 12.5929M4.86218 17.5C6.44759 16.1411 8.23818 14.4744 9.86218 12.5929M9.86218 12.5929C8.86218 11.5 7.26218 9.3 6.86218 8.5M9.86218 12.5929L12.8622 15.5"
								stroke="#090A0A"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M14.3622 21L15.5051 18M22.3622 21L21.2193 18M15.5051 18L18.3622 10.5L21.2193 18M15.5051 18H21.2193"
								stroke="#090A0A"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<Box fontSize="3em" fontWeight="bold" color="#000000">
							Open translator
						</Box>
					</Box>
				</Box>
			</Container>
		</>
	);
};

export default Home;
