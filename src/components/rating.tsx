import { FunctionComponent } from 'react';
import { Box, Button, Container } from '@mui/material';

import { Confetti } from 'components';

interface RatingProps {
	rating: number;
}

const Rating: FunctionComponent<RatingProps> = ({ rating }) => {
	const i = 0;

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
					minHeight: 'calc(100vh - 48px)'
				}}
				maxWidth="xl">
				<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Box
						sx={{ border: '1px solid black', padding: '12px', borderRadius: '8px', fontWeight: '500px', fontSize: '16px', lineHeight: '24px' }}>
						Vocabulary
					</Box>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<img src="https://web-student.inter-nation.uz/images/lesson/good.svg" alt="" />
				</Box>

				<Box
					mt={10}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						fontWeight: 700,
						fontSize: '48px', // Font size should be specified as a string
						lineHeight: '56px', // Line height should be specified as a string
						color: '#000000'
					}}>
					<Confetti />

					{`${rating}/10`}
				</Box>
				<Box
					mt={5}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						fontWeight: 500,
						fontSize: '18px',
						lineHeight: '28px',
						color: '#979c9e'
					}}>
					Keep moving forward. Vocabulary will help you a lot in speaking English fluently.
				</Box>
				<Box
					mt={5}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						color: '#000000',
						fontSize: '1.5em',
						fontWeight: 'bold'
					}}>
					{rating > 5 ? <h2 style={{ fontSize: '1.5em' }}>Good!</h2> : <h2 style={{ fontSize: '1.5em' }}>Poor!</h2>}
				</Box>

				<Box mt={5} sx={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
					<Button
						onClick={() => {
							window.location.href = '/';
						}}
						sx={{
							fontSize: '14px', // Font size should be specified as a string
							height: '68px', // Height should be specified as a string
							display: 'inline-flex',
							alignItems: 'center',
							borderRadius: '16px', // Border radius should be specified as a string
							justifyContent: 'center',
							position: 'relative',
							padding: '0px 26px !important',
							outline: 'none !important',
							boxShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 4px',
							background: 'rgb(247, 249, 250) !important',
							color: 'rgb(9, 10, 10) !important',
							borderColor: 'rgb(217, 217, 217) !important',
							width: '327px'
						}}>
						Back to Main
					</Button>
					<Button
						onClick={() => {
							window.location.reload();
						}}
						sx={{
							fontSize: '14px', // Font size should be specified as a string
							height: '68px', // Height should be specified as a string
							display: 'inline-flex',
							alignItems: 'center',
							borderRadius: '16px', // Border radius should be specified as a string
							justifyContent: 'center',
							position: 'relative',
							padding: '0px 26px !important',
							outline: 'none !important',
							boxShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 4px',
							background: '#ffcf00',
							color: 'rgb(9, 10, 10) !important',
							borderColor: 'rgb(217, 217, 217) !important',
							width: '327px'
						}}>
						Retry
					</Button>
				</Box>
			</Container>
		</>
	);
};

export default Rating;
