import { FunctionComponent } from 'react';
import { Box, Button, Typography } from '@mui/material';

interface AllLearnProps {
	onButton: () => void;
}

const AllLearn: FunctionComponent<AllLearnProps> = ({ onButton }) => {
	const i = 0;

	return (
		<>
			<Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh" width="100%">
				<Typography variant="h2">I want to learn...</Typography>

				<Box display="flex" mt={5} justifyContent="center" alignItems="center" gap="20px">
					<Box sx={{ cursor: 'pointer' }} display="flex" justifyContent="center" alignItems="center" gap={1}>
						<img src="https://www.learnalanguage.com/themes/demo/assets/images/flags/English.svg" alt="" />
						<Typography>English</Typography>
					</Box>
					<Box sx={{ cursor: 'pointer' }} display="flex" justifyContent="center" alignItems="center" gap={1}>
						<img src="https://www.learnalanguage.com/themes/demo/assets/images/flags/German.svg" alt="" />
						<Typography>German</Typography>
					</Box>
					<Box sx={{ cursor: 'pointer' }} display="flex" justifyContent="center" alignItems="center" gap={1}>
						<img src="https://www.learnalanguage.com/themes/demo/assets/images/flags/French.svg" alt="" />
						<Typography>French</Typography>
					</Box>
				</Box>
				<Box mt={1} display="flex" justifyContent="center" alignItems="center" gap="20px">
					<Box sx={{ cursor: 'pointer' }} display="flex" justifyContent="center" alignItems="center" gap={1}>
						<img src="https://www.learnalanguage.com/themes/demo/assets/images/flags/Spanish.svg" alt="" />
						<Typography>Spanish</Typography>
					</Box>
					<Box sx={{ cursor: 'pointer' }} display="flex" justifyContent="center" alignItems="center" gap={1}>
						<img src="https://www.learnalanguage.com/themes/demo/assets/images/flags/Italian.svg" alt="" />
						<Typography>Italian</Typography>
					</Box>
					<Box sx={{ cursor: 'pointer' }} display="flex" justifyContent="center" alignItems="center" gap={1}>
						<img src="https://www.learnalanguage.com/themes/demo/assets/images/flags/Turkish.svg" alt="" />
						<Typography>Turkish</Typography>
					</Box>
				</Box>

				<Button
					sx={{
						border: '2px solid #095ab3',
						color: '#095ab3',
						backgroundColor: 'transparent',
						cursor: 'pointer',
						borderRadius: '4px',
						textDecoration: 'none',
						fontWeight: 500,
						transition: '0.3s',
						display: 'inline-block',
						textAlign: 'center',
						padding: '8px 32px',
						marginTop: '50px'
					}}
					onClick={onButton}>
					Back Home
				</Button>
			</Box>
		</>
	);
};

export default AllLearn;
