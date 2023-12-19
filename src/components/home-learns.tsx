import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';

interface HomeLearnsProps {}

const HomeLearns: FunctionComponent<HomeLearnsProps> = () => {
	const navigete = useNavigate();

	return (
		<>
			<Box display="flex" m="20px 200px" justifyContent="center" alignItems="center" flexDirection="column">
				<Typography
					sx={{
						fontWeight: 400,
						fontFamily: 'Rockwell, sans-serif',
						fontSize: '32px',
						'@media (max-width:700px)': {
							fontSize: '16px'
						},
						color: '#173857'
					}}
					variant="h3">
					Specific Language Lessons
				</Typography>

				<Grid
					mt={5}
					sx={{
						'@media (max-width:700px)': {
							marginTop: '5px'
						}
					}}
					container
					spacing={2}
					gap={5}>
					<Grid
						onClick={() => {
							navigete('/dashboard/language/eng');
						}}
						sx={{
							backgroundImage: 'url(https://www.learnalanguage.com/storage/app/uploads/public/5cf/62a/501/5cf62a5011e94517528621.png)',
							backgroundSize: 'cover',
							cursor: 'pointer',
							'@media (max-width:700px)': {
								minWidth: '300px',
								marginLeft: '0'
							}
						}}
						ml={4}
						bgcolor="yellow"
						width="100%"
						height="250px"
						item
						xs={12}
						sm={6}
						md={4}
						lg={3}
						display="flex"
						alignItems="center"
						justifyContent="flex-end"
						flexDirection="column">
						<Box
							height={50}
							width="100%"
							sx={{
								background: 'linear-gradient(to right, transparent, #173857)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: '#fff', // Set the text color
								fontSize: '24px',
								textDecorationColor: 'rgba(255, 255, 255, 0)'
							}}>
							English
						</Box>
					</Grid>

					<Grid
						sx={{
							backgroundImage: 'url(https://www.learnalanguage.com/storage/app/uploads/public/5d1/f41/04d/5d1f4104de9c1711200253.jpg)',
							backgroundSize: 'cover',
							cursor: 'pointer',
							'@media (max-width:700px)': {
								minWidth: '300px',
								marginLeft: '0'
							}
						}}
						onClick={() => {
							navigete('/dashboard/language/spa');
						}}
						ml={4}
						bgcolor="yellow"
						width="33%"
						height="250px"
						item
						xs={12}
						sm={6}
						md={4}
						lg={3}
						display="flex"
						alignItems="center"
						justifyContent="flex-end"
						flexDirection="column">
						<Box
							height={50}
							width="100%"
							sx={{
								background: 'linear-gradient(to right, transparent, #173857)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: '#fff', // Set the text color
								fontSize: '24px',
								textDecorationColor: 'rgba(255, 255, 255, 0)'
							}}>
							Spanish
						</Box>
					</Grid>
					<Grid
						sx={{
							backgroundImage: 'url(https://www.learnalanguage.com/storage/app/uploads/public/5d1/f40/f06/5d1f40f06cbb0940749737.jpg)',
							backgroundSize: 'cover',
							cursor: 'pointer',
							'@media (max-width:700px)': {
								minWidth: '300px',
								marginLeft: '0'
							}
						}}
						onClick={() => {
							navigete('/dashboard/language/fre');
						}}
						ml={4}
						bgcolor="yellow"
						width="33%"
						height="250px"
						item
						xs={12}
						sm={6}
						md={4}
						lg={3}
						display="flex"
						alignItems="center"
						justifyContent="flex-end"
						flexDirection="column">
						<Box
							height={50}
							width="100%"
							sx={{
								background: 'linear-gradient(to right, transparent, #173857)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: '#fff', // Set the text color
								fontSize: '24px',
								textDecorationColor: 'rgba(255, 255, 255, 0)'
							}}>
							French
						</Box>
					</Grid>
					<Grid
						sx={{
							backgroundImage: 'url(https://www.learnalanguage.com/storage/app/uploads/public/5d1/f40/dc5/5d1f40dc5bac4672570075.jpg)',
							backgroundSize: 'cover',
							cursor: 'pointer',
							'@media (max-width:700px)': {
								minWidth: '300px',
								marginLeft: '0'
							}
						}}
						onClick={() => {
							navigete('/dashboard/language/ita');
						}}
						ml={4}
						bgcolor="yellow"
						width="33%"
						height="250px"
						item
						xs={12}
						sm={6}
						md={4}
						lg={3}
						display="flex"
						alignItems="center"
						justifyContent="flex-end"
						flexDirection="column">
						<Box
							height={50}
							width="100%"
							sx={{
								background: 'linear-gradient(to right, transparent, #173857)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: '#fff', // Set the text color
								fontSize: '24px',
								textDecorationColor: 'rgba(255, 255, 255, 0)'
							}}>
							Italian
						</Box>
					</Grid>
					<Grid
						sx={{
							backgroundImage: 'url(https://www.learnalanguage.com/storage/app/uploads/public/5d1/f40/c40/5d1f40c40207c034000128.jpg)',
							backgroundSize: 'cover',
							cursor: 'pointer',
							'@media (max-width:700px)': {
								minWidth: '300px',
								marginLeft: '0'
							}
						}}
						onClick={() => {
							navigete('/dashboard/language/ger');
						}}
						ml={4}
						bgcolor="yellow"
						width="33%"
						height="250px"
						item
						xs={12}
						sm={6}
						md={4}
						lg={3}
						display="flex"
						alignItems="center"
						justifyContent="flex-end"
						flexDirection="column">
						<Box
							height={50}
							width="100%"
							sx={{
								background: 'linear-gradient(to right, transparent, #173857)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: '#fff', // Set the text color
								fontSize: '24px',
								textDecorationColor: 'rgba(255, 255, 255, 0)'
							}}>
							German
						</Box>
					</Grid>
					<Grid
						sx={{
							backgroundImage: 'url(https://www.learnalanguage.com/storage/app/uploads/public/5d1/f3b/d60/5d1f3bd60aebf015141870.jpg)',
							backgroundSize: 'cover',
							cursor: 'pointer',
							'@media (max-width:700px)': {
								minWidth: '300px',
								marginLeft: '0'
							}
						}}
						onClick={() => {
							navigete('/dashboard/language/tur');
						}}
						ml={4}
						bgcolor="yellow"
						width="33%"
						height="250px"
						item
						xs={12}
						sm={6}
						md={4}
						lg={3}
						display="flex"
						alignItems="center"
						justifyContent="flex-end"
						flexDirection="column">
						<Box
							height={50}
							width="100%"
							sx={{
								background: 'linear-gradient(to right, transparent, #173857)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: '#fff', // Set the text color
								fontSize: '24px',
								textDecorationColor: 'rgba(255, 255, 255, 0)'
							}}>
							Turkish
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default HomeLearns;
